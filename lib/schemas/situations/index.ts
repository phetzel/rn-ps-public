// Re-export all situation schemas
// Main situation data schema with cross-validation
import { z } from 'zod';

import { getAllQuestionsFromExchange } from '~/lib/game/exchange-tree';
import { AnswerType, CabinetStaticId } from '~/types';

import { situationTypeSchema, textLengthSchema, publicationSchema } from '../common';
import { exchangeContentSchema } from '../exchanges';
import { situationContentSchema } from './content';
import { situationTriggerSchema } from './triggers';

export * from '~/lib/schemas/situations/triggers';
export * from '~/lib/schemas/situations/preferences';
export * from '~/lib/schemas/situations/content';
export * from '~/lib/schemas/situations/outcomes';

export const baseSituationDataSchema = z.object({
  type: situationTypeSchema,
  title: textLengthSchema.situationTitle,
  description: textLengthSchema.situationDescription,
});

const situationDataSchema = baseSituationDataSchema
  .extend({
    trigger: situationTriggerSchema,
    content: situationContentSchema,
    exchanges: z.array(
      z.object({
        publication: publicationSchema,
        content: exchangeContentSchema,
      }),
    ),
  })

  .refine(
    (data) => {
      // Authorized answers must reference cabinet members with authorizedContent
      const errors: string[] = [];

      data.exchanges.forEach((exchange, exchangeIndex) => {
        const allQuestions = getAllQuestionsFromExchange(exchange.content);
        allQuestions.forEach((question) => {
          question.answers.forEach((answer, answerIndex) => {
            if (answer.type === AnswerType.Authorized && answer.authorizedCabinetMemberId) {
              const cabinetMember =
                data.content.preferences.cabinet?.[answer.authorizedCabinetMemberId];
              if (!cabinetMember?.authorizedContent) {
                errors.push(
                  `Exchange ${exchangeIndex}, Question ${question.id}, Answer ${answerIndex}: Authorized answer references cabinet member ${answer.authorizedCabinetMemberId} but they have no authorizedContent`,
                );
              }
            }
          });
        });
      });

      return errors.length === 0;
    },
    {
      message: 'Authorized answers must reference cabinet members with authorizedContent',
    },
  )

  .refine(
    (data) => {
      // Limit Authorized answers across entire situation to at most 1
      let authorizedCount = 0;
      data.exchanges.forEach((exchange) => {
        const allQuestions = getAllQuestionsFromExchange(exchange.content);
        allQuestions.forEach((q) => {
          q.answers.forEach((a) => {
            if (a.type === AnswerType.Authorized) {
              authorizedCount++;
            }
          });
        });
      });
      return authorizedCount <= 1;
    },
    { message: 'At most one Authorized answer is allowed per situation (across all exchanges)' },
  )
  .refine(
    (data) => {
      // Preference alignment at root questions: president and all INVOLVED cabinet (from outcomes) must have a preference and be covered positively
      const errors: string[] = [];
      const prefPresident = data.content.preferences.president;
      const prefCabinet = data.content.preferences.cabinet || {};

      // Derive involved cabinet from outcomes
      const involvedCabinet = new Set<CabinetStaticId>();
      data.content.outcomes.forEach((outcome) => {
        const cab = outcome.consequences.approvalChanges.cabinet || {};
        Object.keys(cab).forEach((id) => involvedCabinet.add(id as CabinetStaticId));
      });

      // Ensure every involved cabinet member has a preference
      involvedCabinet.forEach((cabId) => {
        if (!prefCabinet[cabId]) {
          errors.push(`Cabinet member ${cabId} is involved in outcomes but has no preference`);
        }
      });

      data.exchanges.forEach((exchange, exchangeIndex) => {
        const rootAnswers = exchange.content.rootQuestion.answers;

        if (prefPresident) {
          const ok = rootAnswers.some(
            (a) =>
              a.type === prefPresident.answerType &&
              a.impacts.president?.weight !== undefined &&
              a.impacts.president.weight > 0,
          );
          if (!ok) {
            errors.push(
              `Exchange ${exchangeIndex}: Root must include a president-positive answer of type ${prefPresident.answerType}`,
            );
          }
        }

        // Check only involved cabinet members
        involvedCabinet.forEach((cabId) => {
          const cabPref = prefCabinet[cabId];
          if (!cabPref) return; // Already recorded as error above
          const ok = rootAnswers.some((a) => {
            const impact = a.impacts.cabinet?.[cabId];
            return (
              a.type === cabPref.preference.answerType && impact !== undefined && impact.weight > 0
            );
          });
          if (!ok) {
            errors.push(
              `Exchange ${exchangeIndex}: Root must include a positive answer of type ${cabPref.preference.answerType} for involved cabinet ${cabId}`,
            );
          }
        });
      });

      return errors.length === 0;
    },
    {
      message:
        'Root questions must include preference-aligned positive answers for president and all involved cabinet (per exchange); and all involved cabinet must have preferences',
    },
  )

  .refine(
    (data) => {
      // Each question must have answers that positively and negatively modify every outcome
      const outcomeIds = data.content.outcomes.map((o) => o.id);
      const errors: string[] = [];

      data.exchanges.forEach((exchange, exchangeIndex) => {
        const allQuestions = getAllQuestionsFromExchange(exchange.content);
        allQuestions.forEach((question) => {
          outcomeIds.forEach((outcomeId) => {
            let hasPos = false;
            let hasNeg = false;
            question.answers.forEach((answer) => {
              const w = answer.outcomeModifiers?.[outcomeId];
              if (typeof w === 'number') {
                if (w > 0) hasPos = true;
                if (w < 0) hasNeg = true;
              }
            });
            if (!hasPos || !hasNeg) {
              errors.push(
                `Exchange ${exchangeIndex}, Question ${question.id}: must include answers with positive and negative modifiers for outcome ${outcomeId}`,
              );
            }
          });
        });
      });

      return errors.length === 0;
    },
    {
      message:
        'Each question must include answers that positively and negatively modify every outcome',
    },
  )
  .refine(
    (data) => {
      // Outcome modifiers must only reference known outcome IDs
      const outcomeIdSet = new Set(data.content.outcomes.map((o) => o.id));
      const errors: string[] = [];

      data.exchanges.forEach((exchange, exchangeIndex) => {
        const allQuestions = getAllQuestionsFromExchange(exchange.content);
        allQuestions.forEach((question) => {
          question.answers.forEach((answer, answerIndex) => {
            const keys = Object.keys(answer.outcomeModifiers || {});
            keys.forEach((k) => {
              if (!outcomeIdSet.has(k)) {
                errors.push(
                  `Exchange ${exchangeIndex}, Question ${question.id}, Answer ${answerIndex}: outcomeModifiers contains unknown outcome ID ${k}`,
                );
              }
            });
          });
        });
      });

      return errors.length === 0;
    },
    { message: 'Outcome modifiers must reference known outcome IDs' },
  )
  .refine(
    (data) => {
      // Exchange answers may only impact president and cabinet involved in outcomes
      const errors: string[] = [];
      const involvedCabinet = new Set<CabinetStaticId>();
      data.content.outcomes.forEach((outcome) => {
        const cab = outcome.consequences.approvalChanges.cabinet || {};
        Object.keys(cab).forEach((id) => involvedCabinet.add(id as CabinetStaticId));
      });

      data.exchanges.forEach((exchange, exchangeIndex) => {
        const allQuestions = getAllQuestionsFromExchange(exchange.content);
        allQuestions.forEach((question) => {
          question.answers.forEach((answer, answerIndex) => {
            const cabImpacts = answer.impacts.cabinet || {};
            Object.keys(cabImpacts).forEach((cabId) => {
              const typedId = cabId as CabinetStaticId;
              if (!involvedCabinet.has(typedId)) {
                errors.push(
                  `Exchange ${exchangeIndex}, Question ${question.id}, Answer ${answerIndex}: cabinet ${typedId} is impacted but not involved in outcomes`,
                );
              }
            });
          });
        });
      });

      return errors.length === 0;
    },
    { message: 'Answers may only impact president and involved cabinet' },
  )
  .refine(
    (data) => {
      // Preferences may only include cabinet that are involved in outcomes
      const errors: string[] = [];
      const involvedCabinet = new Set<CabinetStaticId>();
      data.content.outcomes.forEach((outcome) => {
        const cab = outcome.consequences.approvalChanges.cabinet || {};
        Object.keys(cab).forEach((id) => involvedCabinet.add(id as CabinetStaticId));
      });

      const prefCabinet = data.content.preferences.cabinet || {};
      Object.keys(prefCabinet).forEach((cabId) => {
        const typedId = cabId as CabinetStaticId;
        if (!involvedCabinet.has(typedId)) {
          errors.push(
            `Preference provided for cabinet ${typedId} which is not involved in outcomes`,
          );
        }
      });

      return errors.length === 0;
    },
    { message: 'Only involved cabinet may have preferences' },
  );

export { situationDataSchema };
export type SituationDataType = z.infer<typeof situationDataSchema>;
