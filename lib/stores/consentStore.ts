import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import { Platform } from 'react-native';
import mobileAds, { AdsConsent } from 'react-native-google-mobile-ads';
import { create } from 'zustand';

import { setAnalyticsEnabled as persistAnalyticsEnabled } from '~/lib/db/helpers/appSettings';
import {
  initIfEnabled as analyticsInitIfEnabled,
  setEnabled as analyticsSetEnabled,
} from '~/lib/infra/analytics';

interface ConsentStoreState {
  // State
  isSdkInitialized: boolean;
  canRequestAds: boolean;
  formAvailable: boolean;

  // Actions
  prepareConsentInfo: () => Promise<void>;
  gatherConsentGDRP: () => Promise<void>;
  checkConsentGDRP: () => Promise<void>;
  gatherConsentRegulatedUSState: () => Promise<void>;
  gatherATTConsentIOS: () => Promise<void>;
  startGoogleMobileAdsSDK: () => Promise<void>;
  showPrivacyOptions: () => Promise<void>;
}

const updateAnalyticsConsent = async (granted: boolean) => {
  try {
    await persistAnalyticsEnabled(granted);
    analyticsSetEnabled(granted);
    if (granted) {
      analyticsInitIfEnabled();
    }
  } catch (error) {
    console.error('Failed to update analytics consent:', error);
  }
};

export const useConsentStore = create<ConsentStoreState>((set, get) => ({
  isSdkInitialized: false,
  canRequestAds: false,
  formAvailable: false,

  // Actions
  /**
   * 1. Request consent information update
   * 2. Check if user is in EEA (GDRP applies)
   * 3. Move forward based on consentInfo and gdrpApplies:
   *      3a. If consent is not required, proceed to start SDK
   *      3b. If consent is obtained, check if the user is in the EEA (GDPR applies)
   *      if user is in EEA, call checkConsent(), else, proceed to start SDK
   *      3c. If consent status is REQUIRED or UNKNOWN, check if user is in EEA
   *      if user is in EEA, request GDRP form. Otherwise, present the US regulation     form if required/available
   */
  prepareConsentInfo: async () => {
    const consentInfo = await AdsConsent.requestInfoUpdate();
    const gdrpApplies = await AdsConsent.getGdprApplies();

    const form = consentInfo.isConsentFormAvailable;
    set({ formAvailable: form });
    if (consentInfo.status === 'NOT_REQUIRED') {
      set({ canRequestAds: true });
      await updateAnalyticsConsent(true);
      await get().startGoogleMobileAdsSDK();
    } else if (consentInfo.status === 'OBTAINED') {
      if (gdrpApplies) {
        await get().checkConsentGDRP();
      } else {
        set({ canRequestAds: true });
        await updateAnalyticsConsent(true);
        await get().startGoogleMobileAdsSDK();
      }
    } else {
      if (gdrpApplies) {
        await get().gatherConsentGDRP();
      } else {
        await get().gatherConsentRegulatedUSState();
      }
    }
  },

  /** Present GDRP consent form, then go to checkConsentGDRP */
  gatherConsentGDRP: async () => {
    try {
      await AdsConsent.gatherConsent();
      await get().checkConsentGDRP();
    } catch (error) {
      console.error('Consent gathering failed:', error);
    }
  },

  /** Determine whether user can be shown ads at all based on their selection to:
   *      a. Store and Access Information on Device
   *      b. Basic consent for advertising
   *  If user has accepted basic ads, set canRequestAds to true and start SDK
   *  Otherwise, do not start SDK and leave canRequestAds false
   */
  checkConsentGDRP: async () => {
    const consentInfo = await AdsConsent.getConsentInfo();
    const userChoices = await AdsConsent.getUserChoices();

    // manually check for at least basic consent before requesting ads
    const hasBasicConsent =
      userChoices.storeAndAccessInformationOnDevice && userChoices.selectBasicAds;

    const finalCanRequestAds = consentInfo.canRequestAds && hasBasicConsent;

    set({ canRequestAds: finalCanRequestAds });
    await updateAnalyticsConsent(finalCanRequestAds);

    if (finalCanRequestAds) await get().startGoogleMobileAdsSDK();
  },

  /** Use gatherConsent to show US Regulated State form if required, then start SDK */
  gatherConsentRegulatedUSState: async () => {
    try {
      await AdsConsent.gatherConsent();
      set({ canRequestAds: true });
      await updateAnalyticsConsent(true);
      await get().startGoogleMobileAdsSDK();
    } catch (error) {
      console.error('Consent gathering failed:', error);
    }
  },

  /** Called by startGoogleMobileAdsSDK. If user can receive ads at all, either by GDRP consent or local laws, request ATT tracking permissions on IOS */
  gatherATTConsentIOS: async () => {
    const gdprApplies = await AdsConsent.getGdprApplies();
    const hasConsentForPurposeOne =
      gdprApplies && (await AdsConsent.getPurposeConsents()).startsWith('1');
    if (!gdprApplies || hasConsentForPurposeOne) {
      const status = await requestTrackingPermissionsAsync();
      // If user specifically denies ATT, we should respect that for analytics too
      if (status.status === 'denied') {
        await updateAnalyticsConsent(false);
      } else if (status.status === 'granted') {
        // Re-affirm consent
        await updateAnalyticsConsent(true);
      }
    }
  },

  /** If user has consented to received ads at all or is allowed by local laws, request ATT on IOS and start the SDK */
  startGoogleMobileAdsSDK: async () => {
    if (Platform.OS === 'ios') {
      await get().gatherATTConsentIOS();
    }

    if (!get().isSdkInitialized) {
      await mobileAds().initialize();
      set({ isSdkInitialized: true });
    }
  },

  showPrivacyOptions: async () => {
    const gdrpApplies = await AdsConsent.getGdprApplies();
    if (gdrpApplies) {
      await AdsConsent.showForm();
      await get().checkConsentGDRP();
    } else {
      await AdsConsent.showForm();
      // For non-GDPR (e.g. US), the form might be a "Do Not Sell" toggle.
      // We should strictly speaking check the status/result, but UMP API is opaque here for US.
      // Assuming flow continues.
    }
  },
}));
