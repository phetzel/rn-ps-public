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
      // Ensure at least one positive and one negative outcome
      const positiveWeights = [
        SituationConsequenceWeight.StronglyPositive,
        SituationConsequenceWeight.Positive,
        SituationConsequenceWeight.SlightlyPositive,
      ];
      const negativeWeights = [
        SituationConsequenceWeight.StronglyNegative,
        SituationConsequenceWeight.Negative,
        SituationConsequenceWeight.SlightlyNegative,
      ];

      const hasPositive = data.outcomes.some(
        (outcome) =>
          Object.values(
            outcome.consequences.approvalChanges.cabinet || {}
          ).some((weight) => positiveWeights.includes(weight)) ||
          Object.values(
            outcome.consequences.approvalChanges.subgroups || {}
          ).some((weight) => positiveWeights.includes(weight))
      );

      const hasNegative = data.outcomes.some(
        (outcome) =>
          Object.values(
            outcome.consequences.approvalChanges.cabinet || {}
          ).some((weight) => negativeWeights.includes(weight)) ||
          Object.values(
            outcome.consequences.approvalChanges.subgroups || {}
          ).some((weight) => negativeWeights.includes(weight))
      );

      return hasPositive && hasNegative;
    },
    {
      message:
        "Each situation must have at least one positive and one negative outcome",
      path: ["outcomes"],
    }
  )
  .refine(
    (data) => {
      // Each individual entity cannot have more positive than negative impacts (per-entity balance)
      const positiveWeights = [
        SituationConsequenceWeight.StronglyPositive,
        SituationConsequenceWeight.Positive,
        SituationConsequenceWeight.SlightlyPositive,
      ];
      const negativeWeights = [
        SituationConsequenceWeight.StronglyNegative,
        SituationConsequenceWeight.Negative,
        SituationConsequenceWeight.SlightlyNegative,
      ];

      const entityStats = new Map<
        string,
        { positive: number; negative: number }
      >();

      data.outcomes.forEach((outcome) => {
        const { cabinet, subgroups } = outcome.consequences.approvalChanges;

        // Count cabinet member changes
        if (cabinet) {
          Object.entries(cabinet).forEach(([entityId, weight]) => {
            if (!entityStats.has(entityId)) {
              entityStats.set(entityId, { positive: 0, negative: 0 });
            }

            const stats = entityStats.get(entityId)!;
            if (positiveWeights.includes(weight)) {
              stats.positive++;
            } else if (negativeWeights.includes(weight)) {
              stats.negative++;
            }
          });
        }

        // Count subgroup changes
        if (subgroups) {
          Object.entries(subgroups).forEach(([entityId, weight]) => {
            if (!entityStats.has(entityId)) {
              entityStats.set(entityId, { positive: 0, negative: 0 });
            }

            const stats = entityStats.get(entityId)!;
            if (positiveWeights.includes(weight)) {
              stats.positive++;
            } else if (negativeWeights.includes(weight)) {
              stats.negative++;
            }
          });
        }
      });

      // Check that no entity has more positive than negative impacts
      for (const [, stats] of entityStats) {
        if (stats.positive > stats.negative && stats.positive > 0) {
          return false;
        }
      }

      return true;
    },
    {
      message:
        "No entity can have more positive than negative approval changes across outcomes in this situation",
      path: ["outcomes"],
    }
  )
  .refine(
    (data) => {
      // Each outcome must affect at least one entity
      return data.outcomes.every((outcome) => {
        const cabinetCount = Object.keys(
          outcome.consequences.approvalChanges.cabinet || {}
        ).length;
        const subgroupCount = Object.keys(
          outcome.consequences.approvalChanges.subgroups || {}
        ).length;
        return cabinetCount + subgroupCount >= 1;
      });
    },
    {
      message: "Each outcome must affect at least one entity",
      path: ["outcomes"],
    }
  )
  .refine(
    (data) => {
      // No single outcome can have excessive entity impacts (max 5 entities per outcome)
      return data.outcomes.every((outcome) => {
        const cabinetCount = Object.keys(
          outcome.consequences.approvalChanges.cabinet || {}
        ).length;
        const subgroupCount = Object.keys(
          outcome.consequences.approvalChanges.subgroups || {}
        ).length;
        return cabinetCount + subgroupCount <= 6;
      });
    },
    {
      message:
        "No outcome can affect more than 6 entities (keeps impacts focused)",
      path: ["outcomes"],
    }
  )
  .refine(
    (data) => {
      // Each entity affected by a situation must have at least one positive AND one negative impact
      const positiveWeights = [
        SituationConsequenceWeight.StronglyPositive,
        SituationConsequenceWeight.Positive,
        SituationConsequenceWeight.SlightlyPositive,
      ];
      const negativeWeights = [
        SituationConsequenceWeight.StronglyNegative,
        SituationConsequenceWeight.Negative,
        SituationConsequenceWeight.SlightlyNegative,
      ];

      const entityStats = new Map<
        string,
        { positive: number; negative: number }
      >();

      data.outcomes.forEach((outcome) => {
        const { cabinet, subgroups } = outcome.consequences.approvalChanges;

        // Count cabinet member changes
        if (cabinet) {
          Object.entries(cabinet).forEach(([entityId, weight]) => {
            if (!entityStats.has(entityId)) {
              entityStats.set(entityId, { positive: 0, negative: 0 });
            }

            const stats = entityStats.get(entityId)!;
            if (positiveWeights.includes(weight)) {
              stats.positive++;
            } else if (negativeWeights.includes(weight)) {
              stats.negative++;
            }
          });
        }

        // Count subgroup changes
        if (subgroups) {
          Object.entries(subgroups).forEach(([entityId, weight]) => {
            if (!entityStats.has(entityId)) {
              entityStats.set(entityId, { positive: 0, negative: 0 });
            }

            const stats = entityStats.get(entityId)!;
            if (positiveWeights.includes(weight)) {
              stats.positive++;
            } else if (negativeWeights.includes(weight)) {
              stats.negative++;
            }
          });
        }
      });

      // Check that each entity has BOTH positive and negative impacts
      for (const [entityId, stats] of entityStats) {
        if (stats.positive === 0 || stats.negative === 0) {
          return false;
        }
      }

      return true;
    },
    {
      message:
        "Each entity affected by a situation must have at least one positive AND one negative approval change across outcomes (ensures meaningful trade-offs)",
      path: ["outcomes"],
    }
  );

