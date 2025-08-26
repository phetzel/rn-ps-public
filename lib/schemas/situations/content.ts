import { z } from "zod";

import { situationPreferencesSchema } from "~/lib/schemas/situations/preferences";
import { situationOutcomeArraySchema } from "~/lib/schemas/situations/outcomes";
import {
  SituationConsequenceWeight,
} from "~/types";


export const situationContentSchema = z
  .object({
    preferences: situationPreferencesSchema,
    outcomes: situationOutcomeArraySchema
  })
  .refine(
    (data) => {
      const totalWeight = data.outcomes.reduce(
        (sum, outcome) => sum + outcome.weight,
        0
      );
      return totalWeight === 100;
    },
    {
      message: "Outcome weights must sum to exactly 100",
      path: ["outcomes"],
    }
  )
  .refine(
    (data) => {
      // NEW: Sum-based outcome validation
      // Calculate sum of enum values for each outcome
      const outcomeSums = data.outcomes.map((outcome) => {
        let sum = 0;
        
        // Sum cabinet impacts
        if (outcome.consequences.approvalChanges.cabinet) {
          sum += Object.values(outcome.consequences.approvalChanges.cabinet)
            .reduce((total, weight) => total + weight, 0);
        }
        
        // Sum subgroup impacts  
        if (outcome.consequences.approvalChanges.subgroups) {
          sum += Object.values(outcome.consequences.approvalChanges.subgroups)
            .reduce((total, weight) => total + weight, 0);
        }
        
        return sum;
      });

      const hasPositiveOutcome = outcomeSums.some(sum => sum > 0);
      const hasNegativeOutcome = outcomeSums.some(sum => sum < 0);
      const positiveOutcomeCount = outcomeSums.filter(sum => sum > 0).length;
      const totalOutcomes = outcomeSums.length;
      const positivePercentage = (positiveOutcomeCount / totalOutcomes);

      return hasPositiveOutcome && hasNegativeOutcome && positivePercentage <= 0.5;
    },
    {
      message:
        "Must have at least one positive-sum outcome, one negative-sum outcome, and ≤50% positive outcomes",
      path: ["outcomes"],
    }
  )
  .refine(
    (data) => {
      // NEW: Sum-based entity validation
      const entityStats = new Map<
        string,
        { totalSum: number; hasPositive: boolean; hasNegative: boolean }
      >();

      data.outcomes.forEach((outcome) => {
        const { cabinet, subgroups } = outcome.consequences.approvalChanges;

        // Process cabinet member impacts
        if (cabinet) {
          Object.entries(cabinet).forEach(([entityId, weight]) => {
            if (!entityStats.has(entityId)) {
              entityStats.set(entityId, { totalSum: 0, hasPositive: false, hasNegative: false });
            }

            const stats = entityStats.get(entityId)!;
            stats.totalSum += weight;
            if (weight > 0) stats.hasPositive = true;
            if (weight < 0) stats.hasNegative = true;
          });
        }

        // Process subgroup impacts
        if (subgroups) {
          Object.entries(subgroups).forEach(([entityId, weight]) => {
            if (!entityStats.has(entityId)) {
              entityStats.set(entityId, { totalSum: 0, hasPositive: false, hasNegative: false });
            }

            const stats = entityStats.get(entityId)!;
            stats.totalSum += weight;
            if (weight > 0) stats.hasPositive = true;
            if (weight < 0) stats.hasNegative = true;
          });
        }
      });

      // Validate each entity
      for (const [entityId, stats] of entityStats) {
        // Must have at least one positive AND one negative consequence
        if (!stats.hasPositive || !stats.hasNegative) {
          return false;
        }
        
        // Must have ≤50% positive total sum (≤0 means balanced or net negative)
        if (stats.totalSum > 0) {
          return false;
        }
      }

      return true;
    },
    {
      message:
        "Each entity must have at least one positive and one negative consequence, with net neutral or negative total impact (≤50% positive)",
      path: ["outcomes"],
    }
  );

