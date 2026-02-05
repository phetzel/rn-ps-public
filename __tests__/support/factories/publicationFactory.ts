import { faker } from '@faker-js/faker';
import type { Database } from '@nozbe/watermelondb';

import type { Publication } from '~/lib/db/models';
import { PublicationStaticId } from '~/types';

type PublicationOverrides = {
  gameId: string; // Required association
} & Partial<{
  staticId: PublicationStaticId;
}>;

export async function createPublication(
  database: Database,
  overrides: PublicationOverrides,
): Promise<Publication> {
  const defaultValues = {
    staticId: faker.helpers.enumValue(PublicationStaticId),
  };

  const publicationData = { ...defaultValues, ...overrides };

  return await database.write(async () => {
    return await database.get<Publication>('publications').create((publication) => {
      publication.game_id = publicationData.gameId;
      publication.staticId = publicationData.staticId;
    });
  });
}
