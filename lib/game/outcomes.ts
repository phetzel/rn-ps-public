import type { SituationOutcome, SituationOutcomeWeight } from '~/types';

/**
 * Select an item from a weighted list using weighted random selection.
 * Only items with positive weights are eligible.
 */
export function selectOutcomeByWeightedRandom<T extends { weight: number }>(items: T[]): T | null {
  if (!items || items.length === 0) {
    return null;
  }

  let totalWeight = 0;
  for (const item of items) {
    if (item.weight > 0) {
      totalWeight += item.weight;
    }
  }

  if (totalWeight <= 0) {
    return null;
  }

  // eslint-disable-next-line sonarjs/pseudo-random -- non-crypto RNG for gameplay outcomes
  let random = Math.random() * totalWeight;

  for (const item of items) {
    if (item.weight > 0) {
      if (random < item.weight) {
        return item;
      }
      random -= item.weight;
    }
  }

  return null;
}

/**
 * Compute the final outcome weights for a situation given base outcomes and press exchange modifiers.
 */
export function computeOutcomeWeights(
  outcomes: SituationOutcome[],
  outcomeDeltas: Record<string, number>,
): SituationOutcomeWeight[] {
  return outcomes.map((outcome) => {
    const modifier = outcomeDeltas[outcome.id] || 0;
    const finalWeight = Math.max(0, outcome.weight + modifier);

    return {
      id: outcome.id,
      title: outcome.title,
      description: outcome.description,
      baseWeight: outcome.weight,
      modifier,
      finalWeight,
    };
  });
}

/**
 * Choose an outcome for a situation based on weighted random selection with modifiers.
 * Returns the chosen outcome ID, or null if no outcome could be chosen.
 */
export function chooseOutcomeForSituation(
  outcomes: SituationOutcome[],
  situationSpecificDeltas: Record<string, number>,
): string | null {
  // Prepare outcomes with their effective weights
  const outcomesWithEffectiveWeights = outcomes.map((outcome) => {
    const baseWeight = outcome.weight;
    const delta = situationSpecificDeltas[outcome.id] || 0;
    const effectiveWeight = Math.max(0, baseWeight + delta);
    return { ...outcome, effectiveWeight };
  });

  // Filter out outcomes with zero effective weight
  const eligibleOutcomes = outcomesWithEffectiveWeights.filter((o) => o.effectiveWeight > 0);

  if (eligibleOutcomes.length > 0) {
    const selected = selectOutcomeByWeightedRandom(
      eligibleOutcomes.map((o) => ({
        originalOutcome: o,
        weight: o.effectiveWeight,
      })),
    );
    if (selected) {
      return selected.originalOutcome.id;
    }
  }

  // Fallback: pick the one with the highest effective weight
  if (outcomesWithEffectiveWeights.length > 0) {
    const fallback = outcomesWithEffectiveWeights.sort(
      (a, b) => b.effectiveWeight - a.effectiveWeight,
    )[0];
    console.warn(
      `No outcomes with positive effective weight. Fallback to highest: ${fallback?.title}`,
    );
    return fallback?.id ?? null;
  }

  return null;
}
