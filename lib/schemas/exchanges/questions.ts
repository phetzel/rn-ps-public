import { z } from "zod";

import { idSchema, textLengthSchema } from "~/lib/schemas/common";
import { exchangeImpactsSchema } from "~/lib/schemas/exchanges/impacts";
import { AnswerType, CabinetStaticId } from "~/types";

export const answerSchema = z
  .object({
    id: idSchema,
    text: textLengthSchema.answerText,
    type: z.nativeEnum(AnswerType),
    authorizedCabinetMemberId: z.nativeEnum(CabinetStaticId).optional(),
    impacts: exchangeImpactsSchema,
    outcomeModifiers: z.record(z.string(), z.number()),
    followUpId: z.string().optional(),
  })
  .refine(
    (data) => {
      const modifierSum = Object.values(data.outcomeModifiers).reduce(
        (sum, mod) => sum + mod,
        0
      );
      return modifierSum === 0;
    },
    {
      message: "Outcome modifiers must sum to 0 for game balance",
      path: ["outcomeModifiers"],
    }
  )
  .refine(
    (data) => {
      // If it's an authorized answer, must have cabinet member ID
      if (data.type === AnswerType.Authorized) {
        return !!data.authorizedCabinetMemberId;
      }
      return true;
    },
    {
      message: "Authorized answers must specify a cabinet member",
      path: ["authorizedCabinetMemberId"],
    }
  );

export const questionSchema = z.object({
  id: idSchema,
  text: textLengthSchema.questionText,
  depth: z.number().min(0).max(3, "Maximum depth of 3 for mobile UX"),
  answers: z
    .array(answerSchema)
    .min(2, "At least 2 answers required for meaningful choice")
    .max(5, "Maximum 5 answers for mobile UI constraints"),
});

export const exchangeContentSchema = z.object({
  questions: z
    .record(z.string(), questionSchema)
    .refine(
      (questions) => Object.keys(questions).length >= 1,
      "At least one question is required"
    ),
  rootQuestionId: z.string().min(1, "Root question ID is required"),
});
