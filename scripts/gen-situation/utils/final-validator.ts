import { situationDataSchema } from '~/lib/schemas/situations';

import type { ExchangeData } from '~/lib/schemas/exchanges';
import type { GenerateSituationPlan } from '~/lib/schemas/generate';
import type { SituationOutcome } from '~/lib/schemas/situations/outcomes';
import type { SituationPreferences } from '~/lib/schemas/situations/preferences';
import type { SituationData } from '~/types';

/**
 * Simple final validation utility
 * Assembles generated parts and validates against situationDataSchema
 */
export function validateFinalSituation(
  plan: GenerateSituationPlan,
  preferences: SituationPreferences,
  outcomes: SituationOutcome[],
  exchanges: ExchangeData[],
): SituationData {
  // Assemble the situation with proper type conversions
  const assembled = {
    type: plan.type,
    title: plan.title,
    description: plan.description,

    trigger: {
      staticKey: plan.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, ''),
      type: plan.type,
      requirements: {},
      isFollowUp: false,
    },

    content: {
      preferences,
      outcomes,
    },

    exchanges,
  };

  // Validate against final schema
  try {
    // Use safeParse to get more detailed error information
    // Cast to any to avoid TypeScript compile-time errors - let Zod handle runtime validation
    const result = situationDataSchema.safeParse(assembled as any);
    if (!result.success) {
      console.error('Validation errors:', result.error.issues);
      throw new Error(
        `Final situation validation failed: ${result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')}`,
      );
    }
    return result.data as SituationData;
  } catch (error) {
    throw new Error(
      `Final situation validation failed: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
