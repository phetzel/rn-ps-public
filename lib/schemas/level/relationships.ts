import { z } from "zod";

import { consequenceResultSchema } from "~/lib/schemas/level/consequences";
import { CabinetStaticId } from "~/types";

export const relationshipSnapshotSchema = z.object({
  president: z.object({
    approvalRating: z.number(),
    psRelationship: z.number(),
  }),
  cabinetMembers: z.record(
    z.string(),
    z.object({
      approvalRating: z.number(),
      psRelationship: z.number(),
    })
  ),
  subgroups: z.record(
    z.string(),
    z.object({
      approvalRating: z.number(),
    })
  ),
  journalists: z.record(
    z.string(),
    z.object({
      psRelationship: z.number(),
    })
  ),
  publications: z.record(
    z.string(),
    z.object({
      approvalRating: z.number(),
    })
  ),
});

const cabinetSnapshotShape = Object.fromEntries(
  Object.values(CabinetStaticId).map((id) => [id, z.string().min(1)])
) as Record<CabinetStaticId, z.ZodString>;

export const cabinetSnapshotSchema = z.object(cabinetSnapshotShape);

export const outcomeSnapshotSchema = z.object({
  initial: relationshipSnapshotSchema,
  final: relationshipSnapshotSchema.optional(),
  consequences: consequenceResultSchema.optional(),
});
