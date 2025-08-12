// Re-export all situation schemas
export * from "~/lib/schemas/situations/triggers";
export * from "~/lib/schemas/situations/preferences";
export * from "~/lib/schemas/situations/content";

// Main situation data schema with cross-validation
import { z } from "zod";
import { AnswerType } from "~/types";
import { situationTypeSchema, textLengthSchema, publicationSchema } from "../common";
import { exchangeContentSchema } from "../exchanges";
import { situationContentSchema } from "./content";
import { situationTriggerSchema } from "./triggers";
import { getAllQuestionsFromExchange } from "~/lib/db/helpers/exchangeApi";

export const baseSituationDataSchema = z.object({
  type: situationTypeSchema,
  title: textLengthSchema.situationTitle,
  description: textLengthSchema.situationDescription,
});

const situationDataSchema = baseSituationDataSchema.extend({
    trigger: situationTriggerSchema,
    content: situationContentSchema,
    exchanges: z.array(
      z.object({
        publication: publicationSchema,
        content: exchangeContentSchema,
      })
    ),
  })
  .refine(
    (data) => {
      // All exchanges must have exactly 5 questions
      const errors: string[] = [];

      data.exchanges.forEach((exchange, exchangeIndex) => {
        const allQuestions = getAllQuestionsFromExchange(exchange.content);
        if (allQuestions.length !== 5) {
          errors.push(
            `Exchange ${exchangeIndex} has ${allQuestions.length} questions, expected 5`
          );
        }
      });

      return errors.length === 0;
    },
    {
      message: "All exchanges must have exactly 5 questions",
    }
  )
  .refine(
    (data) => {
      // Authorized answers must reference cabinet members with authorizedContent
      const errors: string[] = [];

      data.exchanges.forEach((exchange, exchangeIndex) => {
        const allQuestions = getAllQuestionsFromExchange(exchange.content);
        allQuestions.forEach((question) => {
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
                  `Exchange ${exchangeIndex}, Question ${question.id}, Answer ${answerIndex}: Authorized answer references cabinet member ${answer.authorizedCabinetMemberId} but they have no authorizedContent`
                );
              }
            }
          });
        });
      });

      return errors.length === 0;
    },
    {
      message:
        "Authorized answers must reference cabinet members with authorizedContent",
    }
  )
  .refine(
    (data) => {
      // Follow-up questions must exist
      const errors: string[] = [];

      data.exchanges.forEach((exchange, exchangeIndex) => {
        const allQuestions = getAllQuestionsFromExchange(exchange.content);
        allQuestions.forEach((question) => {
          question.answers.forEach((answer, answerIndex) => {
            if (answer.followUpId) {
              const followUpExists = allQuestions.some(
                (q) => q.id === answer.followUpId
              );
              if (!followUpExists) {
                errors.push(
                  `Exchange ${exchangeIndex}, Question ${question.id}, Answer ${answerIndex}: Follow-up question ${answer.followUpId} does not exist`
                );
              }
            }
          });
        });
      });

      return errors.length === 0;
    },
    {
      message: "Follow-up questions must exist in the exchange",
    }
  )
  .refine(
    (data) => {
      // Exchanges must have normalized structure
      const errors: string[] = [];

      data.exchanges.forEach((exchange, exchangeIndex) => {
        const content = exchange.content;

        // Check root question has 2 follow-ups
        const rootFollowUps = content.rootQuestion.answers.filter(
          (a) => a.followUpId
        ).length;
        if (rootFollowUps !== 2) {
          errors.push(
            `Exchange ${exchangeIndex}: Root question must have exactly 2 follow-ups, has ${rootFollowUps}`
          );
        }

        // Check secondary questions structure
        if (content.secondaryQuestions.length !== 2) {
          errors.push(
            `Exchange ${exchangeIndex}: Must have exactly 2 secondary questions, has ${content.secondaryQuestions.length}`
          );
        }

        content.secondaryQuestions.forEach((question, qIndex) => {
          const followUps = question.answers.filter((a) => a.followUpId).length;
          if (followUps !== 1) {
            errors.push(
              `Exchange ${exchangeIndex}, Secondary question ${qIndex}: Must have exactly 1 follow-up, has ${followUps}`
            );
          }
        });

        // Check tertiary questions structure
        if (content.tertiaryQuestions.length !== 2) {
          errors.push(
            `Exchange ${exchangeIndex}: Must have exactly 2 tertiary questions, has ${content.tertiaryQuestions.length}`
          );
        }

        content.tertiaryQuestions.forEach((question, qIndex) => {
          const followUps = question.answers.filter((a) => a.followUpId).length;
          if (followUps !== 0) {
            errors.push(
              `Exchange ${exchangeIndex}, Tertiary question ${qIndex}: Must have no follow-ups, has ${followUps}`
            );
          }
        });
      });

      return errors.length === 0;
    },
    {
      message:
        "Exchanges must follow normalized structure (1 root + 2 secondary + 2 tertiary questions)",
    }
  );

export { situationDataSchema };
export type SituationDataType = z.infer<typeof situationDataSchema>;
