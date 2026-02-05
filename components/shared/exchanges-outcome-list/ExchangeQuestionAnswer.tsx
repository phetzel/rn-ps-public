import React from 'react';
import { View } from 'react-native';

import { SkipForward } from '~/components/icons/SkipForward';
import { AnswerDisplay } from '~/components/shared/entity/AnswerDisplay';
import { Text } from '~/components/ui/text';

import type { Question } from '~/types';

interface ExchangeQuestionAnswerProps {
  answer: Question['answers'][0] | null;
  isSkipped: boolean;
}

export default function ExchangeQuestionAnswer({ answer, isSkipped }: ExchangeQuestionAnswerProps) {
  if (isSkipped) {
    // Question was skipped
    return (
      <View
        className="flex-row items-center"
        accessible={true}
        accessibilityLabel="Question was skipped during the press conference"
      >
        <View className="bg-amber-100 rounded-full p-2 mr-3">
          <SkipForward className="text-amber-500" accessibilityLabel="Skip indicator" />
        </View>
        <View className="flex-1" accessible={false}>
          <Text className="font-medium" accessible={false}>
            Question Skipped
          </Text>
          <Text className="text-sm text-muted-foreground mt-1" accessible={false}>
            You chose to skip this question during the press conference.
          </Text>
        </View>
      </View>
    );
  } else if (answer) {
    // Question was answered
    return <AnswerDisplay answer={answer.text} />;
  }

  return null;
}
