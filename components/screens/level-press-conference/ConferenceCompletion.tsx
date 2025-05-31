import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeLevel } from "~/lib/db/helpers/observations";
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
import { Level } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { LevelStatus } from "~/types";

interface ConferenceCompletionProps {
  levelId: string;
  level: Level | null;
}

const ConferenceCompletion = ({
  levelId,
  level,
}: ConferenceCompletionProps) => {
  const { progressAndNavigate, navigateToCurrentLevelScreen } =
    useLevelNavigation();

  const handleComplete = async () => {
    if (!level) return;
    try {
      if (level.status == LevelStatus.PressConference) {
        await progressAndNavigate();
      } else {
        await navigateToCurrentLevelScreen();
      }
    } catch (error) {
      console.error("Failed to start press conference:", error);
    }
  };

  return (
    <View
      className="flex-1 justify-center items-center gap-6 py-24"
      accessible={true}
      accessibilityLabel="Press conference completed successfully"
    >
      <View
        className="items-center"
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel="Press conference completion message"
      >
        <Text className="text-2xl font-bold text-center mb-2">
          Press Conference Complete
        </Text>
        <Text className="text-center text-muted-foreground">
          You've taken all the questions from the press.
        </Text>
      </View>

      <Button
        onPress={handleComplete}
        className="px-8 py-3"
        accessibilityLabel="Complete press conference and proceed to results"
        accessibilityHint="Navigate to see the outcomes of your press conference answers"
      >
        <Text className="text-white font-semibold">Complete</Text>
      </Button>
    </View>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(ConferenceCompletion);
