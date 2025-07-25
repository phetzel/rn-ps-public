import { z } from "zod";
import { PublicationStaticId, AnswerType, CabinetStaticId } from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// PHASE 1: EXCHANGE PLANNING SCHEMAS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema for planning a single publication's exchange approach
 */
export const publicationPlanSchema = z
  .object({
    publication: z
      .nativeEnum(PublicationStaticId)
      .describe("Which publication this plan is for"),

    editorialAngle: z
      .string()
      .min(50)
      .max(200)
      .describe("How this publication approaches the situation"),

    primaryFocus: z
      .string()
      .min(30)
      .max(100)
      .describe("What specific aspect this publication will dig into"),

    answerTypeStrategy: z
      .array(z.nativeEnum(AnswerType))
      .min(3)
      .max(7)
      .describe("Planned answer types to use for variety (3-7 types)"),

    willHaveAuthorizedAnswer: z
      .boolean()
      .describe("Whether this exchange will include an authorized answer"),

    authorizedCabinetMember: z
      .nativeEnum(CabinetStaticId)
      .nullable()
      .describe(
        "Which cabinet member provides authorized content (null if none)"
      ),
  })
  .refine(
    (data) => {
      // If willHaveAuthorizedAnswer is true, must specify cabinet member
      if (data.willHaveAuthorizedAnswer) {
        return !!data.authorizedCabinetMember;
      }
      return true;
    },
    {
      message:
        "Must specify authorizedCabinetMember when willHaveAuthorizedAnswer is true",
      path: ["authorizedCabinetMember"],
    }
  );

/**
 * Schema for overall exchange planning strategy
 */
export const exchangePlanSchema = z
  .object({
    strategy: z.object({
      overallApproach: z
        .string()
        .min(50)
        .max(200)
        .describe("High-level approach across all exchanges"),

      publicationBalance: z
        .string()
        .min(30)
        .max(150)
        .describe("How publications complement each other"),

      answerTypeDistribution: z
        .string()
        .min(30)
        .max(150)
        .describe("Strategy for distributing answer types across exchanges"),
    }),

    publications: z
      .array(publicationPlanSchema)
      .min(2)
      .max(3)
      .describe("Plan for each publication exchange (2-3 publications)"),
  })
  .refine(
    (data) => {
      // Ensure at most one publication has authorized answers
      const authorizedCount = data.publications.filter(
        (pub) => pub.willHaveAuthorizedAnswer
      ).length;
      return authorizedCount <= 1;
    },
    {
      message: "At most one publication can have authorized answers",
      path: ["publications"],
    }
  )
  .refine(
    (data) => {
      // Ensure no duplicate publications
      const publications = data.publications.map((pub) => pub.publication);
      const uniquePublications = new Set(publications);
      return publications.length === uniquePublications.size;
    },
    {
      message: "Cannot have duplicate publications in exchange plan",
      path: ["publications"],
    }
  );

// Export TypeScript types
export type PublicationPlan = z.infer<typeof publicationPlanSchema>;
export type ExchangePlan = z.infer<typeof exchangePlanSchema>;
