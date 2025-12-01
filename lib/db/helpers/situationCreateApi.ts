import { staticJournalists } from '~/lib/data/staticMedia';
import { database } from '~/lib/db';
import { situationCollection, pressExchangeCollection } from '~/lib/db/helpers/collections';
import { initializeExchangeProgressForContent } from '~/lib/db/helpers/exchangeApi';
import {
  fetchActiveJournalistsForGame,
  fetchPressExchangeForJournalistLevel,
} from '~/lib/db/helpers/fetchApi';
import { Situation, Game, Level } from '~/lib/db/models';
import { SituationData, PublicationStaticId, JournalistStaticId } from '~/types';

export async function createSituationsForLevel(
  game: Game,
  level: Level,
  newSituations: SituationData[],
): Promise<Situation[]> {
  // First get all journalists for the game
  const journalists = await fetchActiveJournalistsForGame(game.id);
  if (!journalists || journalists.length === 0) {
    throw new Error('No active journalists found for this game');
  }

  // Create maps for easier lookup
  const journalistsByPublication: Partial<Record<PublicationStaticId, typeof journalists>> = {};

  // Group journalists by publication
  journalists.forEach((journalist) => {
    const staticJournalist = staticJournalists[journalist.staticId as JournalistStaticId];
    if (staticJournalist) {
      const publicationId = staticJournalist.publicationStaticId;
      if (!journalistsByPublication[publicationId]) {
        journalistsByPublication[publicationId] = [];
      }
      journalistsByPublication[publicationId].push(journalist);
    }
  });

  // Track assigned journalists per level
  const assignedJournalists = new Set<string>();

  return await database.write(async () => {
    const createdSituations = await Promise.all(
      newSituations.map((situationData) =>
        situationCollection.create((situation) => {
          situation.game.set(game);
          situation.level.set(level);
          situation.type = situationData.type;
          situation.title = situationData.title;
          situation.description = situationData.description;
          situation.content = JSON.stringify(situationData.content);
        }),
      ),
    );

    // Now create exchanges for each situation in the same transaction
    for (let i = 0; i < createdSituations.length; i++) {
      const situation = createdSituations[i];
      const situationData = newSituations[i];

      // Skip if no exchanges defined
      if (!situationData.exchanges) continue;

      // Create each exchange for this situation
      for (const exchange of situationData.exchanges) {
        // Get publication for this exchange
        const publicationId = exchange.publication;
        const availableJournalists = journalistsByPublication[publicationId];

        if (!availableJournalists || availableJournalists.length === 0) {
          console.warn(
            `No available journalists for publication ${publicationId}, skipping exchange`,
          );
          continue;
        }

        // Filter out already assigned journalists
        const unassignedJournalists = availableJournalists.filter(
          (j) => !assignedJournalists.has(j.id),
        );

        // If no unassigned journalists, try to use any journalist from this publication as fallback
        const journalist =
          unassignedJournalists.length > 0 ? unassignedJournalists[0] : availableJournalists[0];

        // Mark this journalist as assigned
        assignedJournalists.add(journalist.id);

        // Use the new utility function to create initial progress with proper currentQuestionId
        const initialProgress = initializeExchangeProgressForContent(exchange.content);

        // Check if journalist already has an exchange for this level
        const existingExchange = await fetchPressExchangeForJournalistLevel(
          level.id,
          journalist.id,
        );

        if (existingExchange) {
          throw new Error(
            `Journalist ${journalist.id} already has a press exchange for level ${level.id}`,
          );
        }

        // Create the exchange
        await pressExchangeCollection.create((e) => {
          e.level.set(level);
          e.situation.set(situation);
          e.journalist.set(journalist);
          e.content = JSON.stringify(exchange.content);
          e.progress = JSON.stringify(initialProgress);
        });
      }
    }

    return createdSituations;
  });
}
