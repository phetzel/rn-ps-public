import React, { useEffect, useState } from "react";

// Components
import { ResultsCard } from "~/components/shared/results/ResultsCard"; // Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// Models
import { getEnhancedSituationOutcomeDeltas } from "~/lib/db/helpers";
// Typess
import { EntityWithMediaDelta } from "~/types";

interface SituationResultsProps {
  isAdWatched: boolean;
  onComplete: () => void;
  onAdComplete: () => void;
}

export default function SituationResults({
  isAdWatched,
  onComplete,
  onAdComplete,
}: SituationResultsProps) {
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
    <ResultsCard
      enhancedDeltas={enhancedDeltas}
      isAdWatched={isAdWatched}
      onAdComplete={onAdComplete}
      adWatchMessage="You've successfully boosted your situation approval changes!"
      onComplete={onComplete}
    />
  );
}
