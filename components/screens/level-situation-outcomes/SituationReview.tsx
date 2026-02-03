import React, { useEffect, useState } from 'react';

// Components
import { AdCard } from '~/components/shared/ad-card/AdCard';
// Hooks
import { getEnhancedSituationOutcomeDeltas } from '~/lib/db/helpers';
import { useCurrentLevelStore } from '~/lib/stores/currentLevelStore';

// Models
// Typess
import type { EntityWithMediaDelta } from '~/types';

interface SituationReviewProps {
  isAdWatched: boolean;
  onAdComplete: () => void;
}

export default function SituationReview({ isAdWatched, onAdComplete }: SituationReviewProps) {
  const [enhancedDeltas, setEnhancedDeltas] = useState<EntityWithMediaDelta[] | null>(null);

  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  useEffect(() => {
    async function loadDeltas() {
      if (!currentLevelId) return;

      const results = await getEnhancedSituationOutcomeDeltas(currentLevelId);
      setEnhancedDeltas(results.deltas);
    }

    loadDeltas();
  }, [currentLevelId]);

  return (
    <AdCard
      adType="approval"
      enhancedDeltas={enhancedDeltas}
      isAdWatched={isAdWatched}
      onAdComplete={onAdComplete}
    />
  );
}
