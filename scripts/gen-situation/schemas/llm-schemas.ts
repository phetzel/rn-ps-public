import { z } from "zod";

import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  PublicationStaticId,
  AnswerType,
} from "~/types";

// Basic situation planning schema using your existing enum types
export const situationPlanSchema = z.object({
  title: z
    .string()
    .min(15)
    .max(50)
    .describe("Catchy, satirical headline (15-50 chars)"),
  description: z
    .string()
    .min(80)
    .max(160)
    .describe("Brief situational summary (80-160 chars)"),
  type: z
    .nativeEnum(SituationType)
    .describe("The category of this political situation"),
  reasoning: z
    .string()
    .min(10)
    .describe("Explanation of why this situation is needed"),
  involvedEntities: z.object({
    cabinetMembers: z
      .array(z.nativeEnum(CabinetStaticId))
      .min(1)
      .describe("Relevant cabinet departments"),
    subgroups: z
      .array(z.nativeEnum(SubgroupStaticId))
      .min(1)
      .describe("Affected voter groups"),
    publications: z
      .array(z.nativeEnum(PublicationStaticId))
      .min(2)
      .describe("Media outlets that will ask questions"),
  }),
});

// API-compatible preferences schema (simplified, no optional fields)
export const apiPreferencesSchema = z
  .object({
    presidentPreference: z
      .object({
        answerType: z
          .enum(["deflect", "reassure", "challenge", "admit", "deny", "inform"])
          .describe("President's preferred answer type"),
        rationale: z
          .string()
          .min(20)
          .max(200)
          .describe("Why the president prefers this approach (20-200 chars)"),
      })
      .describe("President's preference (always required)"),
    cabinetPreferences: z
      .array(
        z.object({
          member: z.nativeEnum(CabinetStaticId).describe("Cabinet member"),
          answerType: z
            .enum([
              "deflect",
              "reassure",
              "challenge",
              "admit",
              "deny",
              "inform",
            ])
            .describe(
              "Preferred answer type (no 'authorized' allowed in preferences)"
            ),
          rationale: z
            .string()
            .min(20)
            .max(200)
            .describe("Why they prefer this approach (20-200 chars)"),
          hasAuthorizedContent: z
            .boolean()
            .describe("Whether they have authorized content to share"),
        })
      )
      .min(1)
      .max(6)
      .describe("Preferences for each involved cabinet member (1-6 members)"),
  })
  .refine(
    (data) => {
      // Ensure no "authorized" answer types (these aren't allowed in preferences)
      const allAnswerTypes = [
        data.presidentPreference.answerType,
        ...data.cabinetPreferences.map((p) => p.answerType),
      ];
      return !allAnswerTypes.includes("authorized" as any);
    },
    {
      message: "Authorized answer type not allowed in preferences",
      path: ["preferences"],
    }
  );

