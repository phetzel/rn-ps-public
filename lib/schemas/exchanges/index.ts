// Re-export all exchange schemas
export * from "~/lib/schemas/exchanges/impacts";
export * from "~/lib/schemas/exchanges/questions";
export * from "~/lib/schemas/exchanges/progress";

// Main exchange data schema
import { z } from "zod";

import { exchangeContentSchema } from "~/lib/schemas/exchanges/questions";
import { PublicationStaticId } from "~/types";

export const exchangeDataSchema = z.object({
  content: exchangeContentSchema,
  publication: z.nativeEnum(PublicationStaticId),
});

// Validate that root question exists in questions
export const validatedExchangeDataSchema = exchangeDataSchema.refine(
  (data) => {
    return data.content.rootQuestionId in data.content.questions;
  },
  {
    message: "Root question ID must exist in questions",
    path: ["content", "rootQuestionId"],
  }
);
