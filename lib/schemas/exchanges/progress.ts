import { z } from "zod";
import { JournalistEngagementWeight } from "~/types";

export const historyItemSchema = z.object({
  questionId: z.string().min(1, "Question ID is required"),
  answerId: z.string().optional(),
  skipped: z.boolean(),
});

export const exchangeProgressSchema = z.object({
  // Detailed history - needed for consequence calculations
  history: z.array(historyItemSchema),
  currentQuestionId: z.string().nullable(),

  // Cached computed values for efficiency
  questionsAnswered: z.number().min(0).max(5),
  hasSkipped: z.boolean(),
  completed: z.boolean(),
  journalistEngagement: z.nativeEnum(JournalistEngagementWeight).optional(), // Optional - only set after completion
});
