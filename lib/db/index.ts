import { getDb } from "./connection";
import { ALL_TABLES, ALL_TRIGGERS, ALL_INDEXES } from "./schema";
import { SQLiteDatabase } from "expo-sqlite";

// Re-export repository functions for easy access
// export * from "./gameRepository";
// export * from "./levelRepository";
// export * from './interactionRepository'; // Add later

let _isInitialized = false;

export const initializeDatabase = async (): Promise<void> => {
  if (_isInitialized) {
    console.log("Database already initialized.");
    return;
  }

  console.log("Attempting to initialize database...");
  const db: SQLiteDatabase = getDb();

  try {
    console.log("Executing Schema SQL...");
    const allSqlCommands = [
      ...ALL_TABLES,
      ...ALL_TRIGGERS,
      ...ALL_INDEXES,
    ].join(";\n");

    await db.execAsync(allSqlCommands);

    _isInitialized = true;
    console.log("Database initialization successful.");

    return Promise.resolve();
  } catch (error: any) {
    _isInitialized = false;
    console.error("Database initialization failed:", error);

    throw new Error(
      `Database initialization failed: ${error.message || error}`
    );
  }
};
