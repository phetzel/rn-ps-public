import { z } from "zod";

import { idSchema, textLengthSchema } from "~/lib/schemas/common";
import { exchangeImpactsSchema } from "~/lib/schemas/exchanges/impacts";
import { AnswerType, CabinetStaticId, ExchangeImpactWeight } from "~/types";

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
    .max(5, "Maximum 5 answers for mobile UI constraints")
    .refine(
      (answers) => {
        // Ensure diverse answer types
        const types = new Set(answers.map((a) => a.type));
        return types.size >= 2;
      },
      { message: "Questions must have at least 2 distinct answer types" }
    )
    .refine(
      (answers) => {
        // Ensure balanced positive/negative relationship impacts across all answers
        const positiveWeights = [
          ExchangeImpactWeight.StronglyPositive,
          ExchangeImpactWeight.Positive,
          ExchangeImpactWeight.SlightlyPositive,
        ];
        const negativeWeights = [
          ExchangeImpactWeight.StronglyNegative,
          ExchangeImpactWeight.Negative,
          ExchangeImpactWeight.SlightlyNegative,
        ];

        const hasPositiveImpact = answers.some((answer) => {
          const impacts = answer.impacts;
          return (
            (impacts.president?.weight &&
              positiveWeights.includes(impacts.president.weight)) ||
            (impacts.cabinet &&
              Object.values(impacts.cabinet).some((impact) =>
                positiveWeights.includes(impact.weight)
              ))
          );
        });

        const hasNegativeImpact = answers.some((answer) => {
          const impacts = answer.impacts;
          return (
            (impacts.president?.weight &&
              negativeWeights.includes(impacts.president.weight)) ||
            (impacts.cabinet &&
              Object.values(impacts.cabinet).some((impact) =>
                negativeWeights.includes(impact.weight)
              ))
          );
        });

        return hasPositiveImpact && hasNegativeImpact;
      },
      {
        message:
          "Questions must have answers with both positive and negative relationship impacts for president/cabinet",
        path: ["answers"],
      }
    )
    .refine(
      (answers) => {
        // Ensure president doesn't have more positive than negative impacts
        const positiveWeights = [
          ExchangeImpactWeight.StronglyPositive,
          ExchangeImpactWeight.Positive,
          ExchangeImpactWeight.SlightlyPositive,
        ];
        const negativeWeights = [
          ExchangeImpactWeight.StronglyNegative,
          ExchangeImpactWeight.Negative,
          ExchangeImpactWeight.SlightlyNegative,
        ];

        const presidentPositive = answers.filter(
          (answer) =>
            answer.impacts.president?.weight &&
            positiveWeights.includes(answer.impacts.president.weight)
        ).length;

        const presidentNegative = answers.filter(
          (answer) =>
            answer.impacts.president?.weight &&
            negativeWeights.includes(answer.impacts.president.weight)
        ).length;

        // Allow equal or fewer positive than negative (≤ ratio)
        return (
          presidentPositive <= presidentNegative || presidentPositive === 0
        );
      },
      {
        message:
          "President cannot have more positive than negative relationship impacts across question answers",
        path: ["answers"],
      }
    )
    .refine(
      (answers) => {
        // Ensure each cabinet member doesn't have more positive than negative impacts
        const positiveWeights = [
          ExchangeImpactWeight.StronglyPositive,
          ExchangeImpactWeight.Positive,
          ExchangeImpactWeight.SlightlyPositive,
        ];
        const negativeWeights = [
          ExchangeImpactWeight.StronglyNegative,
          ExchangeImpactWeight.Negative,
          ExchangeImpactWeight.SlightlyNegative,
        ];

        const cabinetStats = new Map<
          CabinetStaticId,
          { positive: number; negative: number }
        >();

        answers.forEach((answer) => {
          if (answer.impacts.cabinet) {
            Object.entries(answer.impacts.cabinet).forEach(
              ([cabinetId, impact]) => {
                const id = cabinetId as CabinetStaticId;
                if (!cabinetStats.has(id)) {
                  cabinetStats.set(id, { positive: 0, negative: 0 });
                }

                const stats = cabinetStats.get(id)!;
                if (positiveWeights.includes(impact.weight)) {
                  stats.positive++;
                } else if (negativeWeights.includes(impact.weight)) {
                  stats.negative++;
                }
              }
            );
          }
        });

        // Check that no cabinet member has more positive than negative
        for (const [, stats] of cabinetStats) {
          if (stats.positive > stats.negative && stats.positive > 0) {
            return false;
          }
        }

        return true;
      },
      {
        message:
          "No cabinet member can have more positive than negative relationship impacts across question answers",
        path: ["answers"],
      }
    ),
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
