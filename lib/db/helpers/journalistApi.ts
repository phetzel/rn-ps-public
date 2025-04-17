import { Q } from "@nozbe/watermelondb";

import { database } from "~/lib/db";
import { journalistCollection } from "./collections";
import { Journalist } from "~/lib/db/models";

// Fetch active journalists for a game
export async function fetchActiveJournalistsForGame(
  gameId: string
): Promise<Journalist[]> {
  return await journalistCollection
    .query(Q.where("game_id", gameId), Q.where("is_active", true))
    .fetch();
}

// Fetch a specific journalist by id
export async function fetchJournalist(
  journalistId: string
): Promise<Journalist | null> {
  return await journalistCollection.find(journalistId);
}

// Update journalist's relationship with Press Secretary
export async function updateJournalistRelationship(
  journalistId: string,
  newRelationshipValue: number
): Promise<void> {
  await database.write(async () => {
    const journalist = await journalistCollection.find(journalistId);
    await journalist.update((j) => {
      j.relationship = newRelationshipValue;
    });
  });
}
