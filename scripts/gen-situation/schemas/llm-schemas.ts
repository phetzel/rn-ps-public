import { z } from "zod";

import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  PublicationStaticId,
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

// API-compatible outcomes schema (simplified)
export const apiOutcomeSchema = z.object({
  id: z.string().describe("Unique identifier for this outcome"),
  title: z.string().min(10).max(60).describe("Brief title for this outcome"),
  description: z
    .string()
    .min(50)
    .max(200)
    .describe("Description of what happens"),
  weight: z
    .number()
    .min(1)
    .max(100)
    .describe("Probability weight (must sum to 100 across all outcomes)"),
  cabinetImpacts: z
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
    .describe("How this outcome affects cabinet approval"),
  subgroupImpacts: z
    .array(
      z.object({
        group: z.nativeEnum(SubgroupStaticId).describe("Subgroup affected"),
        impact: z
          .enum(["15", "10", "5", "0", "-5", "-10", "-15"])
          .describe("Approval change amount"),
      })
    )
    .describe("How this outcome affects subgroup approval"),
});

export type SituationPlan = z.infer<typeof situationPlanSchema>;
export type ApiPreferences = z.infer<typeof apiPreferencesSchema>;
export type ApiOutcome = z.infer<typeof apiOutcomeSchema>;
