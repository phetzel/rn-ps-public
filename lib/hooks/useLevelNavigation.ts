import { useRouter } from "expo-router";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import { LevelStatus } from "~/types";

export function useLevelNavigation() {
  const router = useRouter();
  const { currentGameId } = useGameManagerStore((state) => ({
    currentGameId: state.currentGameId,
  }));

  const { currentLevelId, getCurrentLevel, progressCurrentLevel } =
    useCurrentLevelStore((state) => ({
      currentLevelId: state.currentLevelId,
      getCurrentLevel: state.getCurrentLevel,
      progressCurrentLevel: state.progressCurrentLevel,
    }));

  /**
   * Navigate to specific level screen based on status
   */
  const navigateToLevelScreen = async (status: LevelStatus) => {
    if (!currentGameId) {
      console.warn("No game ID available");
      return false;
    }
    try {
      // Type-safe approach to navigate based on status
      switch (status) {
        case LevelStatus.Briefing:
          router.replace(`/games/${currentGameId}/level-briefing`);
          break;
        case LevelStatus.PressConference:
          router.replace(`/games/${currentGameId}/level-press-conference`);
          break;
        case LevelStatus.PressResults:
          router.replace(`/games/${currentGameId}/level-press-outcomes`);
          break;
        case LevelStatus.SituationOutcomes:
          router.replace(`/games/${currentGameId}/level-situation-outcomes`);
          break;
        case LevelStatus.Completed:
          router.replace(`/games/${currentGameId}/level-complete`);
          break;
        default:
          console.warn(`Unknown level status: ${status}`);
          return false;
      }
      return true;
    } catch (error) {
      console.error("Failed to navigate to level screen:", error);
      return false;
    }
  };

  /**
   * Navigate to the current level's screen based on its status
   */
  const navigateToCurrentLevelScreen = async () => {
    try {
      const level = await getCurrentLevel();
      if (!level) {
        console.warn("No current level found");
        return false;
      }

      return navigateToLevelScreen(level.status);
    } catch (error) {
      console.error("Failed to navigate to current level screen:", error);
      return false;
    }
  };

  /**
   * Progress the current level to the next status and navigate to it
   */
  const progressAndNavigate = async () => {
    try {
      const updatedLevel = await progressCurrentLevel();
      if (!updatedLevel) {
        console.warn("Failed to progress level");
        return false;
      }

      return navigateToLevelScreen(updatedLevel.status);
    } catch (error) {
      console.error("Failed to progress and navigate:", error);
      return false;
    }
  };

  /**
   * Navigate to game tabs
   */
  const navigateToTabs = (tab: "current" | "state" | "archive" = "current") => {
    if (!currentGameId) {
      console.warn("No game ID available");
      return false;
    }

    router.replace(`/games/${currentGameId}/(tabs)/${tab}`);
    return true;
  };

  /**
   * Go back to current tab from level screens
   */
  const backToCurrentTab = () => {
    if (!currentGameId) {
      console.warn("No game ID available");
      return false;
    }

    router.navigate(`/games/${currentGameId}/(tabs)/current`);
    return true;
  };

  return {
    // Basic navigation
    navigateToCurrentTab: () => navigateToTabs("current"),
    navigateToStateTab: () => navigateToTabs("state"),
    navigateToArchiveTab: () => navigateToTabs("archive"),
    backToCurrentTab,

    // Level flow navigation
    navigateToBriefing: () => navigateToLevelScreen(LevelStatus.Briefing),
    navigateToPressConference: () =>
      navigateToLevelScreen(LevelStatus.PressConference),
    navigateToPressOutcomes: () =>
      navigateToLevelScreen(LevelStatus.PressResults),
    navigateToSituationOutcomes: () =>
      navigateToLevelScreen(LevelStatus.SituationOutcomes),
    navigateToLevelComplete: () => navigateToLevelScreen(LevelStatus.Completed),

    // Dynamic navigation based on current level
    navigateToCurrentLevelScreen,

    // Level progression
    progressAndNavigate,
  };
}
