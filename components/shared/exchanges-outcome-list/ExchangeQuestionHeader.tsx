import React from 'react';
import { View } from 'react-native';

import { AlertCircle } from '~/components/icons/AlertCircle';
import { QuestionDisplay } from '~/components/shared/entity/QuestionDisplay';
import { Text } from '~/components/ui/text';

import type { Question } from '~/types';

interface ExchangeQuestionHeaderProps {
  question: Question;
  isFirstQuestion: boolean;
  isAsked: boolean;
}

export default function ExchangeQuestionHeader({
  question,
  isFirstQuestion,
  isAsked,
}: ExchangeQuestionHeaderProps) {
  if (!isAsked && isFirstQuestion) {
    // Journalist was completely ignored
    return (
      <View
        className="flex-row items-center gap-2"
        accessible={true}
        accessibilityLabel="Journalist was ignored - not called on during the press conference"
      >
        <View className="bg-red-100 rounded-full p-2">
          <AlertCircle className="text-red-600" accessibilityLabel="Warning indicator" />
        </View>
        <View className="flex-1" accessible={false}>
          <Text className="text-base font-medium" accessible={false}>
            Journalist Ignored
          </Text>
          <Text className="text-sm text-muted-foreground" accessible={false}>
            You did not call on this journalist during the press conference.
          </Text>
        </View>
      </View>
    );
  } else if (!isAsked) {
    // Unanswered follow-up
    return (
      <View
        className="flex-row items-center gap-2"
        accessible={true}
        accessibilityLabel="Follow-up question was ignored and not addressed"
      >
        <View className="bg-red-100 rounded-full p-2">
          <AlertCircle className="text-red-600" accessibilityLabel="Warning indicator" />
        </View>
        <View className="flex-1" accessible={false}>
          <Text className="text-base font-medium" accessible={false}>
            Follow-up Question Ignored
          </Text>
          <Text className="text-sm text-muted-foreground" accessible={false}>
            The journalist had a follow-up question that was not addressed.
          </Text>
        </View>
      </View>
    );
  } else {
    // Question was asked
    return <QuestionDisplay question={question.text} isFollowUpQuestion={!isFirstQuestion} />;
  }
}
