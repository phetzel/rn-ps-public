import { z } from "zod";
import {
  textLengthRules,
  llmAnswerTypeSchema,
  fullAnswerTypeSchema,
  idSchema,
  weightValidation,
  entitySchemas,
  validationPatterns,
} from "./core";
import { gameEntitySchemas } from "./game-enums";

// ═══════════════════════════════════════════════════════════════════════════════
// GENERATION SCHEMAS - ALL LLM GENERATION SCHEMAS CONSOLIDATED
// ═══════════════════════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────────────────────
// SITUATION PLANNING SCHEMAS
// ───────────────────────────────────────────────────────────────────────────────

export const situationPlanSchema = z.object({
  title: z
    .string()
    .min(textLengthRules.title.min)
    .max(textLengthRules.title.max)
    .describe("Catchy, satirical headline (15-50 chars)"),
  description: z
    .string()
    .min(textLengthRules.description.min)
    .max(textLengthRules.description.max)
    .describe("Brief situational summary (80-160 chars)"),
  type: gameEntitySchemas.situationType.describe("The category of this political situation"),
  reasoning: z
    .string()
    .min(10)
    .describe("Explanation of why this situation is needed"),
  involvedEntities: z.object({
    cabinetMembers: z
      .array(gameEntitySchemas.cabinetMember)
      .min(1)
      .describe("Relevant cabinet departments"),
    subgroups: z
      .array(gameEntitySchemas.subgroup)
      .min(1)
      .describe("Affected voter groups"),
    publications: z
      .array(gameEntitySchemas.publication)
      .min(2)
      .describe("Media outlets that will ask questions"),
  }),
});

// ───────────────────────────────────────────────────────────────────────────────
// PREFERENCES SCHEMAS
// ───────────────────────────────────────────────────────────────────────────────

