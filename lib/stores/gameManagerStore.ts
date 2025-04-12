import { create } from "zustand";
import { Q } from "@nozbe/watermelondb";

import { database } from "~/lib/db";
import type Game from "~/lib/db/models/Game";
import type { NewGameDetails } from "~/types";
import {
  createGameWithDetails,
  destroyGame,
  fetchGame,
} from "~/lib/db/helpers";

interface GameManagerStoreState {
  // --- Core State ---
  isDbReady: boolean;
  currentGameId: string | null;

  // --- Action State ---
  isLoading: boolean;
  error: string | null;

  // --- Actions ---
  initialize: () => Promise<void>;
  setCurrentGameId: (id: string | null) => void;
  getCurrentGame: () => Promise<Game | null>;
  createAndStartGame: (details: NewGameDetails) => Promise<Game | null>;
  deleteGame: (gameId: string) => Promise<void>;
}

export const useGameManagerStore = create<GameManagerStoreState>(
  (set, get) => ({
    // --- Initial State ---
    isDbReady: false, // Assume not ready initially
    currentGameId: null,
    isLoading: false,
    error: null,

    // --- Actions ---
    initialize: async () => {
      try {
        await database.get("games").query(Q.take(1)).fetch();
        set({ isDbReady: true, error: null });
        console.log("Database connection ready.");
      } catch (e: any) {
        console.error("Database initialization check failed:", e);
        set({ isDbReady: false, error: "Database connection failed." });
      }
    },

    setCurrentGameId: (id: string | null) => {
      set({ currentGameId: id, error: null });
    },

    getCurrentGame: async () => {
      const currentGameId = get().currentGameId;
      if (!currentGameId) return null;
      try {
        return await fetchGame(currentGameId);
      } catch (error) {
        set({ error: String(error) });
        return null;
      }
    },

    createAndStartGame: async (
      details: NewGameDetails
    ): Promise<Game | null> => {
      set({ isLoading: true, error: null });
      try {
        const createdGame = await createGameWithDetails(details);

        if (createdGame) {
          set({ currentGameId: createdGame.id, isLoading: false });
          console.log(`Game created and set as current: ${createdGame.id}`);
          return createdGame;
        } else {
          throw new Error("Game creation returned null unexpectedly.");
        }
      } catch (e: any) {
        console.error("Failed to create game:", e);
        set({ isLoading: false, error: `Failed to create game: ${e.message}` });
        return null;
      }
    },

    deleteGame: async (gameId: string) => {
      set({ isLoading: true, error: null });
      const currentId = get().currentGameId;
      try {
        await destroyGame(gameId);
        console.log(`Game deleted: ${gameId}`);
        // If the deleted game was the active one, clear it
        if (currentId === gameId) {
          set({ currentGameId: null, isLoading: false });
        } else {
          set({ isLoading: false });
        }
      } catch (e: any) {
        console.error(`Failed to delete game ${gameId}:`, e);
        set({ isLoading: false, error: `Failed to delete game: ${e.message}` });
      }
    },
  })
);
