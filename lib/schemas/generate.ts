import { z } from "zod";

import { idSchema } from "~/lib/schemas/common";
import { cabinetMemberSchema, subgroupSchema, publicationSchema, textLengthSchema } from "~/lib/schemas/common";
import { baseSituationDataSchema } from "~/lib/schemas/situations";
import { baseSituationPreferencesSchema } from "~/lib/schemas/situations/preferences";
import { baseSituationOutcomeSchema, baseSituationOutcomeArraySchema, consequenceSchema } from "~/lib/schemas/situations/outcomes";
import { exchangeContentSchema, baseAnswerSchema } from "~/lib/schemas/exchanges/questions";
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

// Preferences
export const generatePreferencesSchema = baseSituationPreferencesSchema;
export type GeneratePreferences = z.infer<typeof generatePreferencesSchema>;

// Outcomes
export const generateBaseOutcomesSchema = z.object({
  outcomes: baseSituationOutcomeArraySchema,
});
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
});
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

export const baseQuestionSchema = z.object({
  id: idSchema,
  text: textLengthSchema.questionText,
  answers: z.array(baseAnswerSchema),
});
export const generateBaseExchangeContentSchema = z.object({
  rootQuestion: baseQuestionSchema,
  secondaryQuestions: z.array(baseQuestionSchema).length(2), // ✅ Fixed
  tertiaryQuestions: z.array(baseQuestionSchema).length(2),
});
export type GenerateBaseExchangeContent = z.infer<typeof generateBaseExchangeContentSchema>;

export const generateExchangeContentSchema = exchangeContentSchema;
export type GenerateExchangeContent = z.infer<typeof generateExchangeContentSchema>;

export type ExchangesStepOutput = ValidatedExchangeData[];
