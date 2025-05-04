import { Q } from "@nozbe/watermelondb";
import { database } from "~/lib/db";

import { levelsCollection } from "./collections";
import { Game, Level } from "~/lib/db/models";
import { fetchPressExchangesForLevel } from "./pressConferenceApi";
import { cabinetSnapshotSchema } from "~/lib/schemas";
import { fetchActiveCabinetMembers } from "./entityApi";
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

// Calculate impacts from press exchanges
export async function calculatePressImpactsForLevel(
  levelId: string
): Promise<RelationshipSnapshot> {
  // 1. Fetch all press exchanges for the level
  const pressExchanges = await fetchPressExchangesForLevel(levelId);

  // 2. Initialize impacts
  const impacts: RelationshipSnapshot = {
    president: { approvalRating: 0, psRelationship: 0 },
    cabinetMembers: {},
    journalists: {},
    subgroups: {},
  };

  // 3. Process each exchange
  for (const exchange of pressExchanges) {
    const journalist = await exchange.journalist.fetch();
    const content = exchange.parseContent;
    const progress = exchange.parseProgress;

    if (!content || !progress) continue;

    const journalistStaticId = journalist.staticId as JournalistStaticId;

    // 4. Process each answered question in the exchange history
    for (const historyItem of progress.history) {
      // Handle skipped questions
      if (historyItem.skipped) {
        if (!impacts.journalists[journalistStaticId]) {
          impacts.journalists[journalistStaticId] = { psRelationship: 0 };
        }
        impacts.journalists[journalistStaticId].psRelationship -= 1;
        continue;
      }

      // Handle answered questions
      if (historyItem.questionId && historyItem.answerId) {
        const question = content.questions[historyItem.questionId];
        if (!question) continue;

        const selectedAnswer = question.answers.find(
          (a) => a.id === historyItem.answerId
        );
        if (!selectedAnswer) continue;

        // Boost journalist relationship for answering their question
        if (!impacts.journalists[journalistStaticId]) {
          impacts.journalists[journalistStaticId] = { psRelationship: 0 };
        }
        impacts.journalists[journalistStaticId].psRelationship += 1;

        // Apply impacts from the answer
        if (selectedAnswer.impacts.president) {
          impacts.president.psRelationship +=
            selectedAnswer.impacts.president.weight;
        }

        // Apply cabinet impacts
        if (selectedAnswer.impacts.cabinet) {
          Object.entries(selectedAnswer.impacts.cabinet).forEach(
            ([id, impact]) => {
              const cabinetId = id as CabinetStaticId;
              if (!impacts.cabinetMembers[cabinetId]) {
                impacts.cabinetMembers[cabinetId] = {
                  approvalRating: 0,
                  psRelationship: 0,
                };
              }
              impacts.cabinetMembers[cabinetId].psRelationship += impact.weight;
              impacts.cabinetMembers[cabinetId].approvalRating += impact.weight;
            }
          );
        }

        // Apply subgroup impacts
        if (selectedAnswer.impacts.subgroups) {
          Object.entries(selectedAnswer.impacts.subgroups).forEach(
            ([id, impact]) => {
              const subgroupId = id as SubgroupStaticId;
              if (!impacts.subgroups[subgroupId]) {
                impacts.subgroups[subgroupId] = { approvalRating: 0 };
              }
              impacts.subgroups[subgroupId].approvalRating += impact.weight;
            }
          );
        }
      }
    }
  }

  return impacts;
}
