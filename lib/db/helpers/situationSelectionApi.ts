import { Q } from '@nozbe/watermelondb';

import { situationsData } from '~/lib/data/situations';
import { Game } from '~/lib/db/models';
import {
  filterSituationsByRequirements,
  GameRequirements,
  selectSituationsFromPool,
} from '~/lib/game/situations';
import { SituationData, SituationType } from '~/types';

// Helper to get follow-up situations from the previous level
async function getFollowUpSituations(game: Game): Promise<SituationData[]> {
  // Get the most recent level
  const previousLevels = await game.levels
    .extend(Q.sortBy('created_at', Q.desc), Q.take(1))
    .fetch();

  if (previousLevels.length === 0) {
    return [];
  }

  const previousLevel = previousLevels[0];

  // Get situations from previous level
  const previousSituations = await previousLevel.situations.fetch();

  // Check which situations have follow-ups
  const followUps: SituationData[] = [];

  for (const situation of previousSituations) {
    if (situation.outcomeId && situation.hasFollowUp) {
      const followUpId = situation.followUpId;
      if (followUpId) {
        // Find the situation data with this static key
        const followUpData = situationsData.find(
          (s) => s.trigger && s.trigger.staticKey === followUpId,
        );

        if (followUpData) {
          followUps.push(followUpData);
        }
      }
    }
  }

  return followUps;
}

// Main function to select situations for a new level
export async function selectSituationsForLevel(
  game: Game,
  count: number = 2,
): Promise<SituationData[]> {
  // 1. Get any follow-up situations from previous level outcomes
  const followUpSituations = await getFollowUpSituations(game);

  // 2. Filter follow-up situations to ensure only one per type
  const seenTypes = new Set<SituationType>();
  followUpSituations.forEach((situation) => {
    seenTypes.add(situation.type);
  });

  // 3. Calculate how many regular situations we need
  const neededRegularSituations = Math.max(0, count - followUpSituations.length);

  // 4. If we have enough follow-ups, return them
  if (neededRegularSituations <= 0) {
    return followUpSituations.slice(0, count);
  }

  // 5. Get used situation keys
  const usedKeys = game.usedSituationKeys;

  // 6. Filter the available situations
  let availableSituations = situationsData.filter(
    (situation) =>
      // Must have a trigger
      situation.trigger &&
      // Not already used
      !usedKeys.includes(situation.trigger.staticKey) &&
      // Not a follow-up situation (those are handled separately)
      !situation.trigger.isFollowUp &&
      // Must not be of a type we've already selected
      !seenTypes.has(situation.type),
  );

  // 7. Build requirements and filter by game state using pure function
  const currentPresApproval = await game.getPresApprovalRating();
  const requirements: GameRequirements = {
    currentYear: game.currentYear,
    currentMonth: game.currentMonth,
    presLeaning: game.presLeaning,
    presApprovalRating: currentPresApproval,
  };
  availableSituations = filterSituationsByRequirements(availableSituations, requirements);

  // 8. Select situations using pure function (ensures type diversity)
  const selectedRegularSituations = selectSituationsFromPool(
    availableSituations,
    neededRegularSituations,
    seenTypes,
  );

  // 9. Handle the case where we still don't have enough situations after trying to select one of each type
  if (selectedRegularSituations.length < neededRegularSituations) {
    console.warn(
      `Not enough available situations with unique types (needed ${neededRegularSituations}, found ${selectedRegularSituations.length}). Using random ones.`,
    );

    // Fall back to random situations that don't match already used keys
    const remainingNeeded = neededRegularSituations - selectedRegularSituations.length;
    const randomSituations = situationsData
      .filter((s) => !s.trigger?.isFollowUp && !usedKeys.includes(s.trigger?.staticKey || ''))
      .sort(() => 0.5 - Math.random())
      .slice(0, remainingNeeded);

    selectedRegularSituations.push(...randomSituations);
  }

  // 10. Combine follow-ups and regular situations
  return [...followUpSituations, ...selectedRegularSituations];
}
