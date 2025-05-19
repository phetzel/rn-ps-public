import React, { useEffect, useState } from "react";

// Components
import { ResultsTable } from "~/components/shared/results/ResultsTable";
// Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// Models
import { Level } from "~/lib/db/models";
import { getEnhancedSituationOutcomeDeltas } from "~/lib/db/helpers/entityApi";
// Typess
import { EntityWithDelta } from "~/types";

interface SituationResultsProps {
  gameId: string;
  level: Level;
  isAdWatched: boolean;
}

export default function SituationResults({
  gameId,
  level,
  isAdWatched,
}: SituationResultsProps) {
  const [enhancedDeltas, setEnhancedDeltas] = useState<
    EntityWithDelta[] | null
  >(null);

  const { currentLevelId } = useCurrentLevelStore((state) => ({
    currentLevelId: state.currentLevelId,
    progressCurrentLevel: state.progressCurrentLevel,
  }));

  useEffect(() => {
    async function loadDeltas() {
      if (!currentLevelId) return;

      const results = await getEnhancedSituationOutcomeDeltas(currentLevelId);
      setEnhancedDeltas(results);
    }

    loadDeltas();
  }, [currentLevelId]);

  return (
    <ResultsTable
      enhancedDeltas={enhancedDeltas}
      isAdWatched={isAdWatched}
      adMessage={{
        watched: "You've successfully boosted your situation approval changes!",
        notWatched:
          "Watch a short ad to boost your situation approval changes.",
      }}
      usePlusMinusFormat={false}
    />
  );
}
