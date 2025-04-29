import { z } from "zod";
import { CabinetRole, SituationStatus, PoliticalParty } from "~/types";

// Form Schemas
// Create Game Schema
export const createGameSchema = z.object({
  pressSecretaryName: z
    .string()
    .trim()
    .min(1, { message: "Press Secretary name is required" }),
  presidentName: z
    .string()
    .trim()
    .min(1, { message: "President name is required" }),
  presidentParty: z.nativeEnum(PoliticalParty),
});

export type CreateGameFormData = z.infer<typeof createGameSchema>;

// Model JSON Schemas
// Level Schemas
export const activeSituationInfoSchema = z.object({
  id: z.string(),
  status: z.nativeEnum(SituationStatus),
});
export const levelActiveSituationsSchema = z.array(activeSituationInfoSchema);

export const relationshipSnapshotSchema = z.object({
  president: z.object({
    approvalRating: z.number(),
    psRelationship: z.number(),
  }),
  cabinetMembers: z.record(
    z.string(),
    z.object({
      approvalRating: z.number(),
      psRelationship: z.number(),
    })
  ),
  journalists: z.record(
    z.string(),
    z.object({
      psRelationship: z.number(),
    })
  ),
  subgroups: z.record(
    z.string(),
    z.object({
      approvalRating: z.number(),
    })
  ),
});

export const outcomeSnapshotSchema = z.object({
  initial: relationshipSnapshotSchema,
  final: relationshipSnapshotSchema,
});

// Situation Progress Schema
export const preferenceSchema = z.object({
  weight: z.number(),
  rationale: z.string(),
});

export const stagePreferencesSchema = z.object({
  president: preferenceSchema.optional(),
  cabinet: z.record(z.nativeEnum(CabinetRole), preferenceSchema).optional(),
});

export const situationProgressSchema = z.object({
  stage: z.number(),
  preferences: z.record(z.coerce.number(), stagePreferencesSchema).optional(),
});

// Question Data Schema
// Press Exchange Schemas
export const exchangeImpactSchema = z.object({
  weight: z.number(),
  reaction: z.string().optional(),
});

export const exchangeImpactsSchema = z.object({
  president: exchangeImpactSchema.optional(),
  cabinet: z.record(z.string(), exchangeImpactSchema).optional(),
  publications: z.record(z.string(), exchangeImpactSchema).optional(),
  subgroups: z.record(z.string(), exchangeImpactSchema).optional(),
});

export const answerSchema = z.object({
  id: z.string(),
  text: z.string(),
  impacts: exchangeImpactsSchema,
  followUpId: z.string().optional(),
});

export const questionSchema = z.object({
  id: z.string(),
  text: z.string(),
  depth: z.number(),
  answers: z.array(answerSchema),
});

export const exchangeContentSchema = z.object({
  situationStage: z.number(),
  questions: z.record(z.string(), questionSchema),
  rootQuestionId: z.string(),
});

export const historyItemSchema = z.object({
  questionId: z.string(),
  answerId: z.string().optional(),
  skipped: z.boolean(),
});

export const exchangeProgressSchema = z.object({
  history: z.array(historyItemSchema),
  currentQuestionId: z.string().nullable(),
});
