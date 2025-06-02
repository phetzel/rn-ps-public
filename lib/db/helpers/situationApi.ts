import { Q } from "@nozbe/watermelondb";

import { database } from "~/lib/db";
import {
  situationCollection,
  pressExchangeCollection,
} from "~/lib/db/helpers/collections";
import {
  fetchSituationsByLevelId,
  fetchActiveJournalistsForGame,
  fetchPressExchangeForJournalistLevel,
} from "~/lib/db/helpers/fetchApi";
import { Situation, Game, Level } from "~/lib/db/models";
import { staticJournalists } from "~/lib/data/staticMedia";
import { situationsData } from "~/lib/data/situations/v1";
import {
  SituationData,
  SituationOutcomeWeightDeltas,
  SituationContent,
  SituationOutcome,
  SituationType,
  PublicationStaticId,
  JournalistStaticId,
  SituationOutcomeWeight,
} from "~/types";

export async function createSituationsForLevel(
  game: Game,
  level: Level,
  newSituations: SituationData[]
): Promise<Situation[]> {
  // First get all journalists for the game
  const journalists = await fetchActiveJournalistsForGame(game.id);
  if (!journalists || journalists.length === 0) {
    throw new Error("No active journalists found for this game");
  }

  // Create maps for easier lookup
  const journalistsByPublication: Partial<
    Record<PublicationStaticId, typeof journalists>
  > = {};

  // Group journalists by publication
  journalists.forEach((journalist) => {
    const staticJournalist =
      staticJournalists[journalist.staticId as JournalistStaticId];
    if (staticJournalist) {
      const publicationId = staticJournalist.publicationStaticId;
      if (!journalistsByPublication[publicationId]) {
        journalistsByPublication[publicationId] = [];
      }
      journalistsByPublication[publicationId].push(journalist);
    }
  });

  // Track assigned journalists per level
  const assignedJournalists = new Set<string>();

  return await database.write(async () => {
    const createdSituations = await Promise.all(
      newSituations.map((situationData) =>
        situationCollection.create((situation) => {
          situation.game.set(game);
          situation.level.set(level);
          situation.type = situationData.type;
          situation.title = situationData.title;
          situation.description = situationData.description;
          situation.content = JSON.stringify(situationData.content);
        })
      )
    );

    // Now create exchanges for each situation in the same transaction
    for (let i = 0; i < createdSituations.length; i++) {
      const situation = createdSituations[i];
      const situationData = newSituations[i];

      // Skip if no exchanges defined
      if (!situationData.exchanges) continue;

      // Create each exchange for this situation
      for (const exchange of situationData.exchanges) {
        // Get publication for this exchange
        const publicationId = exchange.publication;
        const availableJournalists = journalistsByPublication[publicationId];

        if (!availableJournalists || availableJournalists.length === 0) {
          console.warn(
            `No available journalists for publication ${publicationId}, skipping exchange`
          );
          continue;
        }

        // Filter out already assigned journalists
        const unassignedJournalists = availableJournalists.filter(
          (j) => !assignedJournalists.has(j.id)
        );

        // If no unassigned journalists, try to use any journalist from this publication as fallback
        const journalist =
          unassignedJournalists.length > 0
            ? unassignedJournalists[0]
            : availableJournalists[0];

        // Mark this journalist as assigned
        assignedJournalists.add(journalist.id);

        // Create initial progress
        const initialProgress = {
          history: [],
          currentQuestionId: exchange.content.rootQuestionId,
        };

        // Check if journalist already has an exchange for this level
        const existingExchange = await fetchPressExchangeForJournalistLevel(
          level.id,
          journalist.id
        );

        if (existingExchange) {
          throw new Error(
            `Journalist ${journalist.id} already has a press exchange for level ${level.id}`
          );
        }

        // Create the exchange
        await pressExchangeCollection.create((e) => {
          e.level.set(level);
          e.situation.set(situation);
          e.journalist.set(journalist);
          e.content = JSON.stringify(exchange.content);
          e.progress = JSON.stringify(initialProgress);
        });
      }
    }

    return createdSituations;
  });
}

// Helper to get follow-up situations from the previous level
async function getFollowUpSituations(game: Game): Promise<SituationData[]> {
  // Get the most recent level
  const previousLevels = await game.levels
    .extend(Q.sortBy("created_at", Q.desc), Q.take(1))
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
          (s) => s.trigger && s.trigger.staticKey === followUpId
        );

        if (followUpData) {
          followUps.push(followUpData);
        }
      }
    }
  }

  return followUps;
}

async function filterSituationsByRequirements(
  situations: SituationData[],
  game: Game,
  currentLevel: number
): Promise<SituationData[]> {
  const currentPresApproval = await game.getPresApprovalRating();

  return situations.filter((situation) => {
    const trigger = situation.trigger;
    if (!trigger) return false;

    // Year requirements
    if (trigger.requirements?.year) {
      const { min, max } = trigger.requirements.year;
      if (min !== undefined && game.currentYear < min) return false;
      if (max !== undefined && game.currentYear > max) return false;
    }

    // Month requirements
    if (trigger.requirements?.month) {
      const { min, max } = trigger.requirements.month;
      if (min !== undefined && game.currentMonth < min) return false;
      if (max !== undefined && game.currentMonth > max) return false;
    }

    // President party requirement
    if (
      trigger.requirements?.president?.leaning &&
      trigger.requirements.president.leaning !== game.presLeaning
    ) {
      return false;
    }

    // President approval requirement
    if (trigger.requirements?.president) {
      const { minApproval, maxApproval } = trigger.requirements.president;
      if (minApproval !== undefined && currentPresApproval < minApproval)
        return false;
      if (maxApproval !== undefined && currentPresApproval > maxApproval)
        return false;
    }

    // More complex filters for cabinet/subgroup approvals could be added here

    return true;
  });
}

// Main function to select situations for a new level
export async function selectSituationsForLevel(
  game: Game,
  count: number = 2
): Promise<SituationData[]> {
  const currentLevel = (game.currentYear - 1) * 12 + game.currentMonth;

  // 1. Get any follow-up situations from previous level outcomes
  const followUpSituations = await getFollowUpSituations(game);

  // 2. Filter follow-up situations to ensure only one per type
  const seenTypes = new Set<SituationType>();
  followUpSituations.forEach((situation) => {
    seenTypes.add(situation.type);
  });

  // 3. Calculate how many regular situations we need
  const neededRegularSituations = Math.max(
    0,
    count - followUpSituations.length
  );

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
      !seenTypes.has(situation.type)
  );

  // 7. Filter by game requirements
  availableSituations = await filterSituationsByRequirements(
    availableSituations,
    game,
    currentLevel
  );

  // 8. Select situations one by one, updating the filter each time
  const selectedRegularSituations: SituationData[] = [];

  while (
    selectedRegularSituations.length < neededRegularSituations &&
    availableSituations.length > 0
  ) {
    // Select a random situation
    const randomIndex = Math.floor(Math.random() * availableSituations.length);
    const selectedSituation = availableSituations[randomIndex];

    // Add it to our result
    selectedRegularSituations.push(selectedSituation);

    // Add this type to seen types
    seenTypes.add(selectedSituation.type);

    // Remove this situation and any others of the same type
    availableSituations = availableSituations.filter(
      (s) => s !== selectedSituation && s.type !== selectedSituation.type
    );
  }

  // 9. Handle the case where we still don't have enough situations after trying to select one of each type
  if (selectedRegularSituations.length < neededRegularSituations) {
    console.warn(
      `Not enough available situations with unique types (needed ${neededRegularSituations}, found ${selectedRegularSituations.length}). Using random ones.`
    );

    // Fall back to random situations that don't match already used keys
    const remainingNeeded =
      neededRegularSituations - selectedRegularSituations.length;
    const randomSituations = situationsData
      .filter(
        (s) =>
          !s.trigger?.isFollowUp &&
          !usedKeys.includes(s.trigger?.staticKey || "")
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, remainingNeeded);

    selectedRegularSituations.push(...randomSituations);
  }

  // 10. Combine follow-ups and regular situations
  return [...followUpSituations, ...selectedRegularSituations];
}

// Helper to select an outcome from a situation by weighted random selection
function selectOutcomeByWeightedRandom<T extends { weight: number }>(
  items: T[]
): T | null {
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
  outcomeWeightDeltas: SituationOutcomeWeightDeltas
): Promise<void> {
  const situationsToResolve = (await fetchSituationsByLevelId(levelId)).filter(
    (s) => s.outcomeId === null
  );

  for (const situation of situationsToResolve) {
    const situationContent = situation.parseContent as SituationContent | null;

    if (
      !situationContent ||
      !situationContent.outcomes ||
      situationContent.outcomes.length === 0
    ) {
      console.warn(
        `Situation ${situation.id} has no outcomes defined or content is unparsable. Skipping.`
      );
      continue;
    }

    const situationSpecificDeltas = outcomeWeightDeltas[situation.id] || {};

    // Prepare outcomes with their effective weights for weighted random selection
    const outcomesWithEffectiveWeights = situationContent.outcomes.map(
      (outcome) => {
        const baseWeight = outcome.weight; // From SituationOutcome.weight
        const delta = situationSpecificDeltas[outcome.id] || 0;
        // Ensure effective weight is not negative for weighted random selection logic that expects positive weights
        // Or adjust selectOutcomeByWeightedRandom to handle it. Current one expects positive.
        const effectiveWeight = Math.max(0, baseWeight + delta); // Clamping at 0 for this selection method
        return { ...outcome, effectiveWeight: effectiveWeight }; // Pass the original outcome along
      }
    );

    // Filter out outcomes with zero or negative effective weight before selection,
    // as our current selectOutcomeByWeightedRandom expects positive weights.
    const eligibleOutcomes = outcomesWithEffectiveWeights.filter(
      (o) => o.effectiveWeight > 0
    );

    let chosenOutcomeData: SituationOutcome | null = null;

    if (eligibleOutcomes.length > 0) {
      // Use a helper for weighted random selection based on 'effectiveWeight'
      const selected = selectOutcomeByWeightedRandom(
        eligibleOutcomes.map((o) => ({
          originalOutcome: o,
          weight: o.effectiveWeight,
        }))
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
          (a, b) => b.effectiveWeight - a.effectiveWeight
        )[0];
        console.log(
          `Situation ${situation.id}: No outcomes with positive effective weight. Fallback to highest effective weight: ${chosenOutcomeData?.title}`
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
  situation: Situation
): Promise<SituationOutcomeWeight[]> {
  const content = situation.parseContent;
  if (!content || !content.outcomes) {
    return [];
  }

  // Import calculatePressConferenceRawEffects directly
  const {
    calculatePressConferenceRawEffects,
  } = require("./pressConferenceApi");

  try {
    // Get outcome weight deltas
    const { situationOutcomeWeightDeltas } =
      await calculatePressConferenceRawEffects(situation.level_id);

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
    console.error("Error calculating outcome weights:", error);
    return [];
  }
}
