import { create } from 'zustand';

import {
  // Fetch API
  fetchLevel,
  fetchLastLevel,
  // Level API
  isGameEnded,
  createLevel,
  updateLevelStatus,
  // Situation API
  createSituationsForLevel,
  selectSituationsForLevel,
  determineSituationOutcomes,
  // Snapshot API
  takeSnapshot,
  // Press Conference API
  calculatePressConferenceRawEffects,
  // Relationship API
  applyRelationshipDeltas,
  applySituationConsequences,
  // Consequence API
  calculateAndApplyConsequences,
  hireReplacementCabinetMembers,
} from '~/lib/db/helpers';
import { Game, Level, Situation } from '~/lib/db/models';
import { LevelStatus, OutcomeSnapshotType, GameStatus } from '~/types';

interface CurrentLevelStoreState {
  currentLevelId: string | null;
  activeSituations: Situation[];

  // --- Action State ---
  isLoading: boolean;
  error: string | null;

  // --- Base Actions ---
  setCurrentLevelId: (id: string | null) => void;
  getCurrentLevel: () => Promise<Level | null>;
  setGameCurrentLevel: (gameId: string) => Promise<Level | null>;

  // --- Level Progression Actions ---
  createNewLevel: (game: Game) => Promise<Level | null>;
  progressCurrentLevel: () => Promise<Level | null>;
  applyPressOutcomes: ({ level }: { level: Level }) => Promise<void>;
  applySituationOutcomes: ({ level }: { level: Level }) => Promise<void>;
}

export const useCurrentLevelStore = create<CurrentLevelStoreState>((set, get) => ({
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
      console.error('Failed to fetch current level:', error);
      set({
        error: `Failed to fetch level: ${error instanceof Error ? error.message : String(error)}`,
        isLoading: false,
      });
      return null;
    }
  },

  createNewLevel: async (game: Game) => {
    set({ isLoading: true, error: null });

    try {
      // Check if game has ended
      if (isGameEnded(game.status)) {
        const endReason =
          game.status === GameStatus.Impeached
            ? 'impeachment'
            : game.status === GameStatus.Fired
              ? 'firing'
              : 'completion';
        set({
          isLoading: false,
          error: `Cannot create new level: Game has ended due to ${endReason}.`,
        });
        return null;
      }

      // 1. Check if we need to hire replacement cabinet members
      const previousLevel = await fetchLastLevel(game.id);
      if (previousLevel) {
        const consequences = previousLevel.parseOutcomeSnapshot?.consequences;
        if (consequences && consequences.cabinetMembersFired.length > 0) {
          await hireReplacementCabinetMembers(game.id, consequences.cabinetMembersFired);
        }
      }

      // 2. Advance the game month
      await game.advanceMonth();

      // 3. Select situations for the level
      const selectedSituations = await selectSituationsForLevel(game, 2);

      // 4. Create the level
      const newLevel = await createLevel(game);

      // 5. Create the situations in the database
      await createSituationsForLevel(game, newLevel, selectedSituations);

      // 6. Get the static keys of the selected situations for tracking
      const situationKeys = selectedSituations
        .map((situation) => situation.trigger?.staticKey)
        .filter((key) => key) as string[];

      // 7. Update the game's used situations
      await game.addUsedSituations(situationKeys);

      // 7. Take initial snapshot
      const initialSnapshot = await takeSnapshot(game.id);

      // 8. Create initial level outcome snapshot
      const outcomeSnapshot: OutcomeSnapshotType = {
        initial: initialSnapshot,
      };
      await newLevel.updateOutcomeSnapshot(outcomeSnapshot);

      if (newLevel) {
        set({ currentLevelId: newLevel.id, isLoading: false, error: null });
        return newLevel;
      } else {
        throw new Error('Failed to create new level');
      }
    } catch (error) {
      console.error('Failed to create new level:', error);
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
      throw new Error('No current level ID found');
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
        await updateLevelStatus(currentLevelId, LevelStatus.SituationOutcomes);
      } else if (level.status === LevelStatus.SituationOutcomes) {
        await get().applySituationOutcomes({ level });
        await updateLevelStatus(currentLevelId, LevelStatus.Completed);
      } else if (level.status === LevelStatus.Completed) {
        const game = await level.game;
        const newLevel = await get().createNewLevel(game);

        if (newLevel) {
          await get().setCurrentLevelId(newLevel.id);
        }
      }

      set({ isLoading: false, error: null });
      return level;
    } catch (error) {
      console.error('Failed to update level to press conference:', error);
      set({ isLoading: false, error: String(error) });
      return null;
    } finally {
      set({ isLoading: false, error: null });
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
    await applyRelationshipDeltas(gameId, psRelationshipDeltas, level.pressAdWatched);

    // Determine outcomes for situations
    await determineSituationOutcomes(level.id, situationOutcomeWeightDeltas);
  },

  applySituationOutcomes: async ({ level }: { level: Level }) => {
    // Get the game ID
    const gameId = level.game_id;

    // Apply consequences to game entities
    await applySituationConsequences(gameId, level.id, level.situationAdWatched);

    const consequenceResult = await calculateAndApplyConsequences(gameId);

    // Take final snapshot
    const initialSnapshot = level.parseOutcomeSnapshot?.initial;
    const finalSnapshot = await takeSnapshot(gameId);

    if (initialSnapshot && finalSnapshot) {
      const outcomeSnapshot: OutcomeSnapshotType = {
        initial: initialSnapshot,
        final: finalSnapshot,
        consequences: consequenceResult,
      };
      await level.updateOutcomeSnapshot(outcomeSnapshot);
    }
  },
}));
