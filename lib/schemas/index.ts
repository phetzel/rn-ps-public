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
