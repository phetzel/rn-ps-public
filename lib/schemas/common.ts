import { z } from "zod";

export const idSchema = z
  .string()
  .min(1)
  .regex(/^[a-z0-9_-]+$/, {
    message:
      "ID must contain only lowercase letters, numbers, underscores, and hyphens",
  });

export const textLengthSchema = {
  situationTitle: z.string().min(15).max(50),
  situationDescription: z.string().min(80).max(160),
  outcomeTitle: z.string().min(20).max(60),
  outcomeDescription: z.string().min(60).max(140),
  questionText: z.string().min(60).max(150),
  answerText: z.string().min(80).max(180),
  rationale: z.string().min(40).max(120),
  authorizedContent: z.string().min(50).max(300),
};
