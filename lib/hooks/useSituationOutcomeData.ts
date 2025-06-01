import { useState, useEffect, useMemo } from "react";
import { calculateSituationOutcomeWeights } from "~/lib/db/helpers/situationApi";
import type { Situation } from "~/lib/db/models";
import type {
  SituationOutcomeWeight,
  SituationImpacts,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";

export function useSituationOutcomeData(situation: Situation) {
  const [outcomeWeights, setOutcomeWeights] = useState<
    SituationOutcomeWeight[]
  >([]);
  const [selectedOutcomeWeight, setSelectedOutcomeWeight] =
    useState<SituationOutcomeWeight | null>(null);
  const [alternativeOutcomesWeights, setAlternativeOutcomesWeights] = useState<
    SituationOutcomeWeight[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Get all outcomes from the situation content
  const allOutcomes = useMemo(() => {
    return situation?.parseContent?.outcomes || [];
  }, [situation?.parseContent]);

  // Find the actual selected outcome object from the content
  const selectedOutcome = useMemo(() => {
    if (!allOutcomes.length || !situation?.outcomeId) return null;

    return allOutcomes.find((o) => o.id === situation.outcomeId) || null;
  }, [allOutcomes, situation?.outcomeId]);

  // Calculate formatted impacts from the selected outcome
  const formattedImpacts = useMemo(() => {
    if (!selectedOutcome) return {};

    const impacts: SituationImpacts = {};
    const consequences = selectedOutcome.consequences;

    // Add cabinet impacts
    if (consequences.approvalChanges.cabinet) {
      Object.entries(consequences.approvalChanges.cabinet).forEach(
        ([id, weight]) => {
          if (!impacts.cabinet) {
            impacts.cabinet = {};
          }
          impacts.cabinet[id as CabinetStaticId] = {
            weight,
            reaction: "",
          };
        }
      );
    }

    // Format subgroup impacts with proper structure
    if (consequences.approvalChanges.subgroups) {
      Object.entries(consequences.approvalChanges.subgroups).forEach(
        ([id, weight]) => {
          if (!impacts.subgroups) {
            impacts.subgroups = {};
          }
          impacts.subgroups[id as SubgroupStaticId] = {
            weight,
            reaction: "",
          };
        }
      );
    }

    return impacts;
  }, [selectedOutcome]);

  useEffect(() => {
    const loadOutcomes = async () => {
      if (!situation) return;
      setIsLoading(true);

      try {
        // Calculate effective weights using the model method
        const weights = await calculateSituationOutcomeWeights(situation);
        setOutcomeWeights(weights);

        // Find selected outcome weight
        const selected = weights.find((o) => o.id === situation.outcomeId);
        setSelectedOutcomeWeight(selected || null);

        // Get alternatives
        setAlternativeOutcomesWeights(
          weights.filter((o) => o.id !== situation.outcomeId)
        );
      } catch (err) {
        const error =
          err instanceof Error
            ? err
            : new Error("Unknown error loading outcomes");
        setError(error);
        console.error("Error loading outcome weights:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadOutcomes();
  }, [situation]);

  return {
    // Original outcome data
    outcomeWeights,
    selectedOutcomeWeight,
    alternativeOutcomesWeights,

    // Additional processed data
    allOutcomes,
    selectedOutcome,
    formattedImpacts,

    // Status flags
    isLoading,
    error,
  };
}
