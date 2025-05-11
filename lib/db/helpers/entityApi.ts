// entityApi.ts
import { Q } from "@nozbe/watermelondb";

// Models
import {
  CabinetMember,
  Publication,
  SubgroupApproval,
  Journalist,
} from "~/lib/db/models";
// Helpers
import {
  cabinetCollection,
  publicationCollection,
  journalistCollection,
  subgroupCollection,
} from "./collections";
import { calculatePressConferenceRawEffects } from "./pressConferenceApi";
import { fetchLevel } from "./levelApi";
import { fetchGame } from "./gameApi";
import { fetchSituationsByLevelId } from "./situationApi";
// Data + Types
import { staticPublications } from "~/lib/data/staticMedia";
import { EntityWithDelta } from "~/types";

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

// Enhance relationship deltas with entity data
export async function getEnhancedRelationshipDeltas(
  levelId: string
): Promise<EntityWithDelta[]> {
  try {
    // Get the raw deltas
    const { psRelationshipDeltas } = await calculatePressConferenceRawEffects(
      levelId
    );

    // Get the current game for current values
    const level = await fetchLevel(levelId);
    if (!level) {
      throw new Error(`Level with ID ${levelId} not found`);
    }

    const game = await level.game.fetch();
    const { cabinetMembers, journalists } = await fetchGameEntities(game.id);

    // Create maps for quick lookup
    const cabinetMemberMap: Map<string, CabinetMember> = new Map();
    cabinetMembers.forEach((member) => {
      cabinetMemberMap.set(member.staticId, member);
    });

    const journalistMap: Map<string, Journalist> = new Map();
    journalists.forEach((journalist) => {
      journalistMap.set(journalist.staticId, journalist);
    });

    const result: EntityWithDelta[] = [];

    // Process president delta
    if (psRelationshipDeltas.president) {
      result.push({
        id: "president",
        name: game.presName || "President",
        role: "president",
        title: "President",
        currentValue: game.presPsRelationship,
        delta: psRelationshipDeltas.president,
      });
    }

    // Process cabinet member deltas
    if (psRelationshipDeltas.cabinetMembers) {
      Object.entries(psRelationshipDeltas.cabinetMembers).forEach(
        ([cabinetId, delta]) => {
          // Find the active cabinet member
          const cabinetMember = cabinetMemberMap.get(cabinetId);

          // Only include if the cabinet member is still active
          if (cabinetMember) {
            const staticCabinetInfo = cabinetMember.staticData;

            result.push({
              id: cabinetId,
              name: cabinetMember.name || cabinetId,
              role: "cabinet",
              title: staticCabinetInfo?.cabinetName || "Cabinet Member",
              currentValue: cabinetMember.psRelationship || 0,
              delta,
            });
          }
        }
      );
    }

    // Process journalist deltas
    if (psRelationshipDeltas.journalists) {
      Object.entries(psRelationshipDeltas.journalists).forEach(
        ([journalistId, delta]) => {
          // Find the active journalist
          const journalist = journalistMap.get(journalistId);

          // Only include if the journalist is still active
          if (journalist) {
            const staticJournalistInfo = journalist.staticData;

            // Get publication info for the journalist
            let publicationName = "";
            if (staticJournalistInfo) {
              const publication =
                staticPublications[staticJournalistInfo.publicationStaticId];
              publicationName = publication?.name || "";
            }

            result.push({
              id: journalistId,
              name: staticJournalistInfo?.name || journalistId,
              role: "journalist",
              title: publicationName,
              currentValue: journalist.psRelationship || 0,
              delta,
            });
          }
        }
      );
    }

    return result;
  } catch (error) {
    console.error("Failed to get enhanced relationship deltas:", error);
    throw error;
  }
}

// Enhance situation outcome deltas with entity data
export async function getEnhancedSituationOutcomeDeltas(
  levelId: string
): Promise<EntityWithDelta[]> {
  try {
    // Get all situations for the level
    const situations = await fetchSituationsByLevelId(levelId);

    // Get the level and game info
    const level = await fetchLevel(levelId);
    if (!level) {
      throw new Error(`Level with ID ${levelId} not found`);
    }

    const game = await level.game.fetch();
    const { cabinetMembers, subgroups } = await fetchGameEntities(game.id);

    // Create maps for quick lookups
    const cabinetMemberMap: Map<string, CabinetMember> = new Map();
    cabinetMembers.forEach((member) => {
      cabinetMemberMap.set(member.staticId, member);
    });

    const subgroupMap: Map<string, SubgroupApproval> = new Map();
    subgroups.forEach((subgroup) => {
      subgroupMap.set(subgroup.staticId, subgroup);
    });

    // Initialize accumulators for deltas
    let presidentDelta = 0;
    const cabinetDeltas: Record<string, number> = {};
    const subgroupDeltas: Record<string, number> = {};

    // Process each situation's outcome consequences
    for (const situation of situations) {
      const outcome = situation.outcome;
      if (
        !outcome ||
        !outcome.consequences ||
        !outcome.consequences.approvalChanges
      ) {
        continue;
      }

      const { approvalChanges } = outcome.consequences;

      // Add president delta if it exists
      if (approvalChanges.president) {
        presidentDelta += approvalChanges.president;
      }

      // Add cabinet member deltas
      if (approvalChanges.cabinet) {
        Object.entries(approvalChanges.cabinet).forEach(
          ([cabinetId, delta]) => {
            cabinetDeltas[cabinetId] = (cabinetDeltas[cabinetId] || 0) + delta;
          }
        );
      }

      // Add subgroup deltas
      if (approvalChanges.subgroups) {
        Object.entries(approvalChanges.subgroups).forEach(
          ([subgroupId, delta]) => {
            subgroupDeltas[subgroupId] =
              (subgroupDeltas[subgroupId] || 0) + delta;
          }
        );
      }
    }

    const result: EntityWithDelta[] = [];

    // Add president to results if there's a delta
    if (presidentDelta !== 0) {
      result.push({
        id: "president",
        name: game.presName || "President",
        role: "president",
        title: "President",
        currentValue: game.presApprovalRating,
        delta: presidentDelta,
      });
    }

    // Add cabinet members to results
    Object.entries(cabinetDeltas).forEach(([cabinetId, delta]) => {
      const cabinetMember = cabinetMemberMap.get(cabinetId);
      if (cabinetMember) {
        const staticCabinetInfo = cabinetMember.staticData;
        result.push({
          id: cabinetId,
          name: cabinetMember.name || cabinetId,
          role: "cabinet",
          title: staticCabinetInfo?.cabinetName || "Cabinet Member",
          currentValue: cabinetMember.approvalRating || 0,
          delta,
        });
      }
    });

    // Add subgroups to results
    Object.entries(subgroupDeltas).forEach(([subgroupId, delta]) => {
      const subgroup = subgroupMap.get(subgroupId);
      if (subgroup) {
        result.push({
          id: subgroupId,
          name: subgroup.staticData?.name || subgroupId,
          role: "subgroup",
          title: "Voter Group",
          currentValue: subgroup.approvalRating || 0,
          delta,
        });
      }
    });

    return result;
  } catch (error) {
    console.error("Failed to get enhanced situation outcome deltas:", error);
    throw error;
  }
}
