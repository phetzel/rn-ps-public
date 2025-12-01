import { faker } from '@faker-js/faker';
import { Database } from '@nozbe/watermelondb';

import { Game } from '~/lib/db/models';
import { GameStatus, PoliticalLeaning } from '~/types';

import { GameFactoryOptions } from '../scenarios/types';

export async function createGame(
  database: Database,
  overrides: GameFactoryOptions = {},
): Promise<Game> {
  const defaultValues = {
    status: GameStatus.Active,
    currentYear: 1,
    currentMonth: 1,
    startTimestamp: Date.now(),
    endTimestamp: null,
    psName: faker.person.fullName(),
    presName: faker.person.fullName(),
    presPsRelationship: faker.number.int({ min: 30, max: 90 }),
    presLeaning: faker.helpers.enumValue(PoliticalLeaning),
    usedSituations: [],
  };

  const gameData = { ...defaultValues, ...overrides };
  const finalUsedSituations = JSON.stringify(gameData.usedSituations);

  return await database.write(async () => {
    return await database.get<Game>('games').create((game) => {
      game.status = gameData.status;
      game.currentYear = gameData.currentYear;
      game.currentMonth = gameData.currentMonth;
      game.startTimestamp = gameData.startTimestamp;
      game.endTimestamp = gameData.endTimestamp;
      game.psName = gameData.psName;
      game.presName = gameData.presName;
      game.presPsRelationship = gameData.presPsRelationship;
      game.presLeaning = gameData.presLeaning;
      game.usedSituations = finalUsedSituations;
    });
  });
}
