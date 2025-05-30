// Re-export all situation schemas
export * from "~/lib/schemas/situations/triggers";
export * from "~/lib/schemas/situations/preferences";
export * from "~/lib/schemas/situations/content";

// Main situation data schema with cross-validation
import { z } from "zod";

import { textLengthSchema } from "~/lib/schemas/common";
import { exchangeDataSchema } from "~/lib/schemas/exchanges";
import { situationTriggerSchema } from "~/lib/schemas/situations/triggers";
import { situationContentSchema } from "~/lib/schemas/situations/content";
import { SituationType } from "~/types";

export const situationDataSchema = z
  .object({
    trigger: situationTriggerSchema,
    type: z.nativeEnum(SituationType),
    title: textLengthSchema.situationTitle,
    description: textLengthSchema.situationDescription,
    content: situationContentSchema,
    exchanges: z
      .array(exchangeDataSchema)
      .min(1, "At least one exchange is required")
      .max(5, "Maximum 5 exchanges per situation for mobile performance"),
  })
  .refine((data) => data.trigger.type === data.type, {
    message: "Situation type must match trigger type",
    path: ["type"],
  });

export type SituationDataType = z.infer<typeof situationDataSchema>;
