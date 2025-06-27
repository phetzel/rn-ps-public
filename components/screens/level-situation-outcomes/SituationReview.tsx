import React, { useEffect, useState } from "react";

// Components
import { AdCard } from "~/components/shared/ad-card/AdCard";
// Hooks
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// Models
import { getEnhancedSituationOutcomeDeltas } from "~/lib/db/helpers";
// Typess
import { EntityWithMediaDelta } from "~/types";

interface SituationReviewProps {
  isAdWatched: boolean;
  onAdComplete: () => void;
}

export default function SituationReview({
  isAdWatched,
  onAdComplete,
}: SituationReviewProps) {
  const [enhancedDeltas, setEnhancedDeltas] = useState<
    EntityWithMediaDelta[] | null
  >(null);

  const { currentLevelId } = useCurrentLevelStore((state) => ({
    currentLevelId: state.currentLevelId,
    progressCurrentLevel: state.progressCurrentLevel,
  }));

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
