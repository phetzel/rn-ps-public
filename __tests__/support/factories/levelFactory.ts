import { faker } from '@faker-js/faker';
import { Database } from '@nozbe/watermelondb';

import { Level } from '~/lib/db/models';
import { LevelStatus } from '~/types';

type LevelOverrides = {
  gameId: string; // Required association
} & Partial<{
  year: number;
  month: number;
  status: LevelStatus;
  cabinetSnapshot: string;
  outcomeSnapshot: string | null;
  pressAdWatched: boolean;
  situationAdWatched: boolean;
}>;

export async function createLevel(database: Database, overrides: LevelOverrides): Promise<Level> {
  const defaultValues = {
    year: 1,
    month: faker.number.int({ min: 1, max: 12 }),
    status: LevelStatus.Briefing,
    cabinetSnapshot: JSON.stringify({}),
    outcomeSnapshot: null,
    pressAdWatched: false,
    situationAdWatched: false,
  };

  const levelData = { ...defaultValues, ...overrides };

  return await database.write(async () => {
    return await database.get<Level>('levels').create((level) => {
      level.game_id = levelData.gameId;
      level.year = levelData.year;
      level.month = levelData.month;
      level.status = levelData.status;
      level.cabinetSnapshot = levelData.cabinetSnapshot;
      level.outcomeSnapshot = levelData.outcomeSnapshot;
      level.pressAdWatched = levelData.pressAdWatched;
      level.situationAdWatched = levelData.situationAdWatched;
    });
  });
}
