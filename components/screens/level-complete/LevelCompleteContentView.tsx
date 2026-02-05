import { View } from 'react-native';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { useLevelNavigation } from '~/lib/hooks/useLevelNavigation';
import { LevelStatus } from '~/types';

import type { Level } from '~/types/view-models';

interface LevelCompleteContentViewProps {
  gameId: string;
  levelId: string;
  level: Level;
  renderLevelOverviewContent: (levelId: string) => React.ReactNode;
}

export function LevelCompleteContentView({
  gameId: _gameId,
  levelId,
  level,
  renderLevelOverviewContent,
}: LevelCompleteContentViewProps) {
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
      }

      if (level.status === LevelStatus.Completed) {
        await progressAndNavigate();
        await navigateToCurrentTab();
      } else {
        await navigateToCurrentLevelScreen();
      }
    } catch (error) {
      console.error('Failed to complete level:', error);
    }
  };

  return (
    <View className="gap-4">
      {renderLevelOverviewContent(levelId)}

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
}
