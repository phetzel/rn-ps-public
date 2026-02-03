import React from 'react';
import { View } from 'react-native';

// Store
import ExchangeQuestionAnswer from '~/components/shared/exchanges-outcome-list/ExchangeQuestionAnswer';
import ExchangeQuestionHeader from '~/components/shared/exchanges-outcome-list/ExchangeQuestionHeader';
import ImpactList from '~/components/shared/impact/ImpactList';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { useExchangeQuestion } from '~/lib/hooks/useExchangeQuestion';
import { useCurrentLevelStore } from '~/lib/stores/currentLevelStore';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

// Hooks
// Components
// Types
import type { Question, ExchangeHistoryItem, JournalistStaticId } from '~/types';

interface ExchangeQuestionItemProps {
  question: Question;
  interaction?: ExchangeHistoryItem;
  isFirstQuestion: boolean;
  journalistStaticId: JournalistStaticId;
}

export default function ExchangeQuestionItem({
  question,
  interaction,
  isFirstQuestion,
  journalistStaticId,
}: ExchangeQuestionItemProps) {
  const { currentLevelId } = useCurrentLevelStore();
  const { currentGameId } = useGameManagerStore();

  const { answer, isAsked, isSkipped, combinedImpacts } = useExchangeQuestion({
    question,
    interaction,
    isFirstQuestion,
    journalistStaticId,
  });
  let questionStatus = 'Ignored';
  if (isAsked) {
    questionStatus = isSkipped ? 'Skipped' : 'Answered';
  }

  if (!currentLevelId || !currentGameId) {
    return null;
  }

  return (
    <View
      className="border border-border rounded-md p-2 gap-2"
      accessible={true}
      accessibilityLabel={`${isFirstQuestion ? 'Initial' : 'Follow-up'} question. ${
        questionStatus
      }.`}
    >
      {/* Question Header */}
      <ExchangeQuestionHeader
        question={question}
        isFirstQuestion={isFirstQuestion}
        isAsked={isAsked}
      />

      {/* Answer */}
      {isAsked && <Separator />}
      {isAsked && <ExchangeQuestionAnswer answer={answer ?? null} isSkipped={!!isSkipped} />}

      {/* Impacts */}
      <View
        className="gap-2"
        accessible={true}
        accessibilityLabel={`Relationship change impacts from this interaction`}
      >
        <Separator />
        <Text className="text-center text-lg font-semibold" accessibilityRole="header">
          Relationship Changes
        </Text>
        <ImpactList gameId={currentGameId} levelId={currentLevelId} impacts={combinedImpacts} />
      </View>
    </View>
  );
}
