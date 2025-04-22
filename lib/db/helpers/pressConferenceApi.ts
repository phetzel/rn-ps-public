import { Q } from "@nozbe/watermelondb";
import { database } from "~/lib/db";

import { pressExchangeCollection } from "./collections";
import { Level, PressExchange, Situation, Journalist } from "~/lib/db/models";
import { LevelStatus, ExchangeContent, ExchangeProgress } from "~/types";

// Press Exchange CRUD operations
// Create press exchanges for a conference
export interface PreparedExchangeData {
  level: Level;
  situation: Situation;
  journalist: Journalist;
  content: string; // JSON stringified ExchangeContent
  progress: string | null; // JSON stringified ExchangeProgress or null
  displayOrder: number;
}

export async function createPressExchangesForConference(
  preparedExchanges: PreparedExchangeData[]
): Promise<PressExchange[]> {
  return await database.write(async () => {
    // Create an exchange record for each prepared exchange
    const createdExchanges = await Promise.all(
      preparedExchanges.map(async (preparedExchange) => {
        // Parse the content to get the root question ID
        const content: ExchangeContent = JSON.parse(preparedExchange.content);

        // Create initial progress with the root question as the current question
        const initialProgress: ExchangeProgress = {
          history: [],
          currentQuestionId: content.rootQuestionId,
        };

        // Stringify the initial progress
        const progressJson = JSON.stringify(initialProgress);

        // Create the exchange
        const exchange = await pressExchangeCollection.create((e) => {
          e.level.set(preparedExchange.level);
          e.situation.set(preparedExchange.situation);
          e.journalist.set(preparedExchange.journalist);
          e.content = preparedExchange.content;
          e.progress = progressJson;
        });

        return exchange;
      })
    );

    return createdExchanges;
  });
}

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
