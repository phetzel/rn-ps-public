import { useRouter } from "expo-router";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

// DB
import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
// Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// Components
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
// Icons
import { ArrowRight } from "~/lib/icons/ArrowRight";
// Types
import { LevelStatus } from "~/types";

interface NextLevelButtonProps {
  gameId: string;
  levelId: string;
  level: Level;
}

const NextLevelButton = ({ gameId, levelId, level }: NextLevelButtonProps) => {
  const router = useRouter();
  const { currentLevelId, progressCurrentLevel } = useCurrentLevelStore(
    (state) => ({
      currentLevelId: state.currentLevelId,
      progressCurrentLevel: state.progressCurrentLevel,
    })
  );

  // Handle complete situation results
  const handleComplete = async () => {
    try {
      if (level.status === LevelStatus.Completed) {
        await progressCurrentLevel();
      }

      router.push(`/games/${gameId}/(tabs)/current`);
    } catch (error) {
      console.error("Failed to complete situation outcomes:", error);
    }
  };

  return (
    <View className="mt-4">
      <Button onPress={handleComplete} className="flex-row gap-2">
        <Text>Complete</Text>
        <ArrowRight className="h-4 w-4 text-muted-foreground" />
      </Button>
    </View>
  );
};

const enhance = withObservables(["gameId", "levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(NextLevelButton);
