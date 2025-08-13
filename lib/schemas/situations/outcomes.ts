import { z } from "zod";

import { idSchema, textLengthSchema } from "~/lib/schemas/common";
import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";

export const consequenceSchema = z.object({
  approvalChanges: z.object({
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
});

export const baseSituationOutcomeSchema = z.object({
  id: idSchema,
  title: textLengthSchema.outcomeTitle,
  description: textLengthSchema.outcomeDescription,
  weight: z.number().min(1).max(100),
});

export const baseSituationOutcomeArraySchema = z
  .array(baseSituationOutcomeSchema)
  .min(2, "At least 2 outcomes required for meaningful choice")
  .max(4, "Maximum 4 outcomes for mobile UI constraints");

export const situationOutcomeSchema = baseSituationOutcomeSchema.extend({
  consequences: consequenceSchema,
  followUpId: z.string().optional(),
});

export const situationOutcomeArraySchema = z
  .array(situationOutcomeSchema)
  .min(2, "At least 2 outcomes required for meaningful choice")
  .max(4, "Maximum 4 outcomes for mobile UI constraints");
