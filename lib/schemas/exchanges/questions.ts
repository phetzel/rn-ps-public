import { z } from "zod";

import { idSchema, textLengthSchema } from "~/lib/schemas/common";
import { exchangeImpactsSchema } from "~/lib/schemas/exchanges/impacts";
import { AnswerType, CabinetStaticId, ExchangeImpactWeight } from "~/types";

export const answerSchema = z.object({
  id: idSchema,
  text: textLengthSchema.answerText,
  type: z.nativeEnum(AnswerType),
  authorizedCabinetMemberId: z.nativeEnum(CabinetStaticId).optional(),
  followUpId: z.string().optional(),
  outcomeModifiers: z.record(z.string(), z.number()),
  impacts: exchangeImpactsSchema,
})
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
  )
  .refine(
    (data) => {
      // Disallow journalist impacts
      const journalists = data.impacts.journalists;
      return !journalists || Object.keys(journalists).length === 0;
    },
    { message: "Answers cannot impact journalists", path: ["impacts", "journalists"] }
  )
  .refine(
    (data) => {
      // Each answer must have mixed impacts (both positive and negative across president/cabinet)
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

      let hasPos = false;
      let hasNeg = false;

      if (data.impacts.president?.weight !== undefined) {
        const w = data.impacts.president.weight;
        if (positiveWeights.includes(w)) hasPos = true;
        if (negativeWeights.includes(w)) hasNeg = true;
      }
      if (data.impacts.cabinet) {
        Object.values(data.impacts.cabinet).forEach((impact) => {
          if (!impact) return;
          if (positiveWeights.includes(impact.weight)) hasPos = true;
          if (negativeWeights.includes(impact.weight)) hasNeg = true;
        });
      }

      return hasPos && hasNeg;
    },
    { message: "Each answer must include both positive and negative impacts (president/cabinet)", path: ["impacts"] }
  );

// Question schema
export const questionSchema = z
  .object({
    id: idSchema,
    text: textLengthSchema.questionText,
    answers: z.array(answerSchema).min(4).max(4),
  })
  .refine(
    (data) => {
      // Enforce that no single AnswerType appears more than twice among the 4 answers
      const counts = new Map<AnswerType, number>();
      data.answers.forEach((a) => {
        counts.set(a.type as AnswerType, (counts.get(a.type as AnswerType) || 0) + 1);
      });
      for (const [, count] of counts) {
        if (count > 2) return false;
      }
      return true;
    },
    { message: "No single answer type may appear more than twice per question" }
  )
  .refine(
    (data) => {
      // Ensure outcome modifiers sum to 0 across all answers for game balance
      const totalSum = data.answers.reduce((total, answer) => {
        return total + Object.values(answer.outcomeModifiers).reduce((s, v) => s + v, 0);
      }, 0);
      return totalSum === 0;
    },
    { message: "Outcome modifiers must sum to 0 per question for game balance" }
  )
  .refine(
    (data) => {
      // Ensure diverse answer types
      const types = new Set(data.answers.map((a) => a.type));
      return types.size >= 2;
    },
    { message: "Questions must have at least 2 distinct answer types" }
  )
  .refine(
    (data) => {
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

      const hasPositiveImpact = data.answers.some((answer) => {
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

      const hasNegativeImpact = data.answers.some((answer) => {
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
    (data) => {
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

      const presidentPositive = data.answers.filter(
        (answer) =>
          answer.impacts.president?.weight &&
          positiveWeights.includes(answer.impacts.president.weight)
      ).length;

      const presidentNegative = data.answers.filter(
        (answer) =>
          answer.impacts.president?.weight &&
          negativeWeights.includes(answer.impacts.president.weight)
      ).length;

      // Allow equal or fewer positive than negative (≤ ratio)
      return presidentPositive <= presidentNegative || presidentPositive === 0;
    },
    {
      message:
        "President cannot have more positive than negative relationship impacts across question answers",
      path: ["answers"],
    }
  )
  .refine(
    (data) => {
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

      data.answers.forEach((answer) => {
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
  )
  .refine(
    (data) => {
      // Ensure at least one net-positive and one net-negative answer (sum across president/cabinet)
      let hasNetPositive = false;
      let hasNetNegative = false;

      for (const answer of data.answers) {
        let net = 0;
        if (answer.impacts.president?.weight !== undefined) {
          net += answer.impacts.president.weight;
        }
        if (answer.impacts.cabinet) {
          Object.values(answer.impacts.cabinet).forEach((impact) => {
            if (impact?.weight !== undefined) net += impact.weight;
          });
        }

        if (net > 0) hasNetPositive = true;
        if (net < 0) hasNetNegative = true;
        if (hasNetPositive && hasNetNegative) return true;
      }
      return false;
    },
    { message: "Each question must include at least one net-positive and one net-negative answer" }
  )
  .refine(
    (data) => {
      // Most answers net-negative: require at least 3 of 4 answers to be net-negative
      let netNegativeCount = 0;
      for (const answer of data.answers) {
        let net = 0;
        if (answer.impacts.president?.weight !== undefined) {
          net += answer.impacts.president.weight;
        }
        if (answer.impacts.cabinet) {
          Object.values(answer.impacts.cabinet).forEach((impact) => {
            if (impact?.weight !== undefined) net += impact.weight;
          });
        }
        if (net < 0) netNegativeCount++;
      }
      return netNegativeCount >= 3;
    },
    { message: "At least 3 of 4 answers must be net-negative" }
  );

// Root question schema - must have exactly 2 followUp answers
export const rootQuestionSchema = questionSchema.refine(
  (data) => {
    const followUpCount = data.answers.filter((a) => a.followUpId).length;
    return followUpCount === 2;
  },
  { message: "Root question must have exactly 2 answers with followUpId" }
);

// Secondary question schema - must have exactly 1 followUp answer
export const secondaryQuestionSchema = questionSchema.refine(
  (data) => {
    const followUpCount = data.answers.filter((a) => a.followUpId).length;
    return followUpCount === 1;
  },
  { message: "Secondary question must have exactly 1 answer with followUpId" }
);

// Tertiary question schema - must have no followUp answers
export const tertiaryQuestionSchema = questionSchema.refine(
  (data) => {
    const followUpCount = data.answers.filter((a) => a.followUpId).length;
    return followUpCount === 0;
  },
  { message: "Tertiary questions cannot have followUpId (terminal questions)" }
);

// Exchange content schema
export const exchangeContentSchema = z.object({
  rootQuestion: rootQuestionSchema,
  secondaryQuestions: z.tuple([
    secondaryQuestionSchema,
    secondaryQuestionSchema,
  ]),
  tertiaryQuestions: z.tuple([tertiaryQuestionSchema, tertiaryQuestionSchema]),
});
