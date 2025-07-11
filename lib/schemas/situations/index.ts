// Re-export all situation schemas
export * from "~/lib/schemas/situations/triggers";
export * from "~/lib/schemas/situations/preferences";
export * from "~/lib/schemas/situations/content";

// Main situation data schema with cross-validation
import { z } from "zod";

import { textLengthSchema } from "~/lib/schemas/common";
import { exchangeDataSchema } from "~/lib/schemas/exchanges";
import { situationTriggerSchema } from "~/lib/schemas/situations/triggers";
import { situationContentSchema } from "~/lib/schemas/situations/content";
import { SituationType, AnswerType } from "~/types";

export const situationDataSchema = z
  .object({
    trigger: situationTriggerSchema,
    type: z.nativeEnum(SituationType),
    title: textLengthSchema.situationTitle,
    description: textLengthSchema.situationDescription,
    content: situationContentSchema,
    exchanges: z
      .array(exchangeDataSchema)
      .min(2, "At least two exchanges are required")
      .max(4, "Maximum 4 exchanges per situation for mobile performance"),
  })
  .refine((data) => data.trigger.type === data.type, {
    message: "Situation type must match trigger type",
    path: ["type"],
  })
  .refine(
    (data) => {
      // Authorized answers must reference cabinet members with authorizedContent
      const errors: string[] = [];

      data.exchanges.forEach((exchange, exchangeIndex) => {
        Object.entries(exchange.content.questions).forEach(
          ([questionId, question]) => {
            question.answers.forEach((answer, answerIndex) => {
              if (
                answer.type === AnswerType.Authorized &&
                answer.authorizedCabinetMemberId
              ) {
                const cabinetMember =
                  data.content.preferences.cabinet?.[
                    answer.authorizedCabinetMemberId
                  ];
                if (!cabinetMember?.authorizedContent) {
                  errors.push(
                    `Exchange ${exchangeIndex}, Question ${questionId}, Answer ${answerIndex}: Authorized answer references cabinet member without authorizedContent`
                  );
                }
              }
            });
          }
        );
      });

      return errors.length === 0;
    },
    {
      message:
        "Authorized answers must reference cabinet members with authorizedContent",
      path: ["exchanges"],
    }
  )
  .refine(
    (data) => {
      // Outcome modifiers must be within reasonable range (-50 to 50)
      const errors: string[] = [];

      data.exchanges.forEach((exchange, exchangeIndex) => {
        Object.entries(exchange.content.questions).forEach(
          ([questionId, question]) => {
            question.answers.forEach((answer, answerIndex) => {
              Object.entries(answer.outcomeModifiers).forEach(
                ([outcomeId, modifier]) => {
                  if (modifier < -50 || modifier > 50) {
                    errors.push(
                      `Exchange ${exchangeIndex}, Question ${questionId}, Answer ${answerIndex}: Outcome modifier ${modifier} for ${outcomeId} is outside reasonable range (-50 to 50)`
                    );
                  }
                }
              );
            });
          }
        );
      });

      return errors.length === 0;
    },
    {
      message: "Outcome modifiers must be within reasonable range (-50 to 50)",
      path: ["exchanges"],
    }
  )
  .refine(
    (data) => {
      // Each exchange must have reasonable number of questions (1-8)
      const errors: string[] = [];

      data.exchanges.forEach((exchange, exchangeIndex) => {
        const questionCount = Object.keys(exchange.content.questions).length;
        if (questionCount < 1 || questionCount > 8) {
          errors.push(
            `Exchange ${exchangeIndex}: Has ${questionCount} questions, must have 1-8 questions`
          );
        }
      });

      return errors.length === 0;
    },
    {
      message: "Each exchange must have 1-8 questions",
      path: ["exchanges"],
    }
  );

export type SituationDataType = z.infer<typeof situationDataSchema>;
