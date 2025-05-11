import { create } from "zustand";

import {
  // Level API
  createLevel,
  fetchLevel,
  fetchLastLevel,
  updateLevelStatus,
  // Situation API
  createSituationsForLevel,
  selectSituationsForLevel,
  determineSituationOutcomes,
  // Entity API
  takeSnapshot,
  fetchGameEntities,
  // Press Conference API
  calculatePressConferenceRawEffects,
  // Relationship API
  applyRelationshipDeltas,
  applySituationConsequences,
} from "~/lib/db/helpers";

import { Game, Level, Situation } from "~/lib/db/models";
import { LevelStatus, OutcomeSnapshotType } from "~/types";

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
  applyPressOutcomes: ({ level }: { level: Level }) => Promise<void>;
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
        // 1. Advance the game month
        await game.advanceMonth();

        // 2. Select situations for the level
        const selectedSituations = await selectSituationsForLevel(game, 2);

        // 3. Create the level
        const newLevel = await createLevel(game);

        // 4. Create the situations in the database
        const createdSituations = await createSituationsForLevel(
          game,
          newLevel,
          selectedSituations
        );

        // 5. Get the static keys of the selected situations for tracking
        const situationKeys = selectedSituations
          .map((situation) => situation.trigger?.staticKey)
          .filter((key) => key) as string[];

        // 6. Update the game's used situations
        await game.addUsedSituations(situationKeys);

        // 7. Take initial snapshot
        const initialSnapshot = await takeSnapshot(game.id);

        // 6. Create initial level outcome snapshot
        const outcomeSnapshot: OutcomeSnapshotType = {
          initial: initialSnapshot,
        };
        await newLevel.updateOutcomeSnapshot(outcomeSnapshot);

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
          await updateLevelStatus(currentLevelId, LevelStatus.PressConference);
        } else if (level.status === LevelStatus.PressConference) {
          await updateLevelStatus(currentLevelId, LevelStatus.PressResults);
        } else if (level.status === LevelStatus.PressResults) {
          await get().applyPressOutcomes({ level });
          await updateLevelStatus(
            currentLevelId,
            LevelStatus.SituationOutcomes
          );
        } else if (level.status === LevelStatus.SituationOutcomes) {
          await updateLevelStatus(currentLevelId, LevelStatus.Completed);
        }

        set({ isLoading: false, error: null });
        return level;
      } catch (error) {
        console.error("Failed to update level to press conference:", error);
        set({ isLoading: false, error: String(error) });
        return null;
      }
    },

    // --- Outcome Progression ---
    applyPressOutcomes: async ({ level }: { level: Level }) => {
      // Get the game ID
      const gameId = level.game_id;

      //  Calculate impacts from exchanges
      const { psRelationshipDeltas, situationOutcomeWeightDeltas } =
        await calculatePressConferenceRawEffects(level.id);

      // Apply impacts to game entities
      await applyRelationshipDeltas(gameId, psRelationshipDeltas);

      // Determine outcomes for situations
      await determineSituationOutcomes(level.id, situationOutcomeWeightDeltas);
    },

    applyOutcomes: async ({ level }: { level: Level }) => {
      // Get the game ID
      const gameId = level.game_id;

      // // 1. Take initial snapshot
      // const initialSnapshot = await takeSnapshot(gameId);

      // 2. Calculate impacts from exchanges
      // const { psRelationshipDeltas, situationOutcomeWeightDeltas } =
      //   await calculatePressConferenceRawEffects(level.id);

      // // 3. Apply impacts to game entities
      // await applyRelationshipDeltas(gameId, psRelationshipDeltas);

      // 4. Determine outcomes for situations
      // await determineSituationOutcomes(level.id, situationOutcomeWeightDeltas);

      // 5. Apply consequences to game entities
      // await applySituationConsequences(gameId, level.id);

      // 6. Take final snapshot
      // const finalSnapshot = await takeSnapshot(gameId);

      // 6. Create outcome snapshot
      // const outcomeSnapshot: OutcomeSnapshotType = {
      //   initial: initialSnapshot,
      //   final: finalSnapshot,
      // };

      // await level.updateOutcomeSnapshot(outcomeSnapshot);
    },
  })
);
