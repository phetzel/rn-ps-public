import React from 'react';

import { AdCardView } from '~/components/shared/ad-card/AdCardView';
import { useAdCard } from '~/lib/hooks/useAdCard';

import type { EntityWithDelta } from '~/types';

type RewardAdType = 'relationship' | 'approval';

interface AdCardProps {
  adType: RewardAdType;
  enhancedDeltas: EntityWithDelta[] | null;
  isAdWatched: boolean;
  onAdComplete?: () => void;
  className?: string;
}

export function AdCard({
  adType,
  enhancedDeltas,
  isAdWatched,
  onAdComplete,
  className,
}: AdCardProps) {
  const { isButtonDisabled, showAd, hasError, errorMessage, canRequestAds } = useAdCard({
    adType,
    onAdComplete,
    disabled: isAdWatched,
  });

  return (
    <AdCardView
      adType={adType}
      enhancedDeltas={enhancedDeltas}
      isAdWatched={isAdWatched}
      onWatchAd={showAd}
      isButtonDisabled={isButtonDisabled}
      canRequestAds={canRequestAds}
      hasError={hasError}
      errorMessage={errorMessage}
      className={className}
    />
  );
}
