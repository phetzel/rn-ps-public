import { z } from "zod";

import { textLengthSchema } from "~/lib/schemas/common";
import { AnswerType, CabinetStaticId } from "~/types";

export const preferenceSchema = z.object({
  answerType: z.nativeEnum(AnswerType),
  rationale: textLengthSchema.rationale,
});

export const cabinetPreferenceSchema = z.object({
  preference: preferenceSchema,
  authorizedContent: textLengthSchema.authorizedContent.optional(),
});

export const situationPreferencesSchema = z.object({
  president: preferenceSchema.optional(),
  cabinet: z
    .record(z.nativeEnum(CabinetStaticId), cabinetPreferenceSchema)
    .optional(),
});
