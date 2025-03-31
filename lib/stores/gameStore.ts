import { create } from "zustand";

import { MAX_ACTIVE_GAMES } from "../constants";
import { initializeDatabase } from "../db";
import { gameRepository } from "../db/repositories/gameRepository";
import { Game, NewGameDetails } from "~/types";

interface GameStoreState {
  isDbInitialized: boolean;
  isLoading: boolean;
  error: string | null;
  availableGames: Game[];
  currentGameBeingPlayed: Game | null;
}

interface GameStoreActions {
  initDb: () => Promise<void>;
  loadAvailableGames: () => Promise<void>;
  createAndStartGame: (details: NewGameDetails) => Promise<Game | null>;
  loadGameToPlay: (gameId: number) => Promise<void>;
  unloadCurrentGame: () => void;
  updateCurrentGame: (
    updates: Partial<
      Omit<Game, "id" | "created_at" | "updated_at" | "press_secretary_name">
    >
  ) => Promise<void>;
  deleteGame: (gameId: number) => Promise<void>;
  _setError: (message: string | null) => void;
  _setLoading: (loading: boolean) => void;
}

// Create the Zustand store
export const useGameStore = create<GameStoreState & GameStoreActions>(
  (set, get) => ({
    // Initial State
    isDbInitialized: false,
    isLoading: false,
    error: null,
    availableGames: [],
    currentGameBeingPlayed: null,

    // --- Internal Helpers ---
    _setError: (message) => set({ error: message, isLoading: false }),
    _setLoading: (loading) => set({ isLoading: loading, error: null }),

    // --- Actions ---
    initDb: async () => {
      // Prevent multiple initializations
      if (get().isDbInitialized || get().isLoading) return;
      get()._setLoading(true);
      try {
        await initializeDatabase();
        set({ isDbInitialized: true });

        // Load all games immediately after successful initialization
        await get().loadAvailableGames();
      } catch (err: any) {
        console.error("Store Init DB Error:", err);
        get()._setError(err.message || "Failed to initialize database");
        set({ isDbInitialized: false });
      } finally {
        set((state) => ({ isLoading: false }));
      }
    },

    loadAvailableGames: async () => {
      if (!get().isDbInitialized) {
        console.warn(
          "Store: Attempted to load games before DB was initialized."
        );
        return;
      }

      get()._setLoading(true);
      try {
        const games = gameRepository.findAllGames();
        set({ availableGames: games });
        console.log(`Store: Loaded ${games.length} available games.`);
      } catch (err: any) {
        console.error("Store Load Available Games Error:", err);
        get()._setError(err.message || "Failed to load available games");
      } finally {
        get()._setLoading(false);
      }
    },

    createAndStartGame: async (details) => {
      if (!get().isDbInitialized) {
        get()._setError("Database not initialized.");
        return null;
      }
      // Check limit
      const currentActiveGamesCount = get().availableGames.filter(
        (g) => g.status === "active"
      ).length;
      if (currentActiveGamesCount >= MAX_ACTIVE_GAMES) {
        console.warn(
          "Store: Create action blocked, maximum active games reached."
        );
        get()._setError(
          `Cannot start new game. Maximum ${MAX_ACTIVE_GAMES} active games allowed.`
        );
        return null;
      }

      get()._setLoading(true);
      try {
        console.log("createAndStartGame", details);
        // Call the updated repository method that takes details
        const newGame = gameRepository.createNewGame(details);

        // Update store state
        set((state) => ({
          availableGames: [newGame, ...state.availableGames], // Add to list
          currentGameBeingPlayed: newGame, // Set as current
          error: null, // Clear previous errors on success
        }));
        console.log(
          `Store: Created and selected new game with ID ${newGame.id}`
        );
        get()._setLoading(false);
        return newGame; // Return the created game object
      } catch (err: any) {
        console.error("Store Create And Start Game Error:", err);
        get()._setError(err.message || "Failed to create game");
        get()._setLoading(false); // Ensure loading is off on error
        return null; // Indicate failure
      }
    },

    loadGameToPlay: async (gameId) => {
      if (!get().isDbInitialized) {
        get()._setError("Database not initialized.");
        return;
      }
      const gameToLoad = get().availableGames.find((g) => g.id === gameId);

      if (gameToLoad) {
        if (gameToLoad.status !== "active") {
          console.warn(
            `Store: Attempted to load a non-active game (ID: ${gameId}, Status: ${gameToLoad.status}).`
          );
          get()._setError(
            `Cannot play a game that is already ${gameToLoad.status}.`
          );
          set({ currentGameBeingPlayed: null });
          return;
        }
        console.log(`Store: Setting game ${gameId} as currentGameBeingPlayed.`);

        set({ currentGameBeingPlayed: gameToLoad, error: null });
      } else {
        console.error(
          `Store: Could not find game with ID ${gameId} in availableGames to load.`
        );
        get()._setError(
          `Failed to load game ${gameId}. Game data not found in current state.`
        );
        set({ currentGameBeingPlayed: null });
      }
    },

    unloadCurrentGame: () => {
      console.log("Store: Unloading currentGameBeingPlayed.");
      set({
        currentGameBeingPlayed: null,
      });
    },

    updateCurrentGame: async (updates) => {
      const current = get().currentGameBeingPlayed;
      if (!current) {
        console.warn(
          "Store: Tried to update game, but no game is currently loaded."
        );
        get()._setError("No game is currently selected to update.");
        return;
      }
      if (!get().isDbInitialized) {
        get()._setError("Database not initialized.");
        return;
      }

      get()._setLoading(true);
      try {
        const updatedGame = gameRepository.updateGame(current.id, updates);

        set((state) => ({
          currentGameBeingPlayed: updatedGame,
          availableGames: state.availableGames.map((g) =>
            g.id === updatedGame.id ? updatedGame : g
          ),
        }));
        console.log(`Store: Updated game ${current.id}.`);
        get()._setLoading(false);
      } catch (err: any) {
        console.error(`Store Update Game Error (ID: ${current.id}):`, err);
        get()._setError(err.message || `Failed to update game ${current.id}`);
      }
    },

    deleteGame: async (gameId) => {
      if (!get().isDbInitialized) {
        get()._setError("Database not initialized.");
        return;
      }
      get()._setLoading(true);
      try {
        const affectedRows = gameRepository.deleteGame(gameId);

        if (affectedRows > 0) {
          set((state) => {
            const updatedAvailableGames = state.availableGames.filter(
              (g) => g.id !== gameId
            );
            const updatedCurrentGame =
              state.currentGameBeingPlayed?.id === gameId
                ? null
                : state.currentGameBeingPlayed;

            return {
              availableGames: updatedAvailableGames,
              currentGameBeingPlayed: updatedCurrentGame,
              error: null,
            };
          });
          console.log(`Store: Deleted game ${gameId}.`);
        } else {
          console.warn(
            `Store: Delete command for game ${gameId} affected 0 rows in the database.`
          );
        }
        get()._setLoading(false);
      } catch (err: any) {
        console.error(`Store Delete Game Error (ID: ${gameId}):`, err);
        get()._setError(err.message || `Failed to delete game ${gameId}`);
      }
    },
  })
);
