import React from 'react';

import AdCardHeader from '~/components/shared/ad-card/AdCardHeader';
import { ResultsTableList } from '~/components/shared/results/ResultsTableList';
import { Card, CardContent } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { useAdCard } from '~/lib/hooks/useAdCard';
import { cn } from '~/lib/utils';

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
    disabled: isAdWatched, // Don't load ad if already watched
  });

  const entityCount = enhancedDeltas?.length || 0;
  let adStatus = 'Ad boost unavailable';
  let borderClassName = 'border-l-gray-400';

  if (isAdWatched) {
    adStatus = 'Ad boost applied';
    borderClassName = 'border-l-green-500';
  } else if (canRequestAds) {
    adStatus = 'Ad boost available';
    borderClassName = 'border-l-blue-500';
  }

  return (
    <Card
      className={cn('border-l-4', borderClassName, className)}
      accessible={true}
      accessibilityLabel={`Results summary with ${entityCount} entities. ${adStatus}.`}
    >
      <AdCardHeader
        isAdWatched={isAdWatched}
        onWatchAd={showAd}
        isButtonDisabled={isButtonDisabled}
        canRequestAds={canRequestAds}
      />
      <CardContent className="gap-4">
        {hasError && errorMessage && <Text className="text-red-500 text-sm">{errorMessage}</Text>}
        <ResultsTableList
          enhancedDeltas={enhancedDeltas}
          isAdWatched={isAdWatched}
          showAdColumn={true}
        />
      </CardContent>
    </Card>
  );
}
