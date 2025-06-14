import { Database } from "@nozbe/watermelondb";
import { faker } from "@faker-js/faker";
import { Publication, Journalist } from "~/lib/db/models";
import { PublicationStaticId, JournalistStaticId } from "~/types";
import { createTestGame } from "./gameFixtures";

// ═══════════════════════════════════════════════════════════════════════════════
// PUBLICATION FIXTURES
// ═══════════════════════════════════════════════════════════════════════════════

export interface PublicationFixtureOptions {
  gameId?: string;
  staticId?: PublicationStaticId;
}

export async function createTestPublication(
  database: Database,
  options: PublicationFixtureOptions = {}
): Promise<Publication> {
  const gameId = options.gameId ?? (await createTestGame(database)).id;

  return await database.write(async () => {
    return await database
      .get<Publication>("publications")
      .create((publication) => {
        publication.game_id = gameId;
        publication.staticId =
          options.staticId ?? faker.helpers.enumValue(PublicationStaticId);
      });
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// JOURNALIST FIXTURES
// ═══════════════════════════════════════════════════════════════════════════════

export interface JournalistFixtureOptions {
  gameId?: string;
  publicationId?: string;
  staticId?: JournalistStaticId;
  psRelationship?: number;
}

export async function createTestJournalist(
  database: Database,
  options: JournalistFixtureOptions = {}
): Promise<Journalist> {
  const gameId = options.gameId ?? (await createTestGame(database)).id;
  const publicationId =
    options.publicationId ??
    (await createTestPublication(database, { gameId })).id;

  return await database.write(async () => {
    return await database
      .get<Journalist>("journalists")
      .create((journalist) => {
        journalist.game_id = gameId;
        journalist.publication_id = publicationId;
        journalist.staticId =
          options.staticId ?? faker.helpers.enumValue(JournalistStaticId);
        journalist.psRelationship =
          options.psRelationship ?? faker.number.int({ min: 20, max: 80 });
      });
  });
}
