import { z } from "zod";
import { CabinetStaticId, SubgroupStaticId } from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// PHASE-BASED OUTCOMES GENERATION SCHEMAS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 1: Outcome Narratives (story-focused, no entity impacts)
 */
export const outcomeNarrativeSchema = z.object({
  id: z.string().min(1).describe("Unique outcome identifier"),
  title: z
    .string()
    .min(20)
    .max(60)
    .describe("Satirical outcome headline (20-60 chars)"),
  description: z
    .string()
    .min(60)
    .max(140)
    .describe("Brief outcome narrative (60-140 chars)"),
  weight: z
    .number()
    .min(10)
    .max(70)
    .describe("Probability weight (10-70, must sum to 100)"),
  thematicFocus: z
    .string()
    .min(20)
    .max(100)
    .describe("What aspect of the situation this outcome emphasizes"),
});

export const outcomesNarrativesResultSchema = z
  .object({
    outcomes: z
      .array(outcomeNarrativeSchema)
      .min(2)
      .max(4)
      .describe("2-4 outcome scenarios"),
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
  );

/**
 * Phase 2: Outcomes Impact Matrix (balance-focused)
 */
export const outcomeImpactEntrySchema = z.object({
  outcomeId: z.string().min(1).describe("The outcome ID this impact is for"),
  impact: z
    .enum(["15", "10", "5", "0", "-5", "-10", "-15"])
    .describe("Impact value"),
  rationale: z
    .string()
    .min(20)
    .max(100)
    .describe("Why this entity is affected this way"),
});

export const outcomesImpactPlanSchema = z.object({
  entityId: z
    .string()
    .min(1)
    .describe("Entity identifier (cabinet member or subgroup)"),
  outcomeImpacts: z
    .array(outcomeImpactEntrySchema)
    .min(1)
    .describe("Impact entries for each outcome"),
});

export const outcomesBalanceValidationSchema = z.object({
  entityId: z.string().min(1),
  positiveCount: z.number().min(0),
  negativeCount: z.number().min(0),
  isBalanced: z.boolean().describe("True if positiveCount <= negativeCount"),
});

export const outcomesImpactMatrixResultSchema = z
  .object({
    entityImpacts: z
      .array(outcomesImpactPlanSchema)
      .min(1)
      .describe("Impact plans for each entity"),
    balanceValidation: z
      .array(outcomesBalanceValidationSchema)
      .describe("Balance validation for each entity"),
  })
  .refine(
    (data) => {
      // Ensure all entities are balanced
      return data.balanceValidation.every(
        (validation) => validation.isBalanced
      );
    },
    {
      message: "All entities must have balanced impacts (positive <= negative)",
      path: ["balanceValidation"],
    }
  );

/**
 * Phase 3: Assembly context (for final validation)
 */
export const outcomeAssemblyContextSchema = z.object({
  narratives: z.array(outcomeNarrativeSchema),
  impactMatrix: outcomesImpactMatrixResultSchema,
});

// ═══════════════════════════════════════════════════════════════════════════════
// TYPESCRIPT TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type OutcomeNarrative = z.infer<typeof outcomeNarrativeSchema>;
export type OutcomesNarrativesResult = z.infer<
  typeof outcomesNarrativesResultSchema
>;
export type OutcomeImpactEntry = z.infer<typeof outcomeImpactEntrySchema>;
export type OutcomesImpactPlan = z.infer<typeof outcomesImpactPlanSchema>;
export type OutcomesBalanceValidation = z.infer<
  typeof outcomesBalanceValidationSchema
>;
export type OutcomesImpactMatrixResult = z.infer<
  typeof outcomesImpactMatrixResultSchema
>;
export type OutcomeAssemblyContext = z.infer<
  typeof outcomeAssemblyContextSchema
>;
