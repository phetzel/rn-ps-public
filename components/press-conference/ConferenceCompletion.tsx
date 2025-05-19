import React, { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import { fetchLevel } from "~/lib/db/helpers";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";

interface ConferenceCompletionProps {
  levelId: string;
}

const ConferenceCompletion = ({ levelId }: ConferenceCompletionProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const progressCurrentLevel = useCurrentLevelStore(
    (state) => state.progressCurrentLevel
  );

  const handleCompleteConference = async () => {
    if (!levelId) return;
    setIsSubmitting(true);
    try {
      const level = await fetchLevel(levelId);
      if (!level) return;

      await progressCurrentLevel();
      router.replace(`/games/${level.game_id}/level-press-outcomes`);
    } catch (error) {
      console.error("Error completing press conference:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="flex-1 items-center gap-4 py-4">
      <Text className="text-center text-lg font-bold">
        Press Conference Complete
      </Text>
      <Text className="text-center text-muted-foreground mb-4">
        You've taken all the questions from the press.
      </Text>
      <Button
        onPress={handleCompleteConference}
        className="px-6 py-2"
        disabled={isSubmitting}
      >
        <Text className="text-white font-semibold">Complete</Text>
      </Button>
    </View>
  );
};

export default ConferenceCompletion;
