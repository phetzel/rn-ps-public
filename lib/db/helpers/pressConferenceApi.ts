import { Q } from "@nozbe/watermelondb";
import { database } from "~/lib/db";

import { pressExchangeCollection } from "./collections";
import { PressExchange } from "~/lib/db/models";

// Fetch exchanges for a specific level
export async function fetchPressExchangesForLevel(
  levelId: string
): Promise<PressExchange[]> {
  return await pressExchangeCollection
    .query(Q.where("level_id", levelId))
    .fetch();
}

// Fetch a specific exchange by ID
export async function fetchPressExchangeById(
  exchangeId: string
): Promise<PressExchange | null> {
  try {
    return await pressExchangeCollection.find(exchangeId);
  } catch (error) {
    console.error(`Error fetching exchange with ID ${exchangeId}:`, error);
    return null;
  }
}
