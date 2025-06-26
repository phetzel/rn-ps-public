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
  console.log("__DEV__", __DEV__);

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  // Get enhanced consent status
  const { canRequestAds, isSdkInitialized } = useConsentStore();

  // Get the appropriate ad unit ID for this ad type
  const adUnitId = getAdUnitId(adType);

  // Only attempt to load ads if consent allows and not disabled
  const shouldLoadAd = isSdkInitialized && canRequestAds && !disabled;

  const { isLoaded, isClosed, load, show, reward } = useRewardedAd(adUnitId, {
    keywords: ["games", "politics", "simulation"],
  });
  console.log("reward", reward);
  console.log("isLoaded", isLoaded);

  // Load ad when component mounts (only if conditions are met)
  useEffect(() => {
    console.log("load useEffect");
    if (shouldLoadAd && !isLoaded && !hasError) {
      console.log("load useEffect condition met");
      console.log(`Loading ${adType} ad`);
      load();
    }
  }, [shouldLoadAd, isLoaded, hasError, load, adType]);

  // Handle ad completion
  useEffect(() => {
    console.log("reward useEffect");
    if (reward && onAdComplete && !disabled) {
      console.log("reward useEffect condition met");
      console.log(`${adType} ad reward received:`, reward);
      onAdComplete();
    }
  }, [reward, onAdComplete, adType, disabled]);

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
      console.log(`Showing ${adType} ad`);
      show();
    } catch (error) {
      setHasError(true);
      setErrorMessage("Failed to show ad. Please try again.");
      console.error("Ad show error:", error);
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
