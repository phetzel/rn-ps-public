import { withObservables } from '@nozbe/watermelondb/react';
import { View } from 'react-native';

import LevelOverviewContent from '~/components/shared/level-overview/LevelOverviewContent';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { observeLevel } from '~/lib/db/helpers/observations';
import { useLevelNavigation } from '~/lib/hooks/useLevelNavigation';
// Components
// Types
import { LevelStatus } from '~/types';

import type { Level } from '~/lib/db/models';

interface LevelCompleteContentProps {
  gameId: string;
  levelId: string;
  level: Level;
}

const LevelCompleteContent = ({ gameId: _gameId, levelId, level }: LevelCompleteContentProps) => {
  const { progressAndNavigate, navigateToCurrentLevelScreen, navigateToCurrentTab } =
    useLevelNavigation();

  const snapshot = level.parseOutcomeSnapshot;

  if (!snapshot) {
    return null;
  }

  const isLevelGameOver = snapshot.consequences?.gameEnded || false;

  const handleComplete = async () => {
    try {
      if (isLevelGameOver) {
        return await navigateToCurrentTab();
      } else {
        if (level.status === LevelStatus.Completed) {
          await progressAndNavigate();
          await navigateToCurrentTab();
        } else {
          await navigateToCurrentLevelScreen();
        }
      }
    } catch (error) {
      console.error('Failed to complete level:', error);
    }
  };

  return (
    <View className="gap-4">
      <LevelOverviewContent levelId={levelId} />

      {/* Completion Button - only show if game is not over */}
      {!isLevelGameOver && (
        <View className="pt-4 border-t border-border">
          <Button
            onPress={handleComplete}
            className="w-full"
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Continue to next month"
            accessibilityHint="Proceed to the next month after reviewing level results"
          >
            <Text accessible={false}>Proceed to next month</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

const enhance = withObservables(['gameId', 'levelId'], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(LevelCompleteContent);
