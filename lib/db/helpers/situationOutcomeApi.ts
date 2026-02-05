import { fetchSituationsByLevelId } from '~/lib/db/helpers/fetchApi';
import { calculatePressConferenceRawEffects } from '~/lib/db/helpers/pressConferenceApi';
import { chooseOutcomeForSituation, computeOutcomeWeights } from '~/lib/game/outcomes';

import type {
  SituationOutcomeWeightDeltas,
  SituationContent,
  SituationOutcomeWeight,
} from '~/types';

export interface SituationOutcomeSource {
  id: string;
  level_id: string;
  parseContent: SituationContent | null;
  outcomeId: string | null;
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

    // Delegate to pure game engine function
    const chosenOutcomeId = chooseOutcomeForSituation(
      situationContent.outcomes,
      situationSpecificDeltas,
    );

    if (chosenOutcomeId) {
      await situation.setOutcome(chosenOutcomeId);
    } else {
      console.warn(`No outcome could be chosen for situation ${situation.id}.`);
    }
  }
}

export async function calculateSituationOutcomeWeights(
  situation: SituationOutcomeSource,
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

    // Delegate to pure game engine function
    return computeOutcomeWeights(content.outcomes, outcomeDeltas);
  } catch (error) {
    console.error('Error calculating outcome weights:', error);
    return [];
  }
}
