import { Database } from "@nozbe/watermelondb";
import { faker } from "@faker-js/faker";
import { Journalist } from "~/lib/db/models";
import { JournalistStaticId } from "~/types";

type JournalistOverrides = {
  gameId: string; // Required association
  publicationId: string; // Required association
} & Partial<{
  staticId: JournalistStaticId;
  psRelationship: number;
}>;

export async function createJournalist(
  database: Database,
  overrides: JournalistOverrides
): Promise<Journalist> {
  const defaultValues = {
    staticId: faker.helpers.enumValue(JournalistStaticId),
    psRelationship: faker.number.int({ min: 20, max: 80 }),
  };

  const journalistData = { ...defaultValues, ...overrides };

  return await database.write(async () => {
    return await database
      .get<Journalist>("journalists")
      .create((journalist) => {
        journalist.game_id = journalistData.gameId;
        journalist.publication_id = journalistData.publicationId;
        journalist.staticId = journalistData.staticId;
        journalist.psRelationship = journalistData.psRelationship;
      });
  });
}
