import { Q } from "@nozbe/watermelondb";
import { database } from "~/lib/db";

import { levelsCollection } from "./collections";
import { Game, Level } from "~/lib/db/models";
import { LevelStatus } from "~/types";

// Level CRUD operations
export async function createLevel(game: Game): Promise<Level> {
  return await database.write(async () => {
    const newLevel = await levelsCollection.create((level) => {
      level.game.set(game);
      level.status = LevelStatus.Briefing;
      level.month = game.currentMonth;
      level.year = game.currentYear;
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
