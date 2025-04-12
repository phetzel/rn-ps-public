import { Q } from "@nozbe/watermelondb";

import { database } from "~/lib/db";
import { situationCollection } from "./collections";
import { Situation, Game, Level } from "~/lib/db/models";
import { SituationStatus, NewSituationData } from "~/types";

export async function fetchActiveSituationsForGame(
  gameId: string
): Promise<Situation[]> {
  return await situationCollection
    .query(
      Q.where("game_id", gameId),
      Q.where("status", SituationStatus.Active)
    )
    .fetch();
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
          situation.startLevel.set(level);
          situation.type = situationData.type;
          situation.title = situationData.title;
          situation.description = situationData.description;
          situation.status = SituationStatus.Active;
          situation.progress = situationData.progress;
        })
      )
    );

    return createdSituations;
  });
}