export const apiPreferencesSchema = z
  .object({
      presidentPreference: z
    .object({
      answerType: gameEntitySchemas.answerType.describe("President's preferred answer type"),
        rationale: z
          .string()
          .min(textLengthRules.rationale.min)
          .max(textLengthRules.rationale.max)
          .describe("Why the president prefers this approach"),
      })
      .describe("President's preference (always required)"),
    cabinetPreferences: z
      .array(
        z.object({
          member: gameEntitySchemas.cabinetMember.describe("Cabinet member"),
          answerType: gameEntitySchemas.answerType.describe(
            "Preferred answer type (no 'authorized' allowed in preferences)"
          ),
          rationale: z
            .string()
            .min(textLengthRules.rationale.min)
            .max(textLengthRules.rationale.max)
            .describe("Why they prefer this approach"),
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

// ───────────────────────────────────────────────────────────────────────────────
// OUTCOMES GENERATION SCHEMAS (3-PHASE)
// ───────────────────────────────────────────────────────────────────────────────

// Phase 1: Outcome Narratives (story-focused, no entity impacts)
export const outcomeNarrativeSchema = z.object({
  id: idSchema.describe("Unique outcome identifier"),
  title: z
    .string()
    .min(textLengthRules.outcomeTitle.min)
    .max(textLengthRules.outcomeTitle.max)
    .describe("Satirical outcome headline"),
  description: z
    .string()
    .min(textLengthRules.outcomeDescription.min)
    .max(textLengthRules.outcomeDescription.max)
    .describe("Brief outcome narrative"),
  weight: weightValidation.outcomeWeight.describe("Probability weight (10-70, must sum to 100)"),
  thematicFocus: z
    .string()
    .min(textLengthRules.thematicFocus.min)
    .max(textLengthRules.thematicFocus.max)
    .describe("What aspect of the situation this outcome emphasizes"),
});

export const outcomesNarrativesResultSchema = z
  .object({
    outcomes: z
      .array(outcomeNarrativeSchema)
      .min(2)
      .max(4)
      .describe("2-4 outcome scenarios"),
  })
  .refine(
    (data) => validationPatterns.weightsSum100(data.outcomes),
    { message: "Outcome weights must sum to exactly 100" }
  );

// Phase 2: Impact Matrix (balance-focused)
export const outcomeImpactSchema = z.object({
  outcomeId: z.string().min(1).describe("Outcome identifier"),
  impact: z.enum(["-15", "-10", "-5", "0", "5", "10", "15"]).describe("Impact value"),
  rationale: z
    .string()
    .min(20)
    .max(100)
    .describe("Why this outcome affects this entity"),
});

export const entityImpactSchema = z.object({
  entityId: z.string().min(1).describe("Entity identifier"),
  outcomeImpacts: z
    .array(outcomeImpactSchema)
    .min(1)
    .describe("Impact of each outcome on this entity"),
});

export const impactMatrixResultSchema = z.object({
  entityImpacts: z
    .array(entityImpactSchema)
    .min(1)
    .describe("Impact specifications for each entity"),
});

// Phase 3: Assembled Outcomes
export const apiOutcomeSchema = z.object({
  id: idSchema.describe("Unique outcome identifier"),
  title: z
    .string()
    .min(textLengthRules.outcomeTitle.min)
    .max(textLengthRules.outcomeTitle.max)
    .describe("Satirical outcome headline"),
  description: z
    .string()
    .min(textLengthRules.outcomeDescription.min)
    .max(textLengthRules.outcomeDescription.max)
    .describe("Brief outcome narrative"),
  weight: weightValidation.outcomeWeight.describe("Probability weight"),
  impactSummary: z
    .string()
    .min(40)
    .max(120)
    .describe("Summary of political impacts"),
  entityImpacts: z
    .array(entityImpactSchema)
    .min(1)
    .describe("Detailed entity impacts"),
});

export const apiOutcomesSchema = z
  .object({
    outcomes: z
      .array(apiOutcomeSchema)
      .min(2)
      .max(4)
      .describe("Final assembled outcomes"),
  })
  .refine(
    (data) => validationPatterns.weightsSum100(data.outcomes),
    { message: "Outcome weights must sum to exactly 100" }
  );

// ───────────────────────────────────────────────────────────────────────────────
// EXCHANGE PLANNING SCHEMAS
// ───────────────────────────────────────────────────────────────────────────────

export const publicationPlanSchema = z
  .object({
    publication: gameEntitySchemas.publication.describe("Which publication this plan is for"),
    editorialAngle: z
      .string()
      .min(textLengthRules.editorialAngle.min)
      .max(textLengthRules.editorialAngle.max)
      .describe("How this publication approaches the situation"),
    primaryFocus: z
      .string()
      .min(textLengthRules.primaryFocus.min)
      .max(textLengthRules.primaryFocus.max)
      .describe("What specific aspect this publication will dig into"),
    answerTypeStrategy: z
      .array(gameEntitySchemas.answerType)
      .min(3)
      .max(7)
      .describe("Planned answer types to use for variety (3-7 types)"),
    willHaveAuthorizedAnswer: z
      .boolean()
      .describe("Whether this exchange will include an authorized answer"),
    authorizedCabinetMember: gameEntitySchemas.cabinetMember
      .nullable()
      .describe("Which cabinet member provides authorized content (null if none)"),
  })
  .refine(
    (data) => {
      if (data.willHaveAuthorizedAnswer) {
        return !!data.authorizedCabinetMember;
      }
      return true;
    },
    {
      message: "Must specify authorizedCabinetMember when willHaveAuthorizedAnswer is true",
      path: ["authorizedCabinetMember"],
    }
  );

export const exchangePlanSchema = z.object({
  publicationPlans: z
    .array(publicationPlanSchema)
    .min(2)
    .max(4)
    .describe("Plans for each publication (2-4 publications)"),
});

// ───────────────────────────────────────────────────────────────────────────────
// QUESTION GENERATION SCHEMAS
// ───────────────────────────────────────────────────────────────────────────────

export const answerOptionSchema = z.object({
  id: idSchema.describe("Unique answer ID"),
  answerType: gameEntitySchemas.answerType.describe("Type of answer strategy"),
  answerText: z
    .string()
    .min(textLengthRules.answerText.min)
    .max(textLengthRules.answerText.max)
    .describe("The press secretary's response text"),
  hasFollowUp: z.boolean().describe("Whether this answer leads to a follow-up question"),
  followUpQuestionId: z
    .string()
    .nullable()
    .describe("ID of follow-up question if hasFollowUp is true"),
  authorizedCabinetMember: gameEntitySchemas.cabinetMember
    .nullable()
    .describe("Cabinet member providing authorized intel (null if not authorized)"),
});

export const questionDataSchema = z.object({
  id: idSchema.describe("Unique question identifier"),
  questionText: z
    .string()
    .min(textLengthRules.questionText.min)
    .max(textLengthRules.questionText.max)
    .describe("The journalist's question"),
  level: z.enum(["difficult", "moderate", "easy"]).describe("Question difficulty level"),
  answers: z
    .array(answerOptionSchema)
    .length(4)
    .describe("Exactly 4 answer options"),
});

// ───────────────────────────────────────────────────────────────────────────────
// CONSEQUENCE GENERATION SCHEMAS
// ───────────────────────────────────────────────────────────────────────────────

export const optimizedQuestionConsequencesSchema = z.object({
  answers: z.array(
    z.object({
      impacts: z.object({
        president: z
          .object({
            weight: z.number().int().min(-6).max(6),
            reaction: z
              .string()
              .min(textLengthRules.reaction.min)
              .max(textLengthRules.reaction.max)
              .nullable(),
          })
          .nullable(),
        cabinet: z
          .array(
            z.object({
              member: gameEntitySchemas.cabinetMember,
              weight: z.number().int().min(-6).max(6),
              reaction: z
                .string()
                .min(textLengthRules.reaction.min)
                .max(textLengthRules.reaction.max)
                .nullable(),
            })
          )
          .nullable(),
        journalists: z
          .array(
            z.object({
              journalist: gameEntitySchemas.journalist,
              weight: z.number().int().min(-6).max(6),
              reaction: z
                .string()
                .min(textLengthRules.reaction.min)
                .max(textLengthRules.reaction.max)
                .nullable(),
            })
          )
          .nullable(),
      }),
      outcomeModifiers: z
        .array(
          z.object({
            outcomeId: idSchema,
            modifier: z.number().int().min(-20).max(20),
          })
        )
        .refine(
          (modifiers) => {
            const sum = modifiers.reduce((total, mod) => total + mod.modifier, 0);
            return sum === 0;
          },
          {
            message: "Outcome modifiers must sum to exactly 0 for game balance",
          }
        ),
    })
  ),
});

// Legacy schema for backward compatibility
export const questionConsequencesSchema = optimizedQuestionConsequencesSchema;

// ───────────────────────────────────────────────────────────────────────────────
// EXCHANGE GENERATION SCHEMAS (FLATTENED FOR LLM)
// ───────────────────────────────────────────────────────────────────────────────

export const apiExchangeSchema = z.object({
  publicationId: gameEntitySchemas.publication,
  editorialAngle: z.string().min(50).max(200),
  
  // Root question (4 answers, 2 with follow-ups)
  rootQuestionId: idSchema,
  rootQuestionText: z.string().min(40).max(200),
  rootAnswer1: answerOptionSchema,
  rootAnswer2: answerOptionSchema,
  rootAnswer3: answerOptionSchema,
  rootAnswer4: answerOptionSchema,
  
  // Secondary questions (2 questions, 4 answers each, 1 follow-up each)
  secondaryQuestion1: questionDataSchema,
  secondaryQuestion2: questionDataSchema,
  
  // Tertiary questions (2 questions, 4 answers each, no follow-ups)
  tertiaryQuestion1: questionDataSchema,
  tertiaryQuestion2: questionDataSchema,
});

export const publicationExchangeSchema = z.object({
  publication: gameEntitySchemas.publication.describe("Publication conducting this exchange"),
  editorialAngle: z.string().describe("Editorial angle for this publication"),
  rootQuestion: questionDataSchema.describe("Root question that starts the exchange"),
  secondaryQuestions: z
    .array(questionDataSchema)
    .length(2)
    .describe("Exactly 2 secondary questions triggered by root answers"),
  tertiaryQuestions: z
    .array(questionDataSchema)
    .length(2)
    .describe("Exactly 2 tertiary questions triggered by secondary answers"),
});

export const apiExchangesSchema = z.object({
  exchanges: z
    .array(apiExchangeSchema)
    .min(2)
    .max(4)
    .describe("Exchange content for each publication"),
});

// ───────────────────────────────────────────────────────────────────────────────
// TYPE EXPORTS
// ───────────────────────────────────────────────────────────────────────────────

export type SituationPlan = z.infer<typeof situationPlanSchema>;
export type ApiPreferences = z.infer<typeof apiPreferencesSchema>;
export type ApiOutcomes = z.infer<typeof apiOutcomesSchema>;
export type ApiExchanges = z.infer<typeof apiExchangesSchema>;
export type OutcomeNarrative = z.infer<typeof outcomeNarrativeSchema>;
export type OutcomesNarrativesResult = z.infer<typeof outcomesNarrativesResultSchema>;
export type ImpactMatrixResult = z.infer<typeof impactMatrixResultSchema>;
export type ExchangePlan = z.infer<typeof exchangePlanSchema>;
export type PublicationPlan = z.infer<typeof publicationPlanSchema>;
export type QuestionConsequences = z.infer<typeof questionConsequencesSchema>;
export type QuestionGenerationResult = z.infer<typeof questionDataSchema>;
export type PublicationExchange = z.infer<typeof publicationExchangeSchema>;
export type AnswerOption = z.infer<typeof answerOptionSchema>;

// ───────────────────────────────────────────────────────────────────────────────
// ORGANIZED SCHEMA COLLECTIONS
// ───────────────────────────────────────────────────────────────────────────────

export const LLMSchemas = {
  situation: {
    planning: situationPlanSchema,
    preferences: apiPreferencesSchema,
  },
  outcomes: {
    narratives: outcomesNarrativesResultSchema,
    impactMatrix: impactMatrixResultSchema,
    assembled: apiOutcomesSchema,
  },
  exchanges: {
    planning: exchangePlanSchema,
    questions: questionDataSchema,
    publicationExchange: publicationExchangeSchema,
    consequences: questionConsequencesSchema,
    complete: apiExchangesSchema,
  },
} as const;