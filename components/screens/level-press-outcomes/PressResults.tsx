// components/press-outcomes/PressResults.tsx
import React, { useEffect, useState } from "react";

// Components
import { ResultsCard } from "~/components/shared/results/ResultsCard";
// Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// Models
import { Level } from "~/lib/db/models";
import { getEnhancedRelationshipDeltas } from "~/lib/db/helpers";
// Types
import { EntityWithDelta } from "~/types";

interface PressResultsProps {
  isAdWatched: boolean;
  onComplete: () => void;
  onAdComplete: () => void;
}

export default function PressResults({
  isAdWatched,
  onComplete,
  onAdComplete,
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
    <ResultsCard
      enhancedDeltas={enhancedDeltas}
      isAdWatched={isAdWatched}
      onAdComplete={onAdComplete}
      adWatchMessage="You've successfully boosted your relationship outcomes!"
      onComplete={onComplete}
    />
  );
}
