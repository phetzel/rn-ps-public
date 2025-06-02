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

export function createTestDatabase(): Database {
  const adapter = new SQLiteAdapter({
    schema: myAppSchema,
    migrations: migrations,
    jsi: false, // Disable JSI for tests
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

export async function resetTestDatabase(database: Database): Promise<void> {
  await database.write(async () => {
    await database.unsafeResetDatabase();
  });
}

// Helper function for setting up afterEach cleanup in tests
export function setupDatabaseCleanup(database: Database = testDatabase) {
  afterEach(async () => {
    await resetTestDatabase(database);
  });
}
