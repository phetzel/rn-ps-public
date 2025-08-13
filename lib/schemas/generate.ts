import { z } from "zod";

import { cabinetMemberSchema, subgroupSchema, publicationSchema } from "~/lib/schemas/common";
import { baseSituationDataSchema } from "~/lib/schemas/situations";
import { baseSituationPreferencesSchema } from "~/lib/schemas/situations/preferences";
import { baseSituationOutcomeArraySchema, situationOutcomeArraySchema, consequenceSchema } from "~/lib/schemas/situations/outcomes";

// Plan
export const generateSituationPlanSchema = baseSituationDataSchema.extend({
  reasoning: z.string().min(10).describe("Why this situation improves balance"),
  involvedEntities: z.object({
    cabinetMembers: z.array(cabinetMemberSchema).min(1),
    subgroups: z.array(subgroupSchema).min(1),
    publications: z.array(publicationSchema).min(2),
  }),
});
export type GenerateSituationPlan = z.infer<typeof generateSituationPlanSchema>;

// Preferences
export const generatePreferencesSchema = baseSituationPreferencesSchema;
export type GeneratePreferences = z.infer<typeof generatePreferencesSchema>;

// Outcomes
export const generateBaseOutcomesSchema = z.object({
  outcomes: baseSituationOutcomeArraySchema,
});
export type GenerateBaseOutcomes = z.infer<typeof generateBaseOutcomesSchema>;

// Generation-specific outcome schemas (no followUpId)
export const generateSituationOutcomeSchema = generateBaseOutcomesSchema.extend({
  consequences: consequenceSchema,
  // No followUpId - removed for generation to avoid OpenAI strict mode issues
});

export const generateSituationOutcomeArraySchema = z
  .array(generateSituationOutcomeSchema)
  .min(2, "At least 2 outcomes required for meaningful choice")
  .max(4, "Maximum 4 outcomes for mobile UI constraints");


export const generateOutcomesSchema = z.object({
  outcomes: generateSituationOutcomeArraySchema,
});
export type GenerateOutcomes = z.infer<typeof generateOutcomesSchema>;