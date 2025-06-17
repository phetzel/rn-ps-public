import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { myAppSchema } from "~/lib/db/schema";
import { migrations } from "~/lib/db/migrations";
import {
  CabinetMember,
  Game,
  Journalist,
  Level,
  Publication,
  Situation,
  SubgroupApproval,
  PressExchange,
} from "~/lib/db/models";

/**
 * Creates a new test database instance.
 * Using a new in-memory instance for each test suite prevents side-effects.
 */
export function createTestDatabase(): Database {
  const adapter = new SQLiteAdapter({
    schema: myAppSchema,
    migrations: migrations,
    jsi: false, // JSI is not available in Node.js test environment
    dbName: `file:testdb_${Date.now()}?mode=memory&cache=shared`, // In-memory, but shared across connections in the same process
    onSetUpError: (error) => {
      console.error(`Test database setup failed:`, error);
    },
  });

  return new Database({
    adapter,
    modelClasses: [
      Game,
      Level,
      CabinetMember,
      Publication,
      Journalist,
      SubgroupApproval,
      Situation,
      PressExchange,
    ],
  });
}

// Create a singleton test database instance
export const testDatabase = createTestDatabase();

/**
 * Resets the database to a clean state.
 */
export async function resetTestDatabase(database: Database): Promise<void> {
  await database.write(async () => {
    await database.unsafeResetDatabase();
  });
}

/**
 * A helper to be used in jest test files to ensure the database is reset
 * after each test.
 *
 * @example
 * describe('My test suite', () => {
 *   const database = setupTestDatabase();
 *   setupDatabaseCleanup(database);
 *
 *   it('should do something', () => {
 *     // ...
 *   });
 * });
 */
export function setupDatabaseCleanup(database: Database = testDatabase) {
  afterEach(async () => {
    await resetTestDatabase(database);
  });
}

// Keep the old function names for backward compatibility
export const setupTestDatabase = createTestDatabase;
export const resetDatabase = resetTestDatabase;
