import { fetchSituationsByLevelId } from '~/lib/db/helpers/fetchApi';
import { calculatePressConferenceRawEffects } from '~/lib/db/helpers/pressConferenceApi';
import { Situation } from '~/lib/db/models';
import {
  SituationOutcomeWeightDeltas,
  SituationContent,
  SituationOutcome,
  SituationOutcomeWeight,
} from '~/types';

// Helper to select an outcome from a situation by weighted random selection
function selectOutcomeByWeightedRandom<T extends { weight: number }>(items: T[]): T | null {
  if (!items || items.length === 0) {
    return null;
  }

  let totalWeight = 0;
  for (const item of items) {
    if (item.weight > 0) {
      // Only consider positive weights for selection
      totalWeight += item.weight;
    }
  }

  if (totalWeight <= 0) {
    // No items with positive weight, cannot make a weighted random selection.
    // You could fall back to highest weight or random non-weighted if desired.
    // For now, returning null indicating no valid choice by this method.
    return null;
  }

  let random = Math.random() * totalWeight;

  for (const item of items) {
    if (item.weight > 0) {
      // Again, only consider positive weights
      if (random < item.weight) {
        return item;
      }
      random -= item.weight;
    }
  }

  // Should not be reached if totalWeight > 0, but as a fallback
  return null;
}

export async function determineSituationOutcomes(
  levelId: string,
  outcomeWeightDeltas: SituationOutcomeWeightDeltas,
): Promise<void> {
  const situationsToResolve = (await fetchSituationsByLevelId(levelId)).filter(
    (s) => s.outcomeId === null,
  );

  for (const situation of situationsToResolve) {
    const situationContent = situation.parseContent as SituationContent | null;

    if (!situationContent || !situationContent.outcomes || situationContent.outcomes.length === 0) {
      console.warn(
        `Situation ${situation.id} has no outcomes defined or content is unparsable. Skipping.`,
      );
      continue;
    }

    const situationSpecificDeltas = outcomeWeightDeltas[situation.id] || {};

    // Prepare outcomes with their effective weights for weighted random selection
    const outcomesWithEffectiveWeights = situationContent.outcomes.map((outcome) => {
      const baseWeight = outcome.weight; // From SituationOutcome.weight
      const delta = situationSpecificDeltas[outcome.id] || 0;
      // Ensure effective weight is not negative for weighted random selection logic that expects positive weights
      // Or adjust selectOutcomeByWeightedRandom to handle it. Current one expects positive.
      const effectiveWeight = Math.max(0, baseWeight + delta); // Clamping at 0 for this selection method
      return { ...outcome, effectiveWeight: effectiveWeight }; // Pass the original outcome along
    });

    // Filter out outcomes with zero or negative effective weight before selection,
    // as our current selectOutcomeByWeightedRandom expects positive weights.
    const eligibleOutcomes = outcomesWithEffectiveWeights.filter((o) => o.effectiveWeight > 0);

    let chosenOutcomeData: SituationOutcome | null = null;

    if (eligibleOutcomes.length > 0) {
      // Use a helper for weighted random selection based on 'effectiveWeight'
      const selected = selectOutcomeByWeightedRandom(
        eligibleOutcomes.map((o) => ({
          originalOutcome: o,
          weight: o.effectiveWeight,
        })),
      );
      if (selected) {
        chosenOutcomeData = selected.originalOutcome;
      }
    } else {
      // Fallback: if no outcomes have positive effective weight,
      // you might pick the one with the highest (least negative) effectiveWeight,
      // or have a default "no positive outcome" result.
      // For now, let's find the one with the absolute highest effective weight if no positive ones.
      if (outcomesWithEffectiveWeights.length > 0) {
        chosenOutcomeData = outcomesWithEffectiveWeights.sort(
          (a, b) => b.effectiveWeight - a.effectiveWeight,
        )[0];
        console.warn(
          `Situation ${situation.id}: No outcomes with positive effective weight. Fallback to highest effective weight: ${chosenOutcomeData?.title}`,
        );
      }
    }

    if (chosenOutcomeData) {
      // Use the model's @writer action to set the outcome
      await situation.setOutcome(chosenOutcomeData.id);
    } else {
      console.warn(`No outcome could be chosen for situation ${situation.id}.`);
    }
  }
}

export async function calculateSituationOutcomeWeights(
  situation: Situation,
): Promise<SituationOutcomeWeight[]> {
  const content = situation.parseContent;
  if (!content || !content.outcomes) {
    return [];
  }

  try {
    // Get outcome weight deltas
    const { situationOutcomeWeightDeltas } = await calculatePressConferenceRawEffects(
      situation.level_id,
    );

    // Get deltas specific to this situation
    const outcomeDeltas = situationOutcomeWeightDeltas[situation.id] || {};

    // Calculate weights for each outcome
    return content.outcomes.map((outcome) => {
      const modifier = outcomeDeltas[outcome.id] || 0;
      const finalWeight = Math.max(0, outcome.weight + modifier);

      return {
        id: outcome.id,
        title: outcome.title,
        description: outcome.description,
        baseWeight: outcome.weight,
        modifier: modifier,
        finalWeight: finalWeight,
      };
    });
  } catch (error) {
    console.error('Error calculating outcome weights:', error);
    return [];
  }
}
