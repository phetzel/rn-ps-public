import { create } from "zustand";

import {
  createLevel,
  fetchLevel,
  fetchLastLevel,
  fetchActiveSituationsForGame,
  createSituationsForLevel,
} from "~/lib/db/helpers";
import { Game, Level, Situation } from "~/lib/db/models";
import { mockSituationData } from "~/lib/data/mockSituationData";
import { useGameManagerStore } from "./gameManagerStore";
import { ActiveSituationInfo } from "~/types";

interface CurrentLevelStoreState {
  currentLevelId: string | null;
  activeSituations: Situation[];

  // --- Action State ---
  isLoading: boolean;
  error: string | null;

  // --- Actions ---
  setCurrentLevelId: (id: string | null) => void;
  getCurrentLevel: () => Promise<Level | null>;
  setGameCurrentLevel: (gameId: string) => Promise<Level | null>;
  createNewLevel: (game: Game) => Promise<Level | null>;
}

export const useCurrentLevelStore = create<CurrentLevelStoreState>(
  (set, get) => ({
    // --- Initial State ---
    currentLevelId: null,
    activeSituations: [],

    // --- Action State ---
    isLoading: false,
    error: null,

    // --- Actions ---
    setCurrentLevelId: (id: string | null) => {
      set({ currentLevelId: id, error: null });
    },

    getCurrentLevel: async () => {
      const currentLevelId = get().currentLevelId;
      if (!currentLevelId) return null;

      try {
        return await fetchLevel(currentLevelId);
      } catch (error) {
        set({ error: String(error) });
        return null;
      }
    },

    setGameCurrentLevel: async (gameId: string): Promise<Level | null> => {
      set({ isLoading: true, error: null });

      try {
        const level = await fetchLastLevel(gameId);

        if (level) {
          set({ currentLevelId: level.id, isLoading: false });
          return level;
        } else {
          // Handle the case where a game has no levels
          console.warn(`No level found for game ${gameId}`);
          set({
            isLoading: false,
            error: `This game has no levels yet. Create a new level.`,
          });
          return null;
        }
      } catch (error) {
        console.error("Failed to fetch current level:", error);
        set({
          error: `Failed to fetch level: ${
            error instanceof Error ? error.message : String(error)
          }`,
          isLoading: false,
        });
        return null;
      }
    },

    createNewLevel: async (game: Game) => {
      set({ isLoading: true, error: null });

      try {
        await game.advanceMonth();
        // console.log("game", game);

        const newLevel = await createLevel(game);
        // console.log("newLevel", newLevel);

        // 3. Fetch active situations for the game
        const ongoingSituations = await fetchActiveSituationsForGame(game.id);
        // console.log("ongoingSituations", ongoingSituations);

        // 4. Select random mock situations for the new level
        const newSituations = [...mockSituationData]
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);

        const createdSituations = await createSituationsForLevel(
          game,
          newLevel,
          newSituations
        );
        // console.log("createdSituations", createdSituations);

        const activeSituations: ActiveSituationInfo[] = [
          ...ongoingSituations,
          ...createdSituations,
        ];
        // console.log("activeSituations", activeSituations);
        await newLevel.updateActiveSituations(activeSituations);

        if (newLevel) {
          set({ currentLevelId: newLevel.id, isLoading: false, error: null });
          return newLevel;
        } else {
          throw new Error("Failed to create new level");
        }
      } catch (error) {
        console.error("Failed to create new level:", error);
        set({
          isLoading: false,
          error: `Failed to create new level: ${
            error instanceof Error ? error.message : String(error)
          }`,
        });
        return null;
      }
    },
  })
);
