import { z } from "zod";
import { baseSituationDataSchema } from "~/lib/schemas/situations";
import { baseSituationPreferencesSchema } from "~/lib/schemas/situations/preferences";
import { cabinetMemberSchema, subgroupSchema, publicationSchema } from "~/lib/schemas/common";

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