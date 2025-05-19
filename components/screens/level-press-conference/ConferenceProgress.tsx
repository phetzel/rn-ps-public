import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";

interface ProgressBarProps {
  answeredCount: number;
  maxQuestions: number;
}

export default function ProgressBar({
  answeredCount,
  maxQuestions,
}: ProgressBarProps) {
  const progressPercentage =
    maxQuestions > 0 ? (answeredCount / maxQuestions) * 100 : 0;
  const remainingQuestions = maxQuestions - answeredCount;

  return (
    <View className="gap-2">
      <View className="flex-row justify-between items-center">
        <Text className="text-sm font-medium">
          Questions Answered: {answeredCount} of {maxQuestions}
        </Text>
        <Text className="text-sm text-muted-foreground">
          {remainingQuestions} remaining
        </Text>
      </View>
      <Progress value={progressPercentage} className="h-2" />
    </View>
  );
}
