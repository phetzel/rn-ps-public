import { create } from "zustand";

import {
  // Level API
  createLevel,
  fetchLevel,
  fetchLastLevel,
  updateLevelStatus,
  updateRelationships,
  calculatePressImpactsForLevel,
  // Press Conference API
  createPressExchangesForConference,
  fetchPressExchangesForLevel,
  // Situation API
  fetchSituationsByLevelId,
  createSituationsForLevel,
  // Journalist API
  fetchActiveJournalistsForGame,
  // Entity API
  takeSnapshot,
} from "~/lib/db/helpers";

import { Game, Level, Situation, PressExchange } from "~/lib/db/models";
import { mockSituationData } from "~/lib/data/mockSituationData";
import { QUESTIONS_PER_LEVEL } from "~/lib/constants";
import { LevelStatus, OutcomeSnapshotType, ExchangeContent } from "~/types";
import { mockExchanges } from "../data/mockQuestionData";

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

  // --- Press Conference Actions ---
  progressCurrentLevel: () => Promise<Level | null>;
  generateExchanges: ({ level }: { level: Level }) => Promise<PressExchange[]>;
  applyOutcomes: ({ level }: { level: Level }) => Promise<void>;
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

        const newLevel = await createLevel(game);

        // Select random mock situations for the new level
        const newSituations = [...mockSituationData]
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);

        const createdSituations = await createSituationsForLevel(
          game,
          newLevel,
          newSituations
        );

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

    // Level Progression
    progressCurrentLevel: async () => {
      const currentLevelId = get().currentLevelId;
      if (!currentLevelId) {
        throw new Error("No current level ID found");
      }
      set({ isLoading: true, error: null });

      try {
        // Get Level Info
        const level = await fetchLevel(currentLevelId);
        if (!level) {
          throw new Error(`Level with ID ${currentLevelId} not found`);
        }

        if (level.status === LevelStatus.Briefing) {
          await get().generateExchanges({ level });
          await updateLevelStatus(currentLevelId, LevelStatus.PressConference);
        } else if (level.status === LevelStatus.PressConference) {
          await get().applyOutcomes({ level });
          await updateLevelStatus(currentLevelId, LevelStatus.Outcome);
        }

        set({ isLoading: false, error: null });
        return level;
      } catch (error) {
        console.error("Failed to update level to press conference:", error);
        set({ isLoading: false, error: String(error) });
        return null;
      }
    },

    // --- Press Conference Progression ---
    generateExchanges: async ({ level }: { level: Level }) => {
      // Fetch situations associated with *this* level
      const situations = await fetchSituationsByLevelId(level.id);

      if (!situations || situations.length === 0) {
        console.warn(`No situations found for level ${level.id}`);
        return [];
      }

      // Get Journalists Info
      const journalists = await fetchActiveJournalistsForGame(level.game_id);
      if (!journalists || journalists.length === 0) {
        throw new Error("No active journalists found for this game");
      }

      // Select a subset of journalists for this press conference
      const selectedJournalists = journalists
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(journalists.length, QUESTIONS_PER_LEVEL));

      // Prepare question data for each selected journalist
      const preparedExchanges = selectedJournalists.map((journalist, index) => {
        // Randomly assign a situation to this question
        const situation =
          situations[Math.floor(Math.random() * situations.length)];

        // Find mock questions appropriate for this situation type
        const mockExchangesForType = mockExchanges.filter(
          (e) => e.situationType === situation.type
        );

        // Select a random mock question or fallback to a generic one
        const mockExchange =
          mockExchangesForType.length > 0
            ? mockExchangesForType[
                Math.floor(Math.random() * mockExchangesForType.length)
              ]
            : mockExchanges[0];

        const content: ExchangeContent = JSON.parse(
          JSON.stringify(mockExchange.content)
        );

        // Replace situation placeholders in all question texts
        Object.values(content.questions).forEach((question) => {
          question.text = question.text
            .replace(/{situation_title}/g, situation.title)
            .replace(/{situation_description}/g, situation.description);
        });

        // Prepare the question record data
        return {
          level,
          situation,
          journalist,
          content: JSON.stringify(content),
          progress: null,
          displayOrder: index,
        };
      });

      const exchanges = await createPressExchangesForConference(
        preparedExchanges
      );
      return exchanges;
    },

    // --- Outcome Progression ---
    applyOutcomes: async ({ level }: { level: Level }) => {
      // Get the game ID
      const gameId = level.game_id;

      // 1. Take initial snapshot
      const initialSnapshot = await takeSnapshot(gameId);

      // 2. Fetch all press exchanges for the level
      const pressExchanges = await fetchPressExchangesForLevel(level.id);

      // 3. Calculate impacts from exchanges
      const impacts = await calculatePressImpactsForLevel(level.id);

      // 4. Apply impacts to game entities
      await updateRelationships(gameId, impacts);

      // 5. Take final snapshot
      const finalSnapshot = await takeSnapshot(gameId);

      // 6. Create outcome snapshot
      const outcomeSnapshot: OutcomeSnapshotType = {
        initial: initialSnapshot,
        final: finalSnapshot,
      };

      await level.updateOutcomeSnapshot(outcomeSnapshot);
    },
  })
);
