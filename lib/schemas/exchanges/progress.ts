import { z } from "zod";

export const historyItemSchema = z.object({
  questionId: z.string().min(1, "Question ID is required"),
  answerId: z.string().optional(),
  skipped: z.boolean(),
});

export const exchangeProgressSchema = z.object({
  history: z.array(historyItemSchema),
  currentQuestionId: z.string().nullable(),
});
