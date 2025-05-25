import { useState, useEffect } from "react";
import { getEnhancedSituationOutcomeDeltas } from "~/lib/db/helpers";
import { PublicationBoost, EntityWithMediaDelta } from "~/types";

export function useMediaCoverageData({ levelId }: { levelId: string }) {
  const [mediaBoosts, setMediaBoosts] = useState<PublicationBoost[]>([]);
  const [totalBoost, setTotalBoost] = useState<number>(1.0);
  const [enhancedDeltas, setEnhancedDeltas] = useState<EntityWithMediaDelta[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchMediaBoosts() {
      setIsLoading(true);
      setError(null);
      try {
        // Single function call that returns everything we need
        const { deltas, boosts, totalBoost } =
          await getEnhancedSituationOutcomeDeltas(levelId);

        if (!isMounted) return;
        setMediaBoosts(boosts);
        setTotalBoost(totalBoost);
        setEnhancedDeltas(deltas);
      } catch (err) {
        console.error("Error loading media boosts:", err);
        if (isMounted) setError(err as Error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchMediaBoosts();

    return () => {
      isMounted = false;
    };
  }, [levelId]);

  return {
    mediaBoosts,
    totalBoost,
    enhancedDeltas,
    isLoading,
    error,
  };
}
