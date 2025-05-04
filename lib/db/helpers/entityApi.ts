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
import {
  RelationshipSnapshot,
  CabinetStaticId,
  JournalistStaticId,
  SubgroupStaticId,
} from "~/types";

// Cabinet APIs
export async function fetchActiveCabinetMembers(
  gameId: string
): Promise<CabinetMember[]> {
  return await cabinetCollection
    .query(Q.where("game_id", gameId), Q.where("is_active", true))
    .fetch();
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
  return await journalistCollection.query(Q.where("game_id", gameId)).fetch();
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

// Take a snapshot of the game entities
export async function takeSnapshot(
  gameId: string
): Promise<RelationshipSnapshot> {
  // Fetch all game entities
  const { game, cabinetMembers, publications, journalists, subgroups } =
    await fetchGameEntities(gameId);

  if (!game) {
    throw new Error("No game found with ID: " + gameId);
  }

  // Create the snapshot
  return {
    president: {
      approvalRating: game.presApprovalRating,
      psRelationship: game.presPsRelationship,
    },
    cabinetMembers: Object.fromEntries(
      cabinetMembers.map((member) => [
        member.staticId as CabinetStaticId,
        {
          approvalRating: member.approvalRating,
          psRelationship: member.psRelationship,
        },
      ])
    ) as Record<
      CabinetStaticId,
      { approvalRating: number; psRelationship: number }
    >,
    journalists: Object.fromEntries(
      journalists.map((journalist) => [
        journalist.staticId as JournalistStaticId,
        {
          psRelationship: journalist.psRelationship,
        },
      ])
    ) as Record<JournalistStaticId, { psRelationship: number }>,
    subgroups: Object.fromEntries(
      subgroups.map((subgroup) => [
        subgroup.staticId as SubgroupStaticId,
        { approvalRating: subgroup.approvalRating },
      ])
    ) as Record<SubgroupStaticId, { approvalRating: number }>,
  };
}
