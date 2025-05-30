import { z } from "zod";

import {
  ExchangeImpactWeight,
  CabinetStaticId,
  SubgroupStaticId,
  JournalistStaticId,
} from "~/types";

export const exchangeImpactSchema = z.object({
  weight: z.nativeEnum(ExchangeImpactWeight),
  reaction: z
    .string()
    .min(20, "Reaction should provide meaningful context")
    .max(100, "Reaction should be concise for mobile display")
    .optional(),
});

export const exchangeImpactsSchema = z.object({
  president: exchangeImpactSchema.optional(),
  cabinet: z
    .record(z.nativeEnum(CabinetStaticId), exchangeImpactSchema)
    .optional(),
  subgroups: z
    .record(z.nativeEnum(SubgroupStaticId), exchangeImpactSchema)
    .optional(),
  journalists: z
    .record(z.nativeEnum(JournalistStaticId), exchangeImpactSchema)
    .optional(),
});
