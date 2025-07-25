import { z } from "zod";
import { PublicationStaticId, AnswerType, CabinetStaticId } from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// PHASE 2: QUESTION GENERATION SCHEMAS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema for a single answer option
 */
export const answerOptionSchema = z.object({
  id: z.string().min(1).describe("Unique answer ID (e.g., 'a1', 'a2', 'a3')"),

  answerType: z.nativeEnum(AnswerType).describe("Type of answer strategy"),

  answerText: z
    .string()
    .min(30)
    .max(150)
    .describe("The press secretary's response text"),

  hasFollowUp: z
    .boolean()
    .describe("Whether this answer leads to a follow-up question"),

  followUpQuestionId: z
    .string()
    .nullable()
    .describe("ID of follow-up question if hasFollowUp is true"),

  authorizedCabinetMember: z
    .nativeEnum(CabinetStaticId)
    .nullable()
    .describe(
      "Cabinet member providing authorized intel (null if not authorized)"
    ),
});

/**
 * Schema for a question with its answer options
 */
export const questionDataSchema = z.object({
  id: z.string().min(1).describe("Unique question ID (e.g., 'q1', 'q2', 'q3')"),

  text: z.string().min(30).max(200).describe("The journalist's question text"),

  answers: z
    .array(answerOptionSchema)
    .min(3)
    .max(7)
    .describe("Available answer options for this question"),

  level: z
    .enum(["root", "secondary", "tertiary"])
    .describe("Question depth level in the exchange"),

  parentQuestionId: z
    .string()
    .nullable()
    .describe("ID of parent question if this is a follow-up"),
});

/**
 * Schema for a complete publication's exchange structure
 */
export const publicationExchangeSchema = z.object({
  publication: z
    .nativeEnum(PublicationStaticId)
    .describe("Which publication this exchange is for"),

  editorialAngle: z
    .string()
    .min(50)
    .max(200)
    .describe("Editorial approach from the planning phase"),

  questions: z
    .array(questionDataSchema)
    .min(3)
    .max(7)
    .describe("All questions in this exchange (root + follow-ups)"),

  questionFlow: z
    .object({
      rootQuestionId: z.string().describe("ID of the root question"),
      followUpPaths: z
        .array(
          z.object({
            fromAnswerId: z
              .string()
              .describe("Answer ID that triggers this path"),
            toQuestionId: z.string().describe("Question ID that follows"),
          })
        )
        .describe("Mapping of answer->question follow-up relationships"),
    })
    .describe("Structure showing question flow and relationships"),
});

/**
 * Schema for Phase 2 output - all publication exchanges
 */
export const questionGenerationResultSchema = z.object({
  exchanges: z
    .array(publicationExchangeSchema)
    .min(2)
    .max(4)
    .describe("Generated exchanges for each publication"),
});

// ═══════════════════════════════════════════════════════════════════════════════
// TYPESCRIPT TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type AnswerOption = z.infer<typeof answerOptionSchema>;
export type QuestionData = z.infer<typeof questionDataSchema>;
export type PublicationExchange = z.infer<typeof publicationExchangeSchema>;
export type QuestionGenerationResult = z.infer<
  typeof questionGenerationResultSchema
>;
