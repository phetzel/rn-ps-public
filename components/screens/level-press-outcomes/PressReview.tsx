import React, { useEffect, useState } from "react";

// Components
import { AdCard } from "~/components/shared/ad-card/AdCard";
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
    <AdCard
      adType="relationship"
      enhancedDeltas={enhancedDeltas}
      isAdWatched={isAdWatched}
      onAdComplete={onAdComplete}
    />
  );
}
