import { Q } from "@nozbe/watermelondb";
import { database } from "~/lib/db";

import { levelsCollection } from "./collections";
import { Game, Level } from "~/lib/db/models";
import { cabinetSnapshotSchema } from "~/lib/schemas";
import { fetchActiveCabinetMembers, fetchGameEntities } from "./entityApi";
import {
  CabinetSnapshot,
  LevelStatus,
  RelationshipSnapshot,
  CabinetStaticId,
  JournalistStaticId,
  SubgroupStaticId,
} from "~/types";

// Level CRUD operations
export async function createLevel(game: Game): Promise<Level> {
  return await database.write(async () => {
    // 1. Fetch ACTIVE cabinet members for the game
    const activeCabinetMembers = await fetchActiveCabinetMembers(game.id);

    // 2. Create the cabinet snapshot object from active members
    const cabinetSnapshot: CabinetSnapshot = {} as CabinetSnapshot; // Assert type
    for (const member of activeCabinetMembers) {
      cabinetSnapshot[member.staticId] = member.id;
    }

    // 3. Validate the constructed snapshot using the Zod schema
    const validationResult = cabinetSnapshotSchema.safeParse(cabinetSnapshot);

    if (!validationResult.success) {
      // Validation failed - the snapshot is not complete as required by the schema.
      console.error(
        `Failed to create valid Cabinet Snapshot for game ${game.id} during level creation.`,
        validationResult.error.format() // Log detailed Zod errors
      );
      throw new Error(
        "Data integrity issue: Constructed cabinet snapshot does not meet schema requirements (likely incomplete)."
      );
    }

    // 4. Stringify the snapshot
    const cabinetSnapshotJson = JSON.stringify(cabinetSnapshot);

    // 5. Create the level
    const newLevel = await levelsCollection.create((level) => {
      level.game.set(game);
      level.status = LevelStatus.Briefing;
      level.month = game.currentMonth;
      level.year = game.currentYear;
      level.cabinetSnapshot = cabinetSnapshotJson;
    });

    return newLevel;
  });
}

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
    .query(
      Q.where("game_id", gameId),
      Q.sortBy("created_at", Q.desc),
      Q.take(1)
    )
    .fetch()
    .then((results) => results[0]);
}

export async function updateLevelStatus(levelId: string, status: LevelStatus) {
  return await database.write(async () => {
    const level = await levelsCollection.find(levelId);
    if (!level) {
      throw new Error(`Level with ID ${levelId} not found`);
    }

    await level.update((record) => {
      record.status = status;
    });
  });
}

// Take a snapshot of the game entities
export async function takeSnapshot(
  gameId: string
): Promise<RelationshipSnapshot> {
  // Fetch all game entities
  const { game, cabinetMembers, journalists, subgroups } =
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
