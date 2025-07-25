import { z } from "zod";
import { PublicationStaticId, CabinetStaticId } from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// PHASE 3: IMPACT GENERATION SCHEMAS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema for president relationship impact
 */
export const presidentImpactSchema = z.object({
  weight: z
    .enum(["-3", "-2", "-1", "0", "+1", "+2", "+3"])
    .describe("Relationship impact weight"),

  reaction: z
    .string()
    .min(20)
    .max(80)
    .nullable()
    .describe(
      "Optional reaction text for significant impacts (null for weight 0)"
    ),
});

/**
 * Schema for cabinet member relationship impact
 */
export const cabinetImpactSchema = z.object({
  cabinetMember: z
    .nativeEnum(CabinetStaticId)
    .describe("Which cabinet member is affected"),

  weight: z
    .enum(["-3", "-2", "-1", "0", "+1", "+2", "+3"])
    .describe("Relationship impact weight"),

  reaction: z
    .string()
    .min(20)
    .max(80)
    .nullable()
    .describe(
      "Optional reaction text for significant impacts (null for weight 0)"
    ),
});

/**
 * Schema for outcome modifier impact
 */
export const outcomeModifierSchema = z.object({
  outcomeId: z.string().min(1).describe("ID of the outcome being modified"),

  modifier: z
    .number()
    .int()
    .min(-20)
    .max(20)
    .describe(
      "Percentage modifier for this outcome (can be positive or negative)"
    ),
});

/**
 * Schema for a single answer's impacts
 */
export const answerImpactSchema = z.object({
  answerId: z
    .string()
    .min(1)
    .describe("ID of the answer these impacts belong to"),

  presidentImpact: presidentImpactSchema
    .nullable()
    .describe("Impact on president relationship (null if no impact)"),

  cabinetImpacts: z
    .array(cabinetImpactSchema)
    .max(5)
    .describe("Impacts on cabinet member relationships"),

  outcomeModifiers: z
    .array(outcomeModifierSchema)
    .min(1)
    .max(4)
    .describe("Modifiers for situation outcomes"),
});

/**
 * Schema for a publication's exchange impacts
 */
export const publicationImpactsSchema = z.object({
  publication: z
    .nativeEnum(PublicationStaticId)
    .describe("Which publication this impact set is for"),

  answerImpacts: z
    .array(answerImpactSchema)
    .min(1)
    .describe("Impact data for each answer in this exchange"),
});

/**
 * Schema for Phase 3 output - all publication impact data
 */
export const impactGenerationResultSchema = z
  .object({
    publicationImpacts: z
      .array(publicationImpactsSchema)
      .min(2)
      .max(4)
      .describe("Impact data for each publication's exchange"),
  })
  .refine(
    (data) => {
      // Validate that outcome modifiers sum to 0 for each question
      for (const pubImpacts of data.publicationImpacts) {
        // Group answers by question (based on answer ID pattern)
        const questionGroups: Record<string, typeof pubImpacts.answerImpacts> =
          {};

        for (const answerImpact of pubImpacts.answerImpacts) {
          const answerId = answerImpact.answerId;
          // Extract question info from answer ID (a1-a4 = q1, a5-a7 = q2, etc.)
          let questionId = "q1"; // default
          if (answerId.match(/^a[1-4]$/)) questionId = "q1";
          else if (answerId.match(/^a[5-7]$/)) questionId = "q2";
          else if (answerId.match(/^a[8-9]$/)) questionId = "q3";
          else if (answerId.match(/^a1[0-9]$/)) questionId = "q4";
          else if (answerId.match(/^a2[0-9]$/)) questionId = "q5";

          if (!questionGroups[questionId]) questionGroups[questionId] = [];
          questionGroups[questionId].push(answerImpact);
        }

        // Check each question's outcome modifiers sum to 0
        for (const [questionId, answers] of Object.entries(questionGroups)) {
          const outcomeModifierSums: Record<string, number> = {};

          for (const answer of answers) {
            for (const modifier of answer.outcomeModifiers) {
              if (!outcomeModifierSums[modifier.outcomeId]) {
                outcomeModifierSums[modifier.outcomeId] = 0;
              }
              outcomeModifierSums[modifier.outcomeId] += modifier.modifier;
            }
          }

          // Check that each outcome's modifiers sum to 0
          for (const [outcomeId, sum] of Object.entries(outcomeModifierSums)) {
            if (sum !== 0) {
              return false;
            }
          }
        }
      }
      return true;
    },
    {
      message:
        "Outcome modifiers must sum to 0 for each question across all answers",
      path: ["publicationImpacts"],
    }
  );

// ═══════════════════════════════════════════════════════════════════════════════
// TYPESCRIPT TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type PresidentImpact = z.infer<typeof presidentImpactSchema>;
export type CabinetImpact = z.infer<typeof cabinetImpactSchema>;
export type OutcomeModifier = z.infer<typeof outcomeModifierSchema>;
export type AnswerImpact = z.infer<typeof answerImpactSchema>;
export type PublicationImpacts = z.infer<typeof publicationImpactsSchema>;
export type ImpactGenerationResult = z.infer<
  typeof impactGenerationResultSchema
>;
