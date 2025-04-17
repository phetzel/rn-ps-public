import { create } from "zustand";

import {
  // Level API
  createLevel,
  fetchLevel,
  fetchLastLevel,
  updateLevelStatus,
  // Situation API
  fetchActiveSituationsForGame,
  fetchSituationById,
  createSituationsForLevel,
  // Question API
  createQuestionsForPressConference,
  // Journalist API
  fetchActiveJournalistsForGame,
} from "~/lib/db/helpers";
import { Game, Level, Question, Situation, Journalist } from "~/lib/db/models";
import { mockSituationData } from "~/lib/data/mockSituationData";
import { useGameManagerStore } from "./gameManagerStore";
import { ActiveSituationInfo, LevelStatus } from "~/types";
import { mockQuestions } from "../data/mockQuestionData";

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
  generateQuestions: ({
    level,
    situations,
    journalists,
  }: {
    level: Level;
    situations: Situation[];
    journalists: Journalist[];
  }) => Promise<Question[]>;
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

    // Level Progression
    generateQuestions: async ({
      level,
      situations,
      journalists,
    }: {
      level: Level;
      situations: Situation[];
      journalists: Journalist[];
    }) => {
      // Determine how many questions to generate (max: 8)
      const maxQuestions = 8;

      // Select a subset of journalists for this press conference
      const selectedJournalists = journalists
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(journalists.length, maxQuestions));

      // Prepare question data for each selected journalist
      const preparedQuestions = selectedJournalists.map((journalist, index) => {
        // Randomly assign a situation to this question
        const situation =
          situations[Math.floor(Math.random() * situations.length)];

        // Find mock questions appropriate for this situation type
        const mockQuestionsForType = mockQuestions.filter(
          (q) => q.situationType === situation.type
        );

        // Select a random mock question or fallback to a generic one
        const mockQuestion =
          mockQuestionsForType.length > 0
            ? mockQuestionsForType[
                Math.floor(Math.random() * mockQuestionsForType.length)
              ]
            : mockQuestions[0];

        // Format the question text with situation details
        const questionText = mockQuestion.text
          .replace("{situation_title}", situation.title)
          .replace("{situation_description}", situation.description);

        // Format the question data with situation details
        const questionData = JSON.parse(JSON.stringify(mockQuestion.data));
        questionData.text = questionText;

        // Prepare the question record data
        return {
          level,
          situation,
          journalist,
          questionText,
          questionData: JSON.stringify(questionData),
          displayOrder: index,
        };
      });

      const questions = await createQuestionsForPressConference(
        preparedQuestions
      );
      return questions;
    },

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

        // Get Situations Info
        const activeSituationsInfo = level.parseActiveSituations;
        if (!activeSituationsInfo || activeSituationsInfo.length === 0) {
          throw new Error("No active situations found for this level");
        }
        const situationPromises = activeSituationsInfo.map(
          async (info) => await fetchSituationById(info.id)
        );
        const situations = await Promise.all(situationPromises);
        console.log("situations", situations);

        // Get Journalists Info
        const journalists = await fetchActiveJournalistsForGame(level.game_id);
        if (!journalists || journalists.length === 0) {
          throw new Error("No active journalists found for this game");
        }
        console.log("journalists", journalists);
        if (level.status === LevelStatus.Briefing) {
          await get().generateQuestions({ level, situations, journalists });
          await updateLevelStatus(currentLevelId, LevelStatus.PressConference);
        }

        set({ isLoading: false, error: null });
        return level;
      } catch (error) {
        console.error("Failed to update level to press conference:", error);
        set({ isLoading: false, error: String(error) });
        return null;
      }
    },
  })
);
