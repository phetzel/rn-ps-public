import React from 'react';
import { View } from 'react-native';

import { CheckCircle2 } from '~/components/icons/CheckCircle2';
import { Text } from '~/components/ui/text';

interface AnswerDisplayProps {
  answer: string;
}

export function AnswerDisplay({ answer }: AnswerDisplayProps) {
  return (
    <View
      className="flex-row items-center"
      accessible={true}
      accessibilityLabel={`Your response: ${answer}`}
    >
      <View className="bg-green-100 rounded-full p-2 mr-3">
        <CheckCircle2 className="text-green-600" accessibilityLabel="Response given indicator" />
      </View>
      <View className="flex-1" accessible={false}>
        <Text className="text-sm text-muted-foreground mb-1" accessibilityLabel="Response label">
          Your Response
        </Text>
        <Text className="text-base" accessible={false}>
          {answer}
        </Text>
      </View>
    </View>
  );
}
