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
})
.refine(
  (outcome) => {
    // Individual outcome must affect at least one entity
    const cabinetCount = Object.keys(outcome.consequences.approvalChanges.cabinet || {}).length;
    const subgroupCount = Object.keys(outcome.consequences.approvalChanges.subgroups || {}).length;
    return cabinetCount + subgroupCount >= 1;
  },
  {
    message: "Each outcome must affect at least one entity",
    path: ["consequences"],
  }
)
.refine(
  (outcome) => {
    // Individual outcome cannot affect too many entities (keeps impacts focused)
    const cabinetCount = Object.keys(outcome.consequences.approvalChanges.cabinet || {}).length;
    const subgroupCount = Object.keys(outcome.consequences.approvalChanges.subgroups || {}).length;
    return cabinetCount + subgroupCount <= 6;
  },
  {
    message: "No outcome can affect more than 6 entities (keeps impacts focused)",
    path: ["consequences"],
  }
);

export const situationOutcomeArraySchema = z
  .array(situationOutcomeSchema)
  .min(2, "At least 2 outcomes required for meaningful choice")
  .max(4, "Maximum 4 outcomes for mobile UI constraints");

  export type SituationOutcome = z.infer<typeof situationOutcomeSchema>;
  export type SituationOutcomeArray = z.infer<typeof situationOutcomeArraySchema>;