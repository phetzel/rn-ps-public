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
export const apiPreferencesSchema = z.object({
  presidentPreference: z
    .object({
      answerType: z
        .enum(["deflect", "reassure", "challenge", "admit", "deny", "inform"])
        .describe("President's preferred answer type"),
      rationale: z.string().describe("Why the president prefers this approach"),
    })
    .describe("President's preference (always required)"),
  cabinetPreferences: z
    .array(
      z.object({
        member: z.nativeEnum(CabinetStaticId).describe("Cabinet member"),
        answerType: z
          .enum(["deflect", "reassure", "challenge", "admit", "deny", "inform"])
          .describe("Preferred answer type"),
        rationale: z.string().describe("Why they prefer this approach"),
        hasAuthorizedContent: z
          .boolean()
          .describe("Whether they have authorized content to share"),
      })
    )
    .describe("Preferences for each involved cabinet member"),
});

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
              .describe(
                "Cabinet member approval impacts (empty array if none)"
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
              .describe("Subgroup approval impacts (empty array if none)"),
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
  );

// API-compatible exchanges schema for Phase 4 (simplified for OpenAI compatibility)
export const apiExchangesSchema = z.object({
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
          hasFollowUp: z.boolean().describe("True if this leads to follow-up"),
          followUpQuestionId: z
            .string()
            .nullable()
            .describe("Follow-up ID or null"),
        }),
        rootAnswer2: z.object({
          id: z.string(),
          answerType: z.nativeEnum(AnswerType),
          answerText: z.string().min(80).max(180),
          hasFollowUp: z.boolean().describe("True if this leads to follow-up"),
          followUpQuestionId: z
            .string()
            .nullable()
            .describe("Follow-up ID or null"),
        }),
        rootAnswer3: z.object({
          id: z.string(),
          answerType: z.nativeEnum(AnswerType),
          answerText: z.string().min(80).max(180),
          hasFollowUp: z.boolean().describe("False for non-follow-up answers"),
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
      })
    )
    .describe("Exchange for each involved publication"),
});

export type SituationPlan = z.infer<typeof situationPlanSchema>;
export type ApiPreferences = z.infer<typeof apiPreferencesSchema>;
export type ApiOutcomes = z.infer<typeof apiOutcomesSchema>;
export type ApiExchanges = z.infer<typeof apiExchangesSchema>;
