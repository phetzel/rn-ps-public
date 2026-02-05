import { Q } from '@nozbe/watermelondb';

// Models
import {
  cabinetCollection,
  gamesCollection,
  publicationCollection,
  journalistCollection,
  subgroupCollection,
  levelsCollection,
  pressExchangeCollection,
  situationCollection,
} from '~/lib/db/helpers/collections';

import type {
  CabinetMember,
  Publication,
  SubgroupApproval,
  Journalist,
  Game,
  Level,
  PressExchange,
  Situation,
} from '~/lib/db/models';
// Helpers

// Game APIs
export async function fetchGame(gameId: string): Promise<Game | null> {
  return await gamesCollection.find(gameId);
}

// Level APIs
export async function fetchLevel(levelId: string): Promise<Level | null> {
  try {
    return await levelsCollection.find(levelId);
  } catch (error) {
    console.error(`Error fetching level with ID ${levelId}:`, error);
    return null;
  }
}

export async function fetchLastLevel(gameId: string): Promise<Level | null> {
  return await levelsCollection
    .query(Q.where('game_id', gameId), Q.sortBy('created_at', Q.desc), Q.take(1))
    .fetch()
    .then((results) => results[0]);
}

// Situation APIs
export async function fetchSituationsByLevelId(levelId: string): Promise<Situation[]> {
  return await situationCollection.query(Q.where('level_id', levelId)).fetch();
}

export async function fetchSituationById(situationId: string): Promise<Situation> {
  return await situationCollection.find(situationId);
}

// Cabinet APIs
export async function fetchActiveCabinetMembers(gameId: string): Promise<CabinetMember[]> {
  return await cabinetCollection
    .query(Q.where('game_id', gameId), Q.where('is_active', true))
    .fetch();
}

export async function fetchCabinetMembersByLevelId(levelId: string): Promise<CabinetMember[]> {
  try {
    // Get the level to access its cabinet snapshot
    const level = await fetchLevel(levelId);
    if (!level) {
      throw new Error(`Level with ID ${levelId} not found`);
    }

    // Parse the cabinet snapshot to get member IDs
    const snapshot = level.parseCabinetSnapshot;
    if (!snapshot) {
      console.warn(`No valid cabinet snapshot found for level ${levelId}`);
      return [];
    }

    const memberIds = Object.values(snapshot);
    if (memberIds.length === 0) {
      return [];
    }

    // Fetch the cabinet members by their IDs
    return await cabinetCollection
      .query(Q.where('id', Q.oneOf(memberIds)), Q.sortBy('approval_rating', Q.desc))
      .fetch();
  } catch (error) {
    console.error(`Error fetching cabinet members for level ${levelId}:`, error);
    return [];
  }
}

// Publication APIs
export async function fetchPublicationsForGame(gameId: string): Promise<Publication[]> {
  return await publicationCollection.query(Q.where('game_id', gameId)).fetch();
}

// Journalist APIs
export async function fetchActiveJournalistsForGame(gameId: string): Promise<Journalist[]> {
  return await journalistCollection.query(Q.where('game_id', gameId)).fetch();
}

export async function fetchJournalist(journalistId: string): Promise<Journalist | null> {
  return await journalistCollection.find(journalistId);
}

// Subgroup APIs
export async function fetchSubgroupsForGame(gameId: string): Promise<SubgroupApproval[]> {
  return await subgroupCollection.query(Q.where('game_id', gameId)).fetch();
}

// Press Exchange APIs
export async function fetchPressExchangesForLevel(levelId: string): Promise<PressExchange[]> {
  return await pressExchangeCollection.query(Q.where('level_id', levelId)).fetch();
}

export async function fetchPressExchangeById(exchangeId: string): Promise<PressExchange | null> {
  try {
    return await pressExchangeCollection.find(exchangeId);
  } catch (error) {
    console.error(`Error fetching exchange with ID ${exchangeId}:`, error);
    return null;
  }
}

export async function fetchPressExchangeForJournalistLevel(
  levelId: string,
  journalistId: string,
): Promise<PressExchange | null> {
  const exchanges = await pressExchangeCollection
    .query(Q.where('level_id', levelId), Q.where('journalist_id', journalistId), Q.take(1))
    .fetch();

  return exchanges.length > 0 ? exchanges[0] : null;
}

export async function fetchExistingJournalistIdsForLevel(levelId: string): Promise<string[]> {
  const exchanges = await pressExchangeCollection.query(Q.where('level_id', levelId)).fetch();

  return exchanges.map((exchange) => exchange.journalist_id);
}

// Batch fetch all game entities in a single function
export async function fetchGameEntities(gameId: string) {
  const [game, cabinetMembers, publications, journalists, subgroups] = await Promise.all([
    fetchGame(gameId),
    fetchActiveCabinetMembers(gameId),
    fetchPublicationsForGame(gameId),
    fetchActiveJournalistsForGame(gameId),
    fetchSubgroupsForGame(gameId),
  ]);

  return {
    game,
    cabinetMembers,
    publications,
    journalists,
    subgroups,
  };
}
