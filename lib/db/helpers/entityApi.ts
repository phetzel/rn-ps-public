// entityApi.ts
import { Q } from "@nozbe/watermelondb";
import {
  cabinetCollection,
  publicationCollection,
  journalistCollection,
  subgroupCollection,
} from "./collections";
import {
  CabinetMember,
  Publication,
  SubgroupApproval,
  Journalist,
} from "~/lib/db/models";
import { fetchGame } from "./gameApi";

// Cabinet APIs
export async function fetchCabinetMembersForGame(
  gameId: string
): Promise<CabinetMember[]> {
  return await cabinetCollection.query(Q.where("game_id", gameId)).fetch();
}

// Publication APIs
export async function fetchPublicationsForGame(
  gameId: string
): Promise<Publication[]> {
  return await publicationCollection.query(Q.where("game_id", gameId)).fetch();
}

// Journalist APIs
export async function fetchActiveJournalistsForGame(
  gameId: string
): Promise<Journalist[]> {
  return await journalistCollection
    .query(Q.where("game_id", gameId), Q.where("is_active", true))
    .fetch();
}

export async function fetchJournalist(
  journalistId: string
): Promise<Journalist | null> {
  return await journalistCollection.find(journalistId);
}

// Subgroup APIs
export async function fetchSubgroupsForGame(
  gameId: string
): Promise<SubgroupApproval[]> {
  return await subgroupCollection.query(Q.where("game_id", gameId)).fetch();
}

// Batch fetch all game entities in a single function
export async function fetchGameEntities(gameId: string) {
  const [game, cabinetMembers, publications, journalists, subgroups] =
    await Promise.all([
      fetchGame(gameId),
      fetchCabinetMembersForGame(gameId),
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
