import * as SQLite from "expo-sqlite";

const DATABASE_NAME = "pressSecretaryGame.db";

let _db: SQLite.SQLiteDatabase | null = null;

export const getDb = (): SQLite.SQLiteDatabase => {
  if (!_db) {
    _db = SQLite.openDatabaseSync(DATABASE_NAME);
    console.log(`Database "${DATABASE_NAME}" opened successfully.`);
  }

  return _db!;
};

export const closeDb = (): void => {
  if (_db) {
    const dbToClose = _db;
    _db = null;
    console.log("Attempting to close database...");
    dbToClose
      .closeAsync()
      .then(() => {
        console.log("Database closed successfully.");
      })
      .catch((e: any) => {
        console.error("Error closing DB:", e);
      });
  } else {
    console.log("Database already closed or not initialized.");
  }
};
