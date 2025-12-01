import { z } from 'zod';

import { textLengthSchema } from '~/lib/schemas/common';
import { CabinetStaticId, PREFERENCE_ANSWER_TYPES } from '~/types';

// Helper to exclude Authorized from AnswerType for preferences
const AllowedPrefAnswerType = z
  .enum(PREFERENCE_ANSWER_TYPES, {
    errorMap: () => ({
      message: 'Authorized answer type not allowed in preferences',
    }),
  })
  .describe('Answer type for the preference');

export const preferenceSchema = z
  .object({
    answerType: AllowedPrefAnswerType,
    rationale: textLengthSchema.rationale,
  })
  .strict();

export const cabinetPreferenceSchema = z
  .object({
    preference: preferenceSchema,
    // Optional in core schema; still required when an Authorized answer references this member (enforced in situation schema)
    authorizedContent: textLengthSchema.authorizedContent
      .describe(
        'Confidential talking points; maximum one cabinet member per situation should include this.',
      )
      .optional(),
  })
  .strict();

export const baseSituationPreferencesSchema = z
  .object({
    president: preferenceSchema,
    cabinet: z.record(z.nativeEnum(CabinetStaticId), cabinetPreferenceSchema).optional(),
  })
  .strict();

export const situationPreferencesSchema = baseSituationPreferencesSchema.extend({}).refine(
  (data) => {
    // Enforce at most 3 cabinet preferences (plus president)
    const keys = Object.keys(data.cabinet || {});
    return keys.length <= 3;
  },
  {
    message: 'At most 3 cabinet preferences are allowed (plus president)',
    path: ['cabinet'],
  },
);

// Export TypeScript types derived from Zod schemas
export type SituationPreferences = z.infer<typeof situationPreferencesSchema>;
export type CabinetPreference = z.infer<typeof cabinetPreferenceSchema>;
export type Preference = z.infer<typeof preferenceSchema>;
