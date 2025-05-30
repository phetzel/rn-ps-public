import { z } from "zod";

import { idSchema } from "~/lib/schemas/common";
import {
  SituationType,
  PoliticalLeaning,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";

const approvalRatingSchema = z.number().min(0).max(100);

const minMaxRangeSchema = z
  .object({
    min: z.number().optional(),
    max: z.number().optional(),
  })
  .refine((data) => !data.min || !data.max || data.min <= data.max, {
    message: "Min value must be less than or equal to max value",
  });

const approvalRangeSchema = z
  .object({
    minApproval: approvalRatingSchema.optional(),
    maxApproval: approvalRatingSchema.optional(),
  })
  .refine(
    (data) =>
      !data.minApproval ||
      !data.maxApproval ||
      data.minApproval <= data.maxApproval,
    { message: "Min approval must be less than or equal to max approval" }
  );

const monthRangeSchema = z
  .object({
    min: z
      .number()
      .min(1, "Month must be 1-12")
      .max(12, "Month must be 1-12")
      .optional(),
    max: z
      .number()
      .min(1, "Month must be 1-12")
      .max(12, "Month must be 1-12")
      .optional(),
  })
  .refine((data) => !data.min || !data.max || data.min <= data.max, {
    message: "Min month must be less than or equal to max month",
  });

export const situationTriggerSchema = z.object({
  staticKey: z.string().min(1, "Static key is required"),
  type: z.nativeEnum(SituationType),
  requirements: z.object({
    year: minMaxRangeSchema.optional(),
    month: monthRangeSchema.optional(),
    president: z
      .object({
        minApproval: approvalRatingSchema.optional(),
        maxApproval: approvalRatingSchema.optional(),
        leaning: z.nativeEnum(PoliticalLeaning).optional(),
      })
      .refine(
        (data) =>
          !data.minApproval ||
          !data.maxApproval ||
          data.minApproval <= data.maxApproval,
        { message: "Min approval must be less than or equal to max approval" }
      )
      .optional(),
    cabinet: z
      .record(z.nativeEnum(CabinetStaticId), approvalRangeSchema)
      .optional(),
    subgroups: z
      .record(z.nativeEnum(SubgroupStaticId), approvalRangeSchema)
      .optional(),
  }),
  isFollowUp: z.boolean().optional(),
});