// API-compatible outcomes schema (simplified for LLM generation)
export const apiOutcomesSchema = z
  .object({
    outcomes: z
      .array(
        z.object({
          id: z.string().describe("Unique outcome identifier"),
          title: z
            .string()
            .min(20)
            .max(60)
            .describe("Satirical outcome headline (20-60 chars)"),
          description: z
            .string()
            .min(60)
            .max(140)
            .describe("Brief outcome narrative (60-140 chars)"),
          weight: z
            .number()
            .min(10)
            .max(70)
            .describe("Probability weight (10-70, must sum to 100)"),
          consequences: z.object({
            cabinet: z
              .array(
                z.object({
                  member: z
                    .nativeEnum(CabinetStaticId)
                    .describe("Cabinet member affected"),
                  impact: z
                    .enum(["15", "10", "5", "0", "-5", "-10", "-15"])
                    .describe("Approval change amount"),
                })
              )
              .min(0)
              .max(4)
              .describe(
                "Cabinet member approval impacts (empty array if none, max 4)"
              ),
            subgroups: z
              .array(
                z.object({
                  group: z
                    .nativeEnum(SubgroupStaticId)
                    .describe("Subgroup affected"),
                  impact: z
                    .enum(["15", "10", "5", "0", "-5", "-10", "-15"])
                    .describe("Approval change amount"),
                })
              )
              .min(0)
              .max(4)
              .describe(
                "Subgroup approval impacts (empty array if none, max 4)"
              ),
          }),
        })
      )
      .min(2)
      .max(4)
      .describe("Possible situation outcomes (2-4 outcomes)"),
  })
  .refine(
    (data) => {
      const totalWeight = data.outcomes.reduce(
        (sum, outcome) => sum + outcome.weight,
        0
      );
      return totalWeight === 100;
    },
    {
      message: "Outcome weights must sum to exactly 100",
      path: ["outcomes"],
    }
  )
  .refine(
    (data) => {
      // Ensure at least one positive and one negative outcome exist
      const hasPositive = data.outcomes.some((outcome) =>
        [
          ...outcome.consequences.cabinet,
          ...outcome.consequences.subgroups,
        ].some((impact) => parseInt(impact.impact) > 0)
      );
      const hasNegative = data.outcomes.some((outcome) =>
        [
          ...outcome.consequences.cabinet,
          ...outcome.consequences.subgroups,
        ].some((impact) => parseInt(impact.impact) < 0)
      );
      return hasPositive && hasNegative;
    },
    {
      message: "Must have at least one positive and one negative outcome",
      path: ["outcomes"],
    }
  )
  .refine(
    (data) => {
      // Each outcome must affect at least one entity
      return data.outcomes.every((outcome) => {
        const totalImpacts =
          outcome.consequences.cabinet.length +
          outcome.consequences.subgroups.length;
        return totalImpacts >= 1;
      });
    },
    {
      message: "Each outcome must affect at least one entity",
      path: ["outcomes"],
    }
  )
  .refine(
    (data) => {
      // No outcome can affect more than 6 entities total
      return data.outcomes.every((outcome) => {
        const totalImpacts =
          outcome.consequences.cabinet.length +
          outcome.consequences.subgroups.length;
        return totalImpacts <= 6;
      });
    },
    {
      message: "No outcome can affect more than 6 entities",
      path: ["outcomes"],
    }
  )
  .refine(
    (data) => {
      // Entity balance check: each entity must have both positive and negative impacts across outcomes
      const entityStats = new Map<
        string,
        { positive: number; negative: number }
      >();

      data.outcomes.forEach((outcome) => {
        [
          ...outcome.consequences.cabinet,
          ...outcome.consequences.subgroups,
        ].forEach((impact) => {
          const entityId = "member" in impact ? impact.member : impact.group;
          if (!entityStats.has(entityId)) {
            entityStats.set(entityId, { positive: 0, negative: 0 });
          }

          const stats = entityStats.get(entityId)!;
          const impactValue = parseInt(impact.impact);
          if (impactValue > 0) {
            stats.positive++;
          } else if (impactValue < 0) {
            stats.negative++;
          }
        });
      });

      // Each entity must have both positive and negative impacts
      for (const [entityId, stats] of entityStats) {
        if (stats.positive === 0 || stats.negative === 0) {
          return false;
        }
      }
      return true;
    },
    {
      message:
        "Each affected entity must have both positive and negative impacts across outcomes",
      path: ["outcomes"],
    }
  );

// API-compatible exchanges schema for Phase 4 (simplified for OpenAI compatibility)
export const apiExchangesSchema = z
  .object({
    exchanges: z
      .array(
        z.object({
          publication: z
            .nativeEnum(PublicationStaticId)
            .describe("Publication conducting this exchange"),
          editorialAngle: z
            .string()
            .min(50)
            .max(200)
            .describe("How this publication approaches the situation"),

          // Root question with 2 follow-ups
          rootQuestionId: z.string().describe("Root question ID"),
          rootQuestionText: z
            .string()
            .min(60)
            .max(150)
            .describe("Root question text"),
          rootAnswer1: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z
              .boolean()
              .describe("True if this leads to follow-up"),
            followUpQuestionId: z
              .string()
              .nullable()
              .describe("Follow-up ID or null"),
          }),
          rootAnswer2: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z
              .boolean()
              .describe("True if this leads to follow-up"),
            followUpQuestionId: z
              .string()
              .nullable()
              .describe("Follow-up ID or null"),
          }),
          rootAnswer3: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z
              .boolean()
              .describe("False for non-follow-up answers"),
            followUpQuestionId: z.string().nullable().describe("Always null"),
          }),
          rootAnswer4: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z
              .boolean()
              .describe("False for non-follow-up answers"),
            followUpQuestionId: z.string().nullable().describe("Always null"),
          }),

          // Secondary questions (exactly 2)
          secondaryQuestion1Id: z.string(),
          secondaryQuestion1Text: z.string().min(60).max(150),
          secondary1Answer1: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z
              .boolean()
              .describe("True if leads to tertiary question"),
            followUpQuestionId: z.string().nullable(),
          }),
          secondary1Answer2: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z.boolean().describe("False for non-follow-up"),
            followUpQuestionId: z.string().nullable(),
          }),
          secondary1Answer3: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z.boolean().describe("False for non-follow-up"),
            followUpQuestionId: z.string().nullable(),
          }),
          secondary1Answer4: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z.boolean().describe("False for non-follow-up"),
            followUpQuestionId: z.string().nullable(),
          }),

          secondaryQuestion2Id: z.string(),
          secondaryQuestion2Text: z.string().min(60).max(150),
          secondary2Answer1: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z
              .boolean()
              .describe("True if leads to tertiary question"),
            followUpQuestionId: z.string().nullable(),
          }),
          secondary2Answer2: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z.boolean().describe("False for non-follow-up"),
            followUpQuestionId: z.string().nullable(),
          }),
          secondary2Answer3: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z.boolean().describe("False for non-follow-up"),
            followUpQuestionId: z.string().nullable(),
          }),
          secondary2Answer4: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
            hasFollowUp: z.boolean().describe("False for non-follow-up"),
            followUpQuestionId: z.string().nullable(),
          }),

          // Tertiary questions (exactly 2, no follow-ups)
          tertiaryQuestion1Id: z.string(),
          tertiaryQuestion1Text: z.string().min(60).max(150),
          tertiary1Answer1: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
          }),
          tertiary1Answer2: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
          }),
          tertiary1Answer3: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
          }),
          tertiary1Answer4: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
          }),

          tertiaryQuestion2Id: z.string(),
          tertiaryQuestion2Text: z.string().min(60).max(150),
          tertiary2Answer1: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
          }),
          tertiary2Answer2: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
          }),
          tertiary2Answer3: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
          }),
          tertiary2Answer4: z.object({
            id: z.string(),
            answerType: z.nativeEnum(AnswerType),
            answerText: z.string().min(80).max(180),
          }),
        })
      )
      .min(1)
      .max(3)
      .describe("Exchange for each involved publication (1-3 exchanges)"),
  })
  .refine(
    (data) => {
      // Each exchange must have exactly 2 follow-ups from root question
      return data.exchanges.every((exchange) => {
        const rootFollowUps = [
          exchange.rootAnswer1.hasFollowUp,
          exchange.rootAnswer2.hasFollowUp,
          exchange.rootAnswer3.hasFollowUp,
          exchange.rootAnswer4.hasFollowUp,
        ].filter(Boolean).length;
        return rootFollowUps === 2;
      });
    },
    {
      message:
        "Each exchange must have exactly 2 follow-ups from root question",
      path: ["exchanges"],
    }
  )
  .refine(
    (data) => {
      // Each exchange must have exactly 1 follow-up from each secondary question
      return data.exchanges.every((exchange) => {
        const secondary1FollowUps = [
          exchange.secondary1Answer1.hasFollowUp,
          exchange.secondary1Answer2.hasFollowUp,
          exchange.secondary1Answer3.hasFollowUp,
          exchange.secondary1Answer4.hasFollowUp,
        ].filter(Boolean).length;

        const secondary2FollowUps = [
          exchange.secondary2Answer1.hasFollowUp,
          exchange.secondary2Answer2.hasFollowUp,
          exchange.secondary2Answer3.hasFollowUp,
          exchange.secondary2Answer4.hasFollowUp,
        ].filter(Boolean).length;

        return secondary1FollowUps === 1 && secondary2FollowUps === 1;
      });
    },
    {
      message: "Each secondary question must have exactly 1 follow-up answer",
      path: ["exchanges"],
    }
  )
  .refine(
    (data) => {
      // Tertiary questions must have no follow-ups
      return data.exchanges.every((exchange) => {
        const tertiaryFollowUps = [
          exchange.tertiary1Answer1,
          exchange.tertiary1Answer2,
          exchange.tertiary1Answer3,
          exchange.tertiary1Answer4,
          exchange.tertiary2Answer1,
          exchange.tertiary2Answer2,
          exchange.tertiary2Answer3,
          exchange.tertiary2Answer4,
        ];

        // Tertiary answers should not have hasFollowUp or followUpQuestionId properties
        return tertiaryFollowUps.every(
          (answer) =>
            !("hasFollowUp" in answer) && !("followUpQuestionId" in answer)
        );
      });
    },
    {
      message: "Tertiary questions cannot have follow-ups",
      path: ["exchanges"],
    }
  )
  .refine(
    (data) => {
      // Each exchange must have diverse answer types
      return data.exchanges.every((exchange) => {
        const allAnswerTypes = [
          exchange.rootAnswer1.answerType,
          exchange.rootAnswer2.answerType,
          exchange.rootAnswer3.answerType,
          exchange.rootAnswer4.answerType,
          exchange.secondary1Answer1.answerType,
          exchange.secondary1Answer2.answerType,
          exchange.secondary1Answer3.answerType,
          exchange.secondary1Answer4.answerType,
          exchange.secondary2Answer1.answerType,
          exchange.secondary2Answer2.answerType,
          exchange.secondary2Answer3.answerType,
          exchange.secondary2Answer4.answerType,
          exchange.tertiary1Answer1.answerType,
          exchange.tertiary1Answer2.answerType,
          exchange.tertiary1Answer3.answerType,
          exchange.tertiary1Answer4.answerType,
          exchange.tertiary2Answer1.answerType,
          exchange.tertiary2Answer2.answerType,
          exchange.tertiary2Answer3.answerType,
          exchange.tertiary2Answer4.answerType,
        ];

        const uniqueTypes = new Set(allAnswerTypes);
        return uniqueTypes.size >= 3; // At least 3 different answer types
      });
    },
    {
      message: "Each exchange must have at least 3 different answer types",
      path: ["exchanges"],
    }
  );

export type SituationPlan = z.infer<typeof situationPlanSchema>;
export type ApiPreferences = z.infer<typeof apiPreferencesSchema>;
export type ApiOutcomes = z.infer<typeof apiOutcomesSchema>;
export type ApiExchanges = z.infer<typeof apiExchangesSchema>;
