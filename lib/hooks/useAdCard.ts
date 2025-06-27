import { useEffect, useState } from "react";
import {
  useRewardedAd,
  TestIds,
  AdsConsentStatus,
} from "react-native-google-mobile-ads";
import { Platform } from "react-native";
import { useConsentStore } from "~/lib/stores/consentStore";

type RewardAdType = "relationship" | "approval";

interface UseAdCardProps {
  adType: RewardAdType;
  onAdComplete?: () => void;
  disabled?: boolean; // Don't load if already watched
}

interface UseAdCardReturn {
  isButtonDisabled: boolean;
  showAd: () => void;
  hasError: boolean;
  errorMessage?: string;
  canRequestAds: boolean;
  // consentStatus: AdsConsentStatus | null;
}

const getAdUnitId = (adType: RewardAdType): string => {
  if (__DEV__) {
    return TestIds.REWARDED;
  }

  const envKeys = {
    relationship: {
      ios: process.env.ADMOB_IOS_REWARD_RELATIONSHIP_ID,
      android: process.env.ADMOB_ANDROID_REWARD_RELATIONSHIP_ID,
    },
    approval: {
      ios: process.env.ADMOB_IOS_REWARD_APPROVAL_ID,
      android: process.env.ADMOB_ANDROID_REWARD_APPROVAL_ID,
    },
  };

  const platformId = Platform.select({
    ios: envKeys[adType].ios,
    android: envKeys[adType].android,
  });

  return platformId || TestIds.REWARDED;
};

export function useAdCard({
  adType,
  onAdComplete,
  disabled = false,
}: UseAdCardProps): UseAdCardReturn {
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [userInitiatedShow, setUserInitiatedShow] = useState<boolean>(false);

  // Get enhanced consent status
  const { canRequestAds, isSdkInitialized } = useConsentStore();

  // Get the appropriate ad unit ID for this ad type
  const adUnitId = getAdUnitId(adType);

  // Only attempt to load ads if consent allows and not disabled
  const shouldLoadAd = isSdkInitialized && canRequestAds && !disabled;

  const { isLoaded, load, show, reward, isEarnedReward } = useRewardedAd(
    adUnitId,
    {
      keywords: ["games", "politics", "simulation"],
    }
  );

  // Load ad when component mounts (only if conditions are met)
  useEffect(() => {
    if (shouldLoadAd && !isLoaded && !hasError) {
      load();
    }
  }, [shouldLoadAd, isLoaded, hasError, load, adType]);

  // Handle ad completion
  useEffect(() => {
    if (isEarnedReward && userInitiatedShow && onAdComplete && !disabled) {
      onAdComplete();
      setUserInitiatedShow(false);
    }
  }, [
    isEarnedReward,
    userInitiatedShow,
    onAdComplete,
    adType,
    disabled,
    reward,
  ]);

  // Handle ad errors
  useEffect(() => {
    // Reset error state when ad loads successfully
    if (isLoaded && hasError) {
      setHasError(false);
      setErrorMessage(undefined);
    }
  }, [isLoaded, hasError]);

  const showAd = () => {
    if (disabled) {
      setHasError(true);
      setErrorMessage("Ad already watched for this level.");
      return;
    }

    if (!canRequestAds) {
      setHasError(true);
      setErrorMessage("Ads not available due to consent settings.");
      return;
    }

    if (!isLoaded) {
      setHasError(true);
      setErrorMessage("Ad not ready yet. Please try again.");
      return;
    }

    try {
      setUserInitiatedShow(true);
      show();
    } catch (error) {
      setHasError(true);
      setErrorMessage("Failed to show ad. Please try again.");
      setUserInitiatedShow(false);
    }
  };

  // Button is disabled if consent not given, already watched, ad not loaded, or has error
  const isButtonDisabled = !canRequestAds || disabled || !isLoaded || hasError;

  return {
    isButtonDisabled,
    showAd,
    hasError,
    errorMessage,
    canRequestAds,
  };
}
