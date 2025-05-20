// lib/hooks/useGameNavigation.ts
import { useRouter } from "expo-router";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import type { NewGameDetails } from "~/types";
import type Game from "~/lib/db/models/Game";

export function useGameNavigation() {
  const router = useRouter();
  const { currentGameId, setCurrentGameId, createAndStartGame } =
    useGameManagerStore((state) => ({
      currentGameId: state.currentGameId,
      setCurrentGameId: state.setCurrentGameId,
      createAndStartGame: state.createAndStartGame,
    }));
  const { setGameCurrentLevel, createNewLevel } = useCurrentLevelStore(
    (state) => ({
      setGameCurrentLevel: state.setGameCurrentLevel,
      createNewLevel: state.createNewLevel,
    })
  );

  /**
   * Navigate to a specific game's current tab
   */
  const continueGame = async (gameId?: string, activeGames?: Game[]) => {
    try {
      // Use provided gameId, current game from store, or single active game
      const targetGameId =
        gameId ||
        currentGameId ||
        (activeGames && activeGames.length === 1 ? activeGames[0].id : null);

      if (!targetGameId) {
        console.warn("No game ID available to continue");
        return false;
      }

      // Set as current game if not already
      if (currentGameId !== targetGameId) {
        setCurrentGameId(targetGameId);
      }

      // Load the current level for this game
      const level = await setGameCurrentLevel(targetGameId);

      if (level) {
        router.replace(`/games/${targetGameId}/(tabs)/current`);
        return true;
      } else {
        console.warn("No level found for game", targetGameId);
        return false;
      }
    } catch (error) {
      console.error("Failed to continue game:", error);
      return false;
    }
  };

  /**
   * Create a new game and navigate to it
   */
  const createGame = async (details: NewGameDetails) => {
    try {
      const newGame = await createAndStartGame(details);

      if (newGame) {
        const newLevel = await createNewLevel(newGame);
        if (newLevel) {
          router.replace(`/games/${newGame.id}/(tabs)/current`);
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error("Failed to create and navigate to game:", error);
      return false;
    }
  };

  return {
    // Navigation functions
    goToHome: () => router.navigate("/"),
    goToGamesList: () => router.navigate("/games"),
    goToCreateGame: () => router.navigate("/games/create"),
    continueGame,
    createGame,
  };
}
