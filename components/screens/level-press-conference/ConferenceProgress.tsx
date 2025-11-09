import { View } from 'react-native';

import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';

interface ProgressBarProps {
  answeredCount: number;
  maxQuestions: number;
}

export default function ProgressBar({ answeredCount, maxQuestions }: ProgressBarProps) {
  const progressPercentage = maxQuestions > 0 ? (answeredCount / maxQuestions) * 100 : 0;
  const remainingQuestions = maxQuestions - answeredCount;

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`Press conference progress: ${answeredCount} questions answered out of ${maxQuestions}. ${remainingQuestions} questions remaining.`}
    >
      <View className="flex-row justify-between items-center">
        <Text
          className="text-sm font-medium"
          accessibilityLabel={`${answeredCount} of ${maxQuestions} questions answered`}
        >
          Questions Answered: {answeredCount} of {maxQuestions}
        </Text>
        <Text
          className="text-sm text-muted-foreground"
          accessibilityLabel={`${remainingQuestions} questions remaining`}
        >
          {remainingQuestions} remaining
        </Text>
      </View>
      <Progress
        value={progressPercentage}
        className="h-2"
        accessibilityLabel={`Press conference progress: ${Math.round(
          progressPercentage,
        )}% complete`}
        accessibilityValue={{
          min: 0,
          max: 100,
          now: progressPercentage,
          text: `${Math.round(progressPercentage)}% complete`,
        }}
      />
    </View>
  );
}
