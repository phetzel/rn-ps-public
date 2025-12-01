import { database } from '~/lib/db';
import { levelsCollection } from '~/lib/db/helpers/collections';
import { fetchActiveCabinetMembers } from '~/lib/db/helpers/fetchApi';
import { Game, Level } from '~/lib/db/models';
import { cabinetSnapshotSchema } from '~/lib/schemas';
import { CabinetSnapshot, LevelStatus, GameStatus } from '~/types';

export function isGameEnded(gameStatus: GameStatus): boolean {
  return (
    gameStatus === GameStatus.Impeached ||
    gameStatus === GameStatus.Fired ||
    gameStatus === GameStatus.Completed
  );
}

// Level CRUD operations
export async function createLevel(game: Game): Promise<Level> {
  // Check if game has ended
  if (isGameEnded(game.status)) {
    throw new Error(`Cannot create new level: Game has ended due to ${game.status}`);
  }

  return await database.write(async () => {
    // 1. Fetch ACTIVE cabinet members for the game
    const activeCabinetMembers = await fetchActiveCabinetMembers(game.id);

    // 2. Create the cabinet snapshot object from active members
    const cabinetSnapshot: CabinetSnapshot = {} as CabinetSnapshot; // Assert type
    for (const member of activeCabinetMembers) {
      cabinetSnapshot[member.staticId] = member.id;
    }

    // 3. Validate the constructed snapshot using the Zod schema
    const validationResult = cabinetSnapshotSchema.safeParse(cabinetSnapshot);

    if (!validationResult.success) {
      // Validation failed - the snapshot is not complete as required by the schema.
      console.error(
        `Failed to create valid Cabinet Snapshot for game ${game.id} during level creation.`,
        validationResult.error.format(), // Log detailed Zod errors
      );
      throw new Error(
        'Data integrity issue: Constructed cabinet snapshot does not meet schema requirements (likely incomplete).',
      );
    }

    // 4. Stringify the snapshot
    const cabinetSnapshotJson = JSON.stringify(cabinetSnapshot);

    // 5. Create the level
    const newLevel = await levelsCollection.create((level) => {
      level.game.set(game);
      level.status = LevelStatus.Briefing;
      level.month = game.currentMonth;
      level.year = game.currentYear;
      level.cabinetSnapshot = cabinetSnapshotJson;
      level.pressAdWatched = false;
      level.situationAdWatched = false;
    });

    return newLevel;
  });
}

export async function updateLevelStatus(levelId: string, status: LevelStatus) {
  return await database.write(async () => {
    const level = await levelsCollection.find(levelId);
    if (!level) {
      throw new Error(`Level with ID ${levelId} not found`);
    }

    await level.update((record) => {
      record.status = status;
    });
  });
}
