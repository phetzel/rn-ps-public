import { z } from 'zod';

import { idSchema, textLengthSchema } from '~/lib/schemas/common';
import { SituationConsequenceWeight, CabinetStaticId, SubgroupStaticId } from '~/types';

import type { CabinetStaticId as CabId, SubgroupStaticId as SubId } from '~/types';

export const consequenceSchema = z.object({
  approvalChanges: z.object({
    cabinet: z
      .record(z.nativeEnum(CabinetStaticId), z.nativeEnum(SituationConsequenceWeight))
      .optional(),
    subgroups: z
      .record(z.nativeEnum(SubgroupStaticId), z.nativeEnum(SituationConsequenceWeight))
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
  .min(2, 'At least 2 outcomes required for meaningful choice')
  .max(4, 'Maximum 4 outcomes for mobile UI constraints');

export const situationOutcomeSchema = baseSituationOutcomeSchema
  .extend({
    consequences: consequenceSchema,
    followUpId: z.string().optional(),
  })
  .refine(
    (outcome) => {
      // Individual outcome must affect at least one entity
      const cabinetCount = Object.keys(outcome.consequences.approvalChanges.cabinet || {}).length;
      const subgroupCount = Object.keys(
        outcome.consequences.approvalChanges.subgroups || {},
      ).length;
      return cabinetCount + subgroupCount >= 1;
    },
    {
      message: 'Each outcome must affect at least one entity',
      path: ['consequences'],
    },
  )
  .refine(
    (outcome) => {
      // Individual outcome cannot affect too many entities (keeps impacts focused)
      const cabinetCount = Object.keys(outcome.consequences.approvalChanges.cabinet || {}).length;
      const subgroupCount = Object.keys(
        outcome.consequences.approvalChanges.subgroups || {},
      ).length;
      return cabinetCount + subgroupCount <= 6;
    },
    {
      message: 'No outcome can affect more than 6 entities (keeps impacts focused)',
      path: ['consequences'],
    },
  );

export const situationOutcomeArraySchema = z
  .array(situationOutcomeSchema)
  .min(2, 'At least 2 outcomes required for meaningful choice')
  .max(4, 'Maximum 4 outcomes for mobile UI constraints')
  // Weights must sum to 100
  .refine(
    (outcomes) => {
      const totalWeight = outcomes.reduce((sum, o) => sum + o.weight, 0);
      return totalWeight === 100;
    },
    { message: 'Outcome weights must sum to 100' },
  )
  // Involved entities caps: ≤3 cabinet, ≤3 subgroups across the situation
  .refine(
    (outcomes) => {
      const involvedCabinet = new Set<CabId>();
      const involvedSubgroups = new Set<SubId>();

      outcomes.forEach((outcome) => {
        const cab = outcome.consequences.approvalChanges.cabinet || {};
        const subs = outcome.consequences.approvalChanges.subgroups || {};
        Object.keys(cab).forEach((id) => involvedCabinet.add(id as CabId));
        Object.keys(subs).forEach((id) => involvedSubgroups.add(id as SubId));
      });

      return involvedCabinet.size <= 3 && involvedSubgroups.size <= 3;
    },
    { message: 'Use at most 3 cabinet and 3 subgroups across outcomes' },
  )
  // Mixedness and net coverage: each outcome mixed; exactly one net-positive; all others strictly net-negative
  .refine(
    (outcomes) => {
      let netPositiveCount = 0;

      for (const outcome of outcomes) {
        const cab = outcome.consequences.approvalChanges.cabinet || {};
        const subs = outcome.consequences.approvalChanges.subgroups || {};

        let hasPos = false;
        let hasNeg = false;
        let net = 0;

        Object.values(cab).forEach((w) => {
          net += w;
          if (w > 0) hasPos = true;
          if (w < 0) hasNeg = true;
        });
        Object.values(subs).forEach((w) => {
          net += w;
          if (w > 0) hasPos = true;
          if (w < 0) hasNeg = true;
        });

        // Each outcome must be mixed
        if (!(hasPos && hasNeg)) return false;

        if (net > 0) {
          netPositiveCount++;
        } else if (net >= 0) {
          // Disallow zero-sum for non-positive outcomes
          return false;
        }
      }

      // Exactly one net-positive outcome overall
      return netPositiveCount === 1;
    },
    {
      message:
        'Exactly one outcome must be net-positive; all others net-negative; each outcome must include both positive and negative impacts',
    },
  );

export type SituationOutcome = z.infer<typeof situationOutcomeSchema>;
export type SituationOutcomeArray = z.infer<typeof situationOutcomeArraySchema>;
