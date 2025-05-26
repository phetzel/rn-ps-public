import { z } from "zod";
import {
  CabinetStaticId,
  SubgroupStaticId,
  JournalistStaticId,
  PublicationStaticId,
  PoliticalParty,
  PreferenceWeight,
  SituationConsequenceWeight,
  AnswerType,
  SituationType,
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
  subgroups: z.record(
    z.string(),
    z.object({
      approvalRating: z.number(),
    })
  ),
  journalists: z.record(
    z.string(),
    z.object({
      psRelationship: z.number(),
    })
  ),
  publications: z.record(
    z.string(),
    z.object({
      approvalRating: z.number(),
    })
  ),
});

export const consequenceResultSchema = z.object({
  gameEnded: z.boolean(),
  gameEndReason: z.enum(["impeached", "fired"]).optional(),
  cabinetMembersFired: z.array(z.nativeEnum(CabinetStaticId)),
  presidentApprovalPenalty: z.number(),
});

export const outcomeSnapshotSchema = z.object({
  initial: relationshipSnapshotSchema,
  final: relationshipSnapshotSchema.optional(),
  consequences: consequenceResultSchema.optional(), // NEW
});

// Situation Schema
export const preferenceSchema = z.object({
  answerType: z.nativeEnum(AnswerType),
  weight: z.nativeEnum(PreferenceWeight),
  rationale: z.string(),
});

export const cabinetPreferenceSchema = z.object({
  preference: preferenceSchema,
  authorizedContent: z.string().optional(),
});

export const situationPreferencesSchema = z.object({
  president: preferenceSchema.optional(),
  cabinet: z
    .record(z.nativeEnum(CabinetStaticId), cabinetPreferenceSchema)
    .optional(),
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
  type: z.nativeEnum(AnswerType),
  authorizedCabinetMemberId: z.nativeEnum(CabinetStaticId).optional(),
  impacts: exchangeImpactsSchema,
  outcomeModifiers: z.record(z.string(), z.number()),
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

// Static Situation Schema
export const situationTriggerSchema = z.object({
  staticKey: z.string().min(1),
  type: z.nativeEnum(SituationType),
  requirements: z.object({
    year: z
      .object({
        min: z.number().optional(),
        max: z.number().optional(),
      })
      .optional(),
    month: z
      .object({
        min: z.number().min(1).max(12).optional(),
        max: z.number().min(1).max(12).optional(),
      })
      .optional(),
    president: z
      .object({
        minApproval: z.number().min(0).max(100).optional(),
        maxApproval: z.number().min(0).max(100).optional(),
        party: z.nativeEnum(PoliticalParty).optional(),
      })
      .optional(),
    cabinet: z
      .record(
        z.nativeEnum(CabinetStaticId),
        z.object({
          minApproval: z.number().min(0).max(100).optional(),
          maxApproval: z.number().min(0).max(100).optional(),
        })
      )
      .optional(),
    subgroups: z
      .record(
        z.nativeEnum(SubgroupStaticId),
        z.object({
          minApproval: z.number().min(0).max(100).optional(),
          maxApproval: z.number().min(0).max(100).optional(),
        })
      )
      .optional(),
  }),
  isFollowUp: z.boolean().optional(),
});

export const exchangeDataSchema = z.object({
  content: exchangeContentSchema,
  publication: z.nativeEnum(PublicationStaticId),
});

export const situationDataSchema = z.object({
  trigger: situationTriggerSchema,
  type: z.nativeEnum(SituationType),
  title: z.string().min(1),
  description: z.string().min(1),
  content: situationContentSchema,
  exchanges: z.array(exchangeDataSchema),
});

export type SituationDataType = z.infer<typeof situationDataSchema>;
