import { z } from "zod";

import { textLengthSchema } from "~/lib/schemas/common";
import { AnswerType, CabinetStaticId } from "~/types";

// Helper to exclude Authorized from AnswerType for preferences
const AllowedPrefAnswerType = z.enum(
  Object.values(AnswerType).filter(v => v !== AnswerType.Authorized) as [string, ...string[]]
).describe("Answer type for the preference");

export const preferenceSchema = z.object({
  answerType: AllowedPrefAnswerType,
  rationale: textLengthSchema.rationale,
});

export const cabinetPreferenceSchema = z.object({
  preference: preferenceSchema,
  authorizedContent: textLengthSchema.authorizedContent
    .describe("Confidential talking points; maximum one cabinet member per situation should include this."),
});

export const baseSituationPreferencesSchema = z.object({
  president: preferenceSchema,
  cabinet: z
    .record(z.nativeEnum(CabinetStaticId), cabinetPreferenceSchema)
    .optional(),
});

export const situationPreferencesSchema = baseSituationPreferencesSchema.extend({})
  .refine(
    (data) => {
      // No Authorized preferences allowed
      const allPrefs = [
        data.president?.answerType,
        ...Object.values(data.cabinet || {}).map(
          (c) => c.preference.answerType
        ),
      ].filter(Boolean);

      return !allPrefs.includes(AnswerType.Authorized);
    },
    {
      message: "Authorized answer type not allowed in preferences",
      path: ["preferences"],
    }
  );

// Export TypeScript types derived from Zod schemas
export type SituationPreferences = z.infer<typeof situationPreferencesSchema>;
export type CabinetPreference = z.infer<typeof cabinetPreferenceSchema>;
export type Preference = z.infer<typeof preferenceSchema>;
