import { z } from "zod";

import { idSchema } from "~/lib/schemas/common";
import { cabinetMemberSchema, subgroupSchema, publicationSchema, textLengthSchema } from "~/lib/schemas/common";
import { baseSituationDataSchema } from "~/lib/schemas/situations";
import { baseSituationPreferencesSchema } from "~/lib/schemas/situations/preferences";
import { baseSituationOutcomeSchema, baseSituationOutcomeArraySchema, consequenceSchema } from "~/lib/schemas/situations/outcomes";
// baseAnswerSchema moved here for generation use
import { AnswerType, CabinetStaticId, ExchangeImpactWeight, JournalistStaticId } from "~/types";
import { ValidatedExchangeData } from "./exchanges";

// Plan
export const generateSituationPlanSchema = baseSituationDataSchema.extend({
  reasoning: z.string().min(10).describe("Why this situation improves balance"),
  involvedEntities: z.object({
    cabinetMembers: z.array(cabinetMemberSchema).min(1),
    subgroups: z.array(subgroupSchema).min(1),
    publications: z.array(publicationSchema).min(2),
  }),
});
export type GenerateSituationPlan = z.infer<typeof generateSituationPlanSchema>;

// Preferences (use core base schema during generation to satisfy strict JSON Schema)
export const generatePreferencesSchema = baseSituationPreferencesSchema;
export type GeneratePreferences = z.infer<typeof generatePreferencesSchema>;

// Outcomes
export const generateBaseOutcomesSchema = z.object({
  outcomes: baseSituationOutcomeArraySchema,
}).strict();
export type GenerateBaseOutcomes = z.infer<typeof generateBaseOutcomesSchema>;

export const generateSituationOutcomeSchema = baseSituationOutcomeSchema.extend({
  consequences: consequenceSchema,
  // No followUpId - removed for generation to avoid OpenAI strict mode issues
});

export const generateSituationOutcomeArraySchema = z
  .array(generateSituationOutcomeSchema)
  .min(2, "At least 2 outcomes required for meaningful choice")
  .max(4, "Maximum 4 outcomes for mobile UI constraints");


export const generateOutcomesSchema = z.object({
  outcomes: generateSituationOutcomeArraySchema,
}).strict();
export type GenerateOutcomes = z.infer<typeof generateOutcomesSchema>;

// Exchanges
// A single publication’s editorial plan
export const exchangesPlanSchema = z.object({
  publication: publicationSchema,
  editorialAngle: textLengthSchema.rationale
    .min(50)
    .max(200)
    .describe("Unique editorial angle for this outlet (50–200 chars)"),
  willHaveAuthorizedAnswer: z.boolean().describe(
    "Whether this outlet will receive an answer that includes confidential authorized content"
  ),
  authorizedCabinetMemberId: cabinetMemberSchema.nullable().describe(
    "If willHaveAuthorizedAnswer = true, must be a valid cabinet member id; otherwise must be null"
  ),
}).refine(
  (v) => (v.willHaveAuthorizedAnswer ? !!v.authorizedCabinetMemberId : !v.authorizedCabinetMemberId),
  { message: "If authorized is true, you must supply authorizedCabinetMemberId; otherwise omit it." }
);

const exchangesPlanArraySchema = z.array(exchangesPlanSchema).min(1).max(4);
export type ExchangesPlanArray = z.infer<typeof exchangesPlanArraySchema>;
export const generateExchangesPlanSchema = z.object({
  exchangePlans: exchangesPlanArraySchema,
});
export type GenerateExchangesPlan = z.infer<typeof generateExchangesPlanSchema>;

// Base answer schema for generation (with nullable() for OpenAI strict mode compatibility)
export const baseAnswerSchema = z.object({
  id: idSchema,
  text: textLengthSchema.answerText,
  type: z.nativeEnum(AnswerType),
  authorizedCabinetMemberId: z.nativeEnum(CabinetStaticId).nullable(),
  followUpId: z.string().nullable(),
}).strict();

// Generation-specific schemas with nullable() for OpenAI strict mode
export const generateBaseAnswerSchema = z.object({
  id: idSchema,
  text: textLengthSchema.answerText,
  type: z.nativeEnum(AnswerType),
  authorizedCabinetMemberId: z.nativeEnum(CabinetStaticId).nullable(),
  followUpId: z.string().nullable(),
  outcomeModifiers: z.record(z.string(), z.number()),
}).strict();

