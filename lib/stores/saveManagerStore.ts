import { create } from "zustand";

import { MAX_ACTIVE_GAMES } from "../constants";
import { initializeDatabase } from "../db";
import { entityRepository } from "../db/repositories/entityRepository";
import { gameRepository } from "../db/repositories/gameRepository";
import { Game, NewGameDetails } from "~/types";

interface SaveManagerStoreState {
  isDbInitialized: boolean;
  isLoading: boolean;
  error: string | null;
  availableGames: Game[];
  currentGameId: number | null;
}

interface SaveManagerStoreActions {
  initDb: () => Promise<void>;
  loadAvailableGames: () => Promise<void>;
  createAndStartGame: (details: NewGameDetails) => Promise<Game | null>;
  loadGameToPlay: (gameId: number) => Promise<void>;
  unloadCurrentGame: () => void;
  deleteGame: (gameId: number) => Promise<void>;
  _setError: (message: string | null) => void;
  _setLoading: (loading: boolean) => void;
}

// Create the Zustand store
export const useSaveManagerStore = create<
  SaveManagerStoreState & SaveManagerStoreActions
>((set, get) => ({
  // Initial State
  isDbInitialized: false,
  isLoading: false,
  error: null,
  availableGames: [],
  currentGameId: null,

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
      console.warn("Store: Attempted to load games before DB was initialized.");
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
    let newGame: Game | null = null;
    try {
      console.log("createAndStartGame", details);
      newGame = gameRepository.createNewGame(details);
      const newGameId = newGame.id;

      await entityRepository.initializeEntitiesForGame(newGameId); // Pass details if needed by entity generation
      console.log(
        `SaveManagerStore: Entities initialized for game ${newGameId}`
      );

      // Update store state
      set((state) => ({
        availableGames: [newGame!, ...state.availableGames],
        currentGameId: newGame!.id,
        error: null,
      }));

      // --- Trigger Gameplay Store Initialization (WHEN READY) ---
      // try {
      //   await useGameSessionStore.getState().initializeGameplaySession(newGame.id);
      //   console.log(`SaveManagerStore: Gameplay session for ${newGame.id} initialized.`);
      // } catch (gameplayError: any) {
      //   console.error("Error initializing gameplay session after creation:", gameplayError);
      //   get()._setError(`Game created, but failed to load session: ${gameplayError.message}`);
      //   // Should we revert? Clear currentGameId? Depends on desired behavior.
      //   set({ currentGameId: null }); // Clear ID if session load fails
      //   // We might still return newGame here, but the session isn't ready.
      //   // Or return null to indicate overall failure to the UI? Returning null is safer.
      //   newGame = null;
      // }
      // ------

      console.log(`Store: Created and selected new game with ID ${newGame.id}`);
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
    const gameExists = get().availableGames.some(
      (g) => g.id === gameId && g.status === "active"
    );
    if (!gameExists) {
      get()._setError(
        `Cannot load game ${gameId}. It's not available or not active.`
      );
      return;
    }

    try {
      console.log(
        `SaveManagerStore: Triggering gameplay session init for ${gameId}...`
      );
      // await useGameSessionStore.getState().initializeGameplaySession(gameId);
      console.log(
        `SaveManagerStore: Gameplay session init triggered for ${gameId}. Setting current ID.`
      );
      // If initialization succeeds, set the ID in this store
      set({ currentGameId: gameId, error: null }); // <<< CHANGED: Set the ID
      // get()._setLoading(false); // Turn off loading if set above
    } catch (gameplayError: any) {
      console.error("Error initializing gameplay session:", gameplayError);
      get()._setError(`Failed to load game details: ${gameplayError.message}`);
      set({ currentGameId: null }); // Ensure ID is cleared if session load fails
      // get()._setLoading(false); // Turn off loading if set above
    }
  },

  unloadCurrentGame: () => {
    const currentId = get().currentGameId;
    if (currentId !== null) {
      console.log(
        `SaveManagerStore: Unloading current game ID ${currentId}. Triggering gameplay clear...`
      );
      set({ currentGameId: null }); // <<< CHANGED: Clear the ID

      // --- Trigger Gameplay Store Clear (WHEN READY) ---
      // useGameSessionStore.getState().clearGameplaySession();
      // ------
    }
  },

  deleteGame: async (gameId) => {
    if (!get().isDbInitialized) {
      /* ... */ return;
    }
    get()._setLoading(true); // Loading for delete action
    const currentlySelectedId = get().currentGameId; // Store ID before DB call/state change
    try {
      const affectedRows = gameRepository.deleteGame(gameId);
      if (affectedRows > 0) {
        set((state) => ({
          availableGames: state.availableGames.filter((g) => g.id !== gameId),
          // Clear currentGameId ONLY if the deleted game was the selected one
          currentGameId:
            state.currentGameId === gameId ? null : state.currentGameId,
          error: null,
        }));
        console.log(`SaveManagerStore: Deleted game ${gameId}.`);

        // --- Trigger Gameplay Store Clear if necessary (WHEN READY) ---
        if (currentlySelectedId === gameId) {
          console.log(
            `SaveManagerStore: Triggering gameplay clear because deleted game ${gameId} was active.`
          );
          // useGameSessionStore.getState().clearGameplaySession();
        }
        // ------
      } else {
        /* ... */
      }
      get()._setLoading(false);
    } catch (err: any) {
      get()._setError(err.message || `Failed to delete game ${gameId}`);
      get()._setLoading(false);
    }
  },
}));
