import { Q } from "@nozbe/watermelondb";

import { database } from "~/lib/db";
import { situationCollection } from "./collections";
import { Situation, Game, Level } from "~/lib/db/models";
import { NewSituationData } from "~/types";

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
  newSituations: NewSituationData[]
): Promise<Situation[]> {
  return await database.write(async () => {
    const createdSituations = await Promise.all(
      newSituations.map((situationData) =>
        situationCollection.create((situation) => {
          situation.game.set(game);
          situation.level.set(level);
          situation.type = situationData.type;
          situation.title = situationData.title;
          situation.description = situationData.description;
          situation.content = situationData.content;
        })
      )
    );

    return createdSituations;
  });
}
