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

export const situationPreferencesSchema = z
  .object({
    president: preferenceSchema.optional(),
    cabinet: z
      .record(z.nativeEnum(CabinetStaticId), cabinetPreferenceSchema)
      .optional(),
  })
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
