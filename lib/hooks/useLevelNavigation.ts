import { useRouter } from 'expo-router';
import { useShallow } from 'zustand/shallow';

import { useCurrentLevelStore } from '~/lib/stores/currentLevelStore';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';
import { LevelStatus } from '~/types';

export function useLevelNavigation() {
  const router = useRouter();
  const currentGameId = useGameManagerStore((state) => state.currentGameId);
  const levelRouteMap: Record<LevelStatus, string> = {
    [LevelStatus.Briefing]: 'level-briefing',
    [LevelStatus.PressConference]: 'level-press-conference',
    [LevelStatus.PressResults]: 'level-press-outcomes',
    [LevelStatus.SituationOutcomes]: 'level-situation-outcomes',
    [LevelStatus.Completed]: 'level-complete',
  };

  const { getCurrentLevel, progressCurrentLevel } = useCurrentLevelStore(
    useShallow((state) => ({
      getCurrentLevel: state.getCurrentLevel,
      progressCurrentLevel: state.progressCurrentLevel,
    })),
  );

  /**
   * Navigate to specific level screen based on status
   */
  const navigateToLevelScreen = async (status: LevelStatus, fromCurrentTab = false) => {
    if (!currentGameId) {
      console.warn('No game ID available');
      return false;
    }
    const route = levelRouteMap[status];
    if (!route) {
      console.warn(`Unknown level status: ${status}`);
      return false;
    }

    const navigate = fromCurrentTab ? router.push : router.replace;
    try {
      navigate(`/games/${currentGameId}/current/${route}`);
      return true;
    } catch (error) {
      console.error('Failed to navigate to level screen:', error);
      return false;
    }
  };

  /**
   * Navigate to the current level's screen based on its status
   */
  const navigateToCurrentLevelScreen = async (fromCurrentTab = false) => {
    try {
      const level = await getCurrentLevel();
      if (!level) {
        console.warn('No current level found');
        return false;
      }

      return navigateToLevelScreen(level.status, fromCurrentTab);
    } catch (error) {
      console.error('Failed to navigate to current level screen:', error);
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
        console.warn('Failed to progress level');
        return false;
      }

      return navigateToLevelScreen(updatedLevel.status);
    } catch (error) {
      console.error('Failed to progress and navigate:', error);
      return false;
    }
  };

  /**
   * Navigate to game tabs
   */
  const navigateToTabs = (tab: 'current' | 'state' | 'archive' = 'current') => {
    if (!currentGameId) {
      console.warn('No game ID available');
      return false;
    }

    router.navigate(`/games/${currentGameId}/${tab}`);
    return true;
  };

  return {
    // Basic navigation
    navigateToCurrentTab: () => navigateToTabs('current'),
    navigateToStateTab: () => navigateToTabs('state'),
    navigateToArchiveTab: () => navigateToTabs('archive'),

    // Level flow navigation
    navigateToBriefing: () => navigateToLevelScreen(LevelStatus.Briefing),
    navigateToPressConference: () => navigateToLevelScreen(LevelStatus.PressConference),
    navigateToPressOutcomes: () => navigateToLevelScreen(LevelStatus.PressResults),
    navigateToSituationOutcomes: () => navigateToLevelScreen(LevelStatus.SituationOutcomes),
    navigateToLevelComplete: () => navigateToLevelScreen(LevelStatus.Completed),

    // Dynamic navigation based on current level
    navigateToCurrentLevelScreen,

    // Level progression
    progressAndNavigate,
  };
}
