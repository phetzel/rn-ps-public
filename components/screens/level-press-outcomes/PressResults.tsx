// components/press-outcomes/PressResults.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

// Components
import { ResultsTable } from "~/components/shared/results/ResultsTable";
// Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// Models
import { Level } from "~/lib/db/models";
import { getEnhancedRelationshipDeltas } from "~/lib/db/helpers/entityApi";
// Types
import { EntityWithDelta } from "~/types";

interface PressResultsProps {
  gameId: string;
  level: Level;
  isAdWatched: boolean;
}

export default function PressResults({
  gameId,
  level,
  isAdWatched,
}: PressResultsProps) {
  const [enhancedDeltas, setEnhancedDeltas] = useState<
    EntityWithDelta[] | null
  >(null);

  const { currentLevelId } = useCurrentLevelStore((state) => ({
    currentLevelId: state.currentLevelId,
  }));

  useEffect(() => {
    async function loadDeltas() {
      if (!currentLevelId) return;

      const results = await getEnhancedRelationshipDeltas(currentLevelId);
      setEnhancedDeltas(results);
    }

    loadDeltas();
  }, [currentLevelId]);

  return (
    <ResultsTable
      enhancedDeltas={enhancedDeltas}
      isAdWatched={isAdWatched}
      adMessage={{
        watched: "You've successfully boosted your relationship outcomes!",
        notWatched: "Watch a short ad to boost your results.",
      }}
    />
  );
}
