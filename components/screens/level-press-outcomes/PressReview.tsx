import React, { useEffect, useState } from "react";

// Components
import { ResultsCard } from "~/components/shared/results/ResultsCard";
// Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// Models
import { getEnhancedRelationshipDeltas } from "~/lib/db/helpers";
// Types
import { EntityWithDelta } from "~/types";

interface PressReviewProps {
  isAdWatched: boolean;
  onAdComplete: () => void;
}

export default function PressReview({
  isAdWatched,
  onAdComplete,
}: PressReviewProps) {
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
    />
  );
}
