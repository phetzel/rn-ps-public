import { z } from "zod";
import {
  CabinetStaticId,
  SubgroupStaticId,
  JournalistStaticId,
  PoliticalParty,
  PreferenceWeight,
  SituationConsequenceWeight,
  AnswerOutcomeModifier,
} from "~/types";

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
const cabinetSnapshotShape = Object.fromEntries(
  Object.values(CabinetStaticId).map((id) => [id, z.string().min(1)])
) as Record<CabinetStaticId, z.ZodString>;
export const cabinetSnapshotSchema = z.object(cabinetSnapshotShape);

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

// Situation Schema
export const preferenceSchema = z.object({
  weight: z.nativeEnum(PreferenceWeight),
  rationale: z.string(),
});

export const situationPreferencesSchema = z.object({
  president: preferenceSchema.optional(),
  cabinet: z.record(z.nativeEnum(CabinetStaticId), preferenceSchema).optional(),
});

export const consequenceSchema = z.object({
  approvalChanges: z.object({
    president: z.nativeEnum(SituationConsequenceWeight).optional(),
    cabinet: z
      .record(
        z.nativeEnum(CabinetStaticId),
        z.nativeEnum(SituationConsequenceWeight)
      )
      .optional(),
    subgroups: z
      .record(
        z.nativeEnum(SubgroupStaticId),
        z.nativeEnum(SituationConsequenceWeight)
      )
      .optional(),
  }),
  effects: z
    .object({
      isFiredPresident: z.boolean().optional(),
      isFiredPressSecretary: z.boolean().optional(),
      firedCabinetMemberId: z.nativeEnum(CabinetStaticId).optional(),
    })
    .optional(),
});

export const situationOutcomeSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  weight: z.number(),
  consequences: consequenceSchema,
  followUpId: z.string().optional(),
});

export const situationContentSchema = z.object({
  preferences: situationPreferencesSchema,
  outcomes: z.array(situationOutcomeSchema),
});

// Question Data Schema
// Press Exchange Schemas
export const exchangeImpactSchema = z.object({
  weight: z.number(),
  reaction: z.string().optional(),
});

export const exchangeImpactsSchema = z.object({
  president: exchangeImpactSchema.optional(),
  cabinet: z
    .record(z.nativeEnum(CabinetStaticId), exchangeImpactSchema)
    .optional(),
  subgroups: z
    .record(z.nativeEnum(SubgroupStaticId), exchangeImpactSchema)
    .optional(),
  journalists: z
    .record(z.nativeEnum(JournalistStaticId), exchangeImpactSchema)
    .optional(),
});

export const answerSchema = z.object({
  id: z.string(),
  text: z.string(),
  impacts: exchangeImpactsSchema,
  outcomeModifiers: z
    .record(z.string(), z.nativeEnum(AnswerOutcomeModifier))
    .optional(),
  followUpId: z.string().optional(),
});

export const questionSchema = z.object({
  id: z.string(),
  text: z.string(),
  depth: z.number(),
  answers: z.array(answerSchema),
});

export const exchangeContentSchema = z.object({
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
