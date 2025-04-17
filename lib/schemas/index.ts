import { z } from "zod";
import { CabinetRole, SituationStatus } from "~/types";

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
});

export type CreateGameFormData = z.infer<typeof createGameSchema>;

// Model JSON Schemas
// Level Active Situations Schema
export const activeSituationInfoSchema = z.object({
  id: z.string(),
  status: z.nativeEnum(SituationStatus),
});
export const levelActiveSituationsSchema = z.array(activeSituationInfoSchema);

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
export const questionAnswerImpactSchema = z.object({
  weight: z.number(),
  reaction: z.string().optional(),
});

export const questionAnswerSchema = z.object({
  text: z.string(),
  impacts: z.object({
    president: questionAnswerImpactSchema.optional(),
    cabinet: z.record(z.string(), questionAnswerImpactSchema).optional(),
    publications: z.record(z.string(), questionAnswerImpactSchema).optional(),
    subgroups: z.record(z.string(), questionAnswerImpactSchema).optional(),
  }),
});

export const questionFollowUpSchema = z.object({
  text: z.string(),
  answers: z.array(questionAnswerSchema),
  selectedAnswerIndex: z.number().optional(),
});

export const questionDataSchema = z.object({
  text: z.string(),
  situationStage: z.number(),
  answers: z.array(questionAnswerSchema),
  selectedAnswerIndex: z.number().optional(),
  followUps: z.record(z.coerce.number(), questionFollowUpSchema).optional(),
});
