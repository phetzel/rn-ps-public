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

// Validate that followUpIds reference correct questions
export const validatedExchangeDataSchema = exchangeDataSchema
  .refine(
    (data) => {
      // Validate root followUpIds point to secondary questions
      const rootFollowUps = data.content.rootQuestion.answers
        .filter((a) => a.followUpId)
        .map((a) => a.followUpId);

      const secondaryIds = data.content.secondaryQuestions.map((q) => q.id);

      return rootFollowUps.every((id) => secondaryIds.includes(id!));
    },
    { message: "Root question followUpIds must reference secondary questions" }
  )
  .refine(
    (data) => {
      // Validate secondary followUpIds point to tertiary questions
      const secondaryFollowUps = data.content.secondaryQuestions
        .flatMap((q) => q.answers)
        .filter((a) => a.followUpId)
        .map((a) => a.followUpId);

      const tertiaryIds = data.content.tertiaryQuestions.map((q) => q.id);

      return secondaryFollowUps.every((id) => tertiaryIds.includes(id!));
    },
    {
      message:
        "Secondary question followUpIds must reference tertiary questions",
    }
  );

// Export TypeScript types derived from Zod schemas
export type ExchangeData = z.infer<typeof exchangeDataSchema>;
export type ValidatedExchangeData = z.infer<typeof validatedExchangeDataSchema>;
