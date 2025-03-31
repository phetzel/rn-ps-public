import { getDb } from "../connection";
import { SQLiteDatabase } from "expo-sqlite";

import { Game, NewGameDetails } from "~/types";

const getCurrentTimestamp = (): number => Math.floor(Date.now() / 1000);

export const gameRepository = {
  /**
   * Finds a single game by its ID.
   */
  findGameById(id: number): Game | null {
    console.log(`Repository: Finding game with ID ${id}`);
    const db: SQLiteDatabase = getDb();
    try {
      const result = db.getFirstSync<Game>(
        `SELECT * FROM games WHERE id = ?;`,
        [id]
      );
      return result; // Will be Game object or null
    } catch (error: any) {
      console.error(
        `Repository Error: Failed to find game by ID ${id}:`,
        error
      );
      throw new Error(`Failed to retrieve game: ${error.message}`); // Re-throw
    }
  },

  /**
   * Finds ALL game records in the database.
   */
  findAllGames(): Game[] {
    console.log("Repository: Finding all games");
    const db: SQLiteDatabase = getDb();
    try {
      const results = db.getAllSync<Game>(
        `SELECT * FROM games ORDER BY updated_at DESC;`
      );
      return results;
    } catch (error: any) {
      console.error("Repository Error: Failed to find all games:", error);
      throw new Error(`Failed to retrieve all games: ${error.message}`);
    }
  },

  /**
   * Creates a new game record with initial values.
   * Returns the newly created Game object.
   */
  createNewGame(details: NewGameDetails): Game {
    console.log("Repository: Creating new game");
    const db: SQLiteDatabase = getDb();
    const startTimestamp = getCurrentTimestamp();
    const insertSql = `INSERT INTO games (status, current_year, current_month, overall_public_approval, start_timestamp)
                 VALUES (?, ?, ?, ?, ?);`;
    const insertParams = [
      "active",
      1,
      1,
      0.5,
      details.pressSecretaryName,
      startTimestamp,
    ];

    // Query to get the last inserted ID
    const selectLastIdSql = `SELECT last_insert_rowid() as id;`;

    try {
      db.runSync(insertSql, insertParams);

      const idResult = db.getFirstSync<{ id: number }>(selectLastIdSql);

      // Check if the result and ID are valid
      if (idResult && idResult.id > 0) {
        const lastId = idResult.id;
        console.log(`Repository: Game created with tentative ID ${lastId}`);

        const newGame = this.findGameById(lastId);
        if (!newGame) {
          throw new Error(
            `Failed to retrieve newly created game after insert (Expected ID: ${lastId}).`
          );
        }
        console.log(
          `Repository: Confirmed game creation with ID ${newGame.id}`
        );
        return newGame;
      } else {
        throw new Error(
          "Game creation via repository failed to retrieve a valid lastInsertRowId using SELECT query."
        );
      }
    } catch (error: any) {
      console.error("Repository Error: Failed to create new game:", error);
      // Include details from the error if possible
      throw new Error(`Failed to create game: ${error.message || error}`);
    }
  },

  /**
   * Updates an existing game record.
   */
  updateGame(
    id: number,
    updates: Partial<Omit<Game, "id" | "created_at">>
  ): Game {
    console.log(`Repository: Updating game ${id}`);
    const db: SQLiteDatabase = getDb();

    const allowedUpdates: Partial<Game> = { ...updates };
    delete allowedUpdates.id;
    delete allowedUpdates.created_at;

    if (
      updates.status &&
      updates.status !== "active" &&
      !updates.end_timestamp
    ) {
      allowedUpdates.end_timestamp = getCurrentTimestamp();
      console.log(`Repository: Auto-setting end_timestamp for game ${id}.`);
    }

    const fields = Object.keys(allowedUpdates);
    if (fields.length === 0) {
      console.warn("Repository: Update called with no fields to update.");
      const currentGame = this.findGameById(id);
      if (!currentGame)
        throw new Error(`Cannot update non-existent game ${id}`);
      return currentGame;
    }

    const setClause = fields.map((field) => `${field} = ?`).join(", ");
    const params = fields.map((field) => (allowedUpdates as any)[field]);
    params.push(id);

    const sql = `UPDATE games SET ${setClause} WHERE id = ?;`;

    try {
      const result = db.runSync(sql, params);
      console.log(
        `Repository: Game ${id} update executed. Rows affected (approx): ${
          result?.changes ?? "N/A"
        }`
      );

      const updatedGame = this.findGameById(id);
      if (!updatedGame) {
        throw new Error(
          `Failed to retrieve game ${id} after attempting update.`
        );
      }
      return updatedGame;
    } catch (error: any) {
      console.error(`Repository Error: Failed to update game ${id}:`, error);
      throw new Error(`Failed to update game ${id}: ${error.message}`);
    }
  },

  /**
   * Deletes a game by its ID.
   * Returns the number of rows affected.
   */
  deleteGame(id: number): number {
    console.warn(`Repository: Deleting game ${id}`);
    const db: SQLiteDatabase = getDb();
    const sql = `DELETE FROM games WHERE id = ?;`;
    try {
      const result = db.runSync(sql, [id]);
      const changes = result?.changes ?? 0; // Default to 0 if undefined
      console.log(`Repository: Game ${id} deleted. Rows affected: ${changes}`);
      return changes;
    } catch (error: any) {
      console.error(`Repository Error: Failed to delete game ${id}:`, error);
      throw new Error(`Failed to delete game ${id}: ${error.message}`);
    }
  },
};
