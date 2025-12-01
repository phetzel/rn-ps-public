import { z } from 'zod';

import { situationOutcomeArraySchema } from '~/lib/schemas/situations/outcomes';
import { situationPreferencesSchema } from '~/lib/schemas/situations/preferences';

import type { CabinetStaticId, SituationConsequenceWeight } from '~/types';

export const situationContentSchema = z
  .object({
    preferences: situationPreferencesSchema,
    outcomes: situationOutcomeArraySchema,
  })
  .refine(
    (data) => {
      // Cabinet-preferences → consequences rules
      const prefCabinet = data.preferences.cabinet || {};
      const prefIds = new Set<CabinetStaticId>(Object.keys(prefCabinet) as CabinetStaticId[]);

      const appearances = new Map<string, { totalSum: number; hasPos: boolean; hasNeg: boolean }>();
      const nonPreferredUsed: string[] = [];

      data.outcomes.forEach((outcome) => {
        const cab = outcome.consequences.approvalChanges.cabinet || {};
        (Object.entries(cab) as [CabinetStaticId, SituationConsequenceWeight][]).forEach(
          ([id, weight]) => {
            if (!prefIds.has(id)) {
              nonPreferredUsed.push(id);
            }
            if (!appearances.has(id))
              appearances.set(id, { totalSum: 0, hasPos: false, hasNeg: false });
            const s = appearances.get(id)!;
            s.totalSum += weight;
            if (weight > 0) s.hasPos = true;
            if (weight < 0) s.hasNeg = true;
          },
        );
      });

      // Rule 1: Only cabinet members with a preference may appear in outcomes
      if (nonPreferredUsed.length > 0) return false;

      // Rule 2: Every cabinet member with a preference must appear at least once
      for (const id of prefIds) {
        if (!appearances.has(id)) return false;
      }

      // Rule 3: For each preferred cabinet member, require both positive and negative impacts and net neutral or negative total
      for (const id of prefIds) {
        const stats = appearances.get(id)!;
        if (!stats.hasPos || !stats.hasNeg) return false;
        if (stats.totalSum > 0) return false;
      }

      return true;
    },
    {
      message:
        'Cabinet outcomes must include only preference-bearing members; each must appear with both positive and negative impacts and net neutral/negative total',
      path: ['outcomes'],
    },
  )
  .refine(
    (data) => {
      // At most one cabinet member may include authorizedContent per situation
      const cab = data.preferences.cabinet || {};
      let count = 0;
      Object.values(cab).forEach((c) => {
        if (c?.authorizedContent) count++;
      });
      return count <= 1;
    },
    {
      message: 'Allow at most one cabinet member with authorizedContent',
      path: ['preferences', 'cabinet'],
    },
  );
