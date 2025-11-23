import { database } from '~/lib/db';

export async function resetAppData(): Promise<void> {
  // Resets all local WatermelonDB tables and re-creates schema/migrations
  await database.unsafeResetDatabase();
}