export const generateBaseQuestionSchema = z.object({
  id: idSchema,
  text: textLengthSchema.questionText,
  answers: z.array(generateBaseAnswerSchema),
}).strict();

// Export types for generation schemas
export type GenerateBaseAnswer = z.infer<typeof generateBaseAnswerSchema>;
export type GenerateBaseQuestion = z.infer<typeof generateBaseQuestionSchema>;

// Keep for backward compatibility, but prefer generateBaseQuestionSchema for generation  
export const baseQuestionSchema = z.object({
  id: idSchema,
  text: textLengthSchema.questionText,
  answers: z.array(baseAnswerSchema),
});
export const generateBaseExchangeContentSchema = z.object({
  rootQuestion: generateBaseQuestionSchema,
  secondaryQuestions: z.array(generateBaseQuestionSchema).length(2),
  tertiaryQuestions: z.array(generateBaseQuestionSchema).length(2),
}).strict();
export type GenerateBaseExchangeContent = z.infer<typeof generateBaseExchangeContentSchema>;

// Generate schemas for impacts (OpenAI compatible)
export const generateExchangeImpactSchema = z.object({
  weight: z.nativeEnum(ExchangeImpactWeight),
  reaction: z.string().nullable(),
}).strict();

export const generateExchangeImpactsSchema = z.object({
  president: z.union([generateExchangeImpactSchema, z.null()]),
  cabinet: z.union([
    z.record(z.string(), generateExchangeImpactSchema),
    z.null()
  ]),
  journalists: z.union([
    z.record(z.string(), generateExchangeImpactSchema),
    z.null()
  ]),
}).strict();

// Full answer schema with impacts (for generation)
export const generateFullAnswerSchema = z.object({
  id: idSchema,
  text: textLengthSchema.answerText,
  type: z.nativeEnum(AnswerType),
  authorizedCabinetMemberId: z.nativeEnum(CabinetStaticId).nullable(),
  followUpId: z.string().nullable(),
  outcomeModifiers: z.record(z.string(), z.number()),
  impacts: generateExchangeImpactsSchema,
}).strict();

export const generateFullQuestionSchema = z.object({
  id: idSchema,
  text: textLengthSchema.questionText,
  answers: z.array(generateFullAnswerSchema),
}).strict();

// Full exchange content schema (OpenAI compatible with impacts)
export const generateExchangeContentSchema = z.object({
  rootQuestion: generateFullQuestionSchema,
  secondaryQuestions: z.array(generateFullQuestionSchema).length(2),
  tertiaryQuestions: z.array(generateFullQuestionSchema).length(2),
}).strict();

export type GenerateExchangeContent = z.infer<typeof generateExchangeContentSchema>;

// Intermediate schemas for split generation
export const generateQuestionOnlyAnswerSchema = z.object({
  id: idSchema,
  text: textLengthSchema.answerText,
  type: z.nativeEnum(AnswerType),
  authorizedCabinetMemberId: z.nativeEnum(CabinetStaticId).nullable(),
  followUpId: z.string().nullable(),
}).strict();

export const generateQuestionOnlySchema = z.object({
  id: idSchema,
  text: textLengthSchema.questionText,
  answers: z.array(generateQuestionOnlyAnswerSchema),
}).strict();

export const generateQuestionsOnlyContentSchema = z.object({
  rootQuestion: generateQuestionOnlySchema,
  secondaryQuestions: z.array(generateQuestionOnlySchema).length(2),
  tertiaryQuestions: z.array(generateQuestionOnlySchema).length(2),
}).strict();

export type GenerateQuestionsOnlyContent = z.infer<typeof generateQuestionsOnlyContentSchema>;

// Schema for impacts generation per question (NOTE: These are not used in actual generation)
// The real schema is dynamically created in exchange-impacts-config.ts with explicit outcome ID properties
export const generateAnswerImpactSchema = z.object({
  answerId: idSchema,
  outcomeModifiers: z.record(z.string(), z.number()),
  impacts: generateExchangeImpactsSchema,
});

export const generateQuestionImpactsSchema = z.object({
  questionId: idSchema,
  answerImpacts: z.array(generateAnswerImpactSchema),
});

export const generateAllQuestionImpactsSchema = z.object({
  questionImpacts: z.array(generateQuestionImpactsSchema),
});

export type GenerateQuestionImpacts = z.infer<typeof generateQuestionImpactsSchema>;
export type GenerateAllQuestionImpacts = z.infer<typeof generateAllQuestionImpactsSchema>;

export type ExchangesStepOutput = ValidatedExchangeData[];
