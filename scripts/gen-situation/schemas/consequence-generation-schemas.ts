import { z } from "zod";
import { CabinetStaticId, JournalistStaticId, ExchangeImpactWeight } from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// CONSEQUENCE GENERATION SCHEMAS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema for question consequences (impacts + outcome modifiers)
 */
export const questionConsequencesSchema = z.object({
  answers: z.array(
    z.object({
      impacts: z.object({
        president: z
          .object({
            weight: z.nativeEnum(ExchangeImpactWeight),
            reaction: z.string().min(20).max(100).nullable(),
          })
          .nullable(),
        cabinet: z
          .array(
            z.object({
              member: z.nativeEnum(CabinetStaticId),
              weight: z.nativeEnum(ExchangeImpactWeight),
              reaction: z.string().min(20).max(100).nullable(),
            })
          )
          .nullable(),
        journalists: z
          .array(
            z.object({
              journalist: z.nativeEnum(JournalistStaticId),
              weight: z.nativeEnum(ExchangeImpactWeight),
              reaction: z.string().min(20).max(100).nullable(),
            })
          )
          .nullable(),
      }),
      outcomeModifiers: z
        .array(
          z.object({
            outcomeId: z.string().min(1),
            modifier: z.number().min(-15).max(15),
          })
        )
        .refine(
          (modifiers) => {
            const sum = modifiers.reduce(
              (acc, mod) => acc + mod.modifier,
              0
            );
            return Math.abs(sum) < 0.001; // Allow for floating point precision
          },
          { message: "Outcome modifiers must sum to 0" }
        ),
    })
  ),
});

export type QuestionConsequences = z.infer<typeof questionConsequencesSchema>;