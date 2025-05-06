import { Q } from "@nozbe/watermelondb";

import { database } from "~/lib/db";
import { situationCollection, pressExchangeCollection } from "./collections";
import { Situation, Game, Level } from "~/lib/db/models";
import { fetchActiveJournalistsForGame } from "./entityApi";
import { situationsData } from "~/lib/data/situations/v1";
import { SituationData } from "~/types";

export async function fetchSituationsByLevelId(
  levelId: string
): Promise<Situation[]> {
  return await situationCollection.query(Q.where("level_id", levelId)).fetch();
}

export async function fetchSituationById(
  situationId: string
): Promise<Situation> {
  return await situationCollection.find(situationId);
}

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

  // Create a map of static journalist IDs to actual models
  const journalistMap = journalists.reduce((map, journalist) => {
    map[journalist.staticId] = journalist;
    return map;
  }, {} as Record<string, (typeof journalists)[0]>);

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
        // Get the journalist model for this exchange
        const journalist = journalistMap[exchange.journalist];
        if (!journalist) {
          console.warn(
            `Journalist ${exchange.journalist} not found, skipping exchange`
          );
          continue;
        }

        // Create initial progress
        const initialProgress = {
          history: [],
          currentQuestionId: exchange.content.rootQuestionId,
        };

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

function filterSituationsByRequirements(
  situations: SituationData[],
  game: Game,
  currentLevel: number
): SituationData[] {
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
      trigger.requirements?.president?.party &&
      trigger.requirements.president.party !== game.presParty
    ) {
      return false;
    }

    // President approval requirement
    if (trigger.requirements?.president) {
      const { minApproval, maxApproval } = trigger.requirements.president;
      if (minApproval !== undefined && game.presApprovalRating < minApproval)
        return false;
      if (maxApproval !== undefined && game.presApprovalRating > maxApproval)
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

  // 2. Calculate how many regular situations we need
  const neededRegularSituations = Math.max(
    0,
    count - followUpSituations.length
  );

  // 3. If we have enough follow-ups, return them
  if (neededRegularSituations <= 0) {
    return followUpSituations.slice(0, count);
  }

  // 4. Get used situation keys
  const usedKeys = game.usedSituationKeys;

  // 5. Filter the available situations
  let availableSituations = situationsData.filter(
    (situation) =>
      // Must have a trigger
      situation.trigger &&
      // Not already used
      !usedKeys.includes(situation.trigger.staticKey) &&
      // Not a follow-up situation (those are handled separately)
      !situation.trigger.isFollowUp
  );

  // 6. Filter by game requirements
  availableSituations = filterSituationsByRequirements(
    availableSituations,
    game,
    currentLevel
  );

  // 7. Handle the case where we don't have enough situations
  if (availableSituations.length < neededRegularSituations) {
    console.warn(
      `Not enough available situations (needed ${neededRegularSituations}, found ${availableSituations.length}). Using random ones.`
    );

    // Fall back to random situations as a last resort
    const randomSituations = situationsData
      .filter((s) => !s.trigger?.isFollowUp)
      .sort(() => 0.5 - Math.random())
      .slice(0, neededRegularSituations - availableSituations.length);

    availableSituations = [...availableSituations, ...randomSituations];
  }

  // 8. Select random situations from the filtered list
  const selectedRegularSituations = [...availableSituations]
    .sort(() => 0.5 - Math.random())
    .slice(0, neededRegularSituations);

  // 9. Combine follow-ups and regular situations
  return [...followUpSituations, ...selectedRegularSituations];
}
