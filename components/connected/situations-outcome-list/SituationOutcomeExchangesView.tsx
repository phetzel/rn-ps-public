import React, { useMemo } from 'react';
import { View } from 'react-native';

import SituationOutcomeExchangeItem from '~/components/connected/situations-outcome-list/SituationOutcomeExchangeItem';
import { Text } from '~/components/ui/text';
import { findQuestionById } from '~/lib/utils';

import type { SituationOutcome } from '~/types';
import type { PressExchange } from '~/types/view-models';

interface SituationOutcomeExchangesViewProps {
  pressExchanges: PressExchange[];
  selectedOutcome: SituationOutcome;
  allOutcomes: SituationOutcome[];
}

export function SituationOutcomeExchangesView({
  pressExchanges,
  selectedOutcome,
  allOutcomes,
}: SituationOutcomeExchangesViewProps) {
  const filteredExchanges = useMemo(() => {
    return pressExchanges.filter((exchange) => {
      const content = exchange.parseContent;
      const progress = exchange.parseProgress;

      if (!content || !progress) return false;

      for (const item of progress.history) {
        if (item.skipped || !item.answerId) continue;

        const question = findQuestionById(item.questionId, content);
        if (!question) continue;

        const answer = question.answers.find((a) => a.id === item.answerId);
        if (!answer || !answer.outcomeModifiers) continue;

        if (Object.values(answer.outcomeModifiers).some((mod) => mod !== 0)) {
          return true;
        }
      }

      return false;
    });
  }, [pressExchanges]);

  if (filteredExchanges.length === 0) {
    return (
      <View className="py-2">
        <Text
          className="text-sm text-muted-foreground"
          accessible={true}
          accessibilityLabel="No press conference responses affected this outcome"
        >
          No press conference responses affected this outcome.
        </Text>
      </View>
    );
  }

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`${filteredExchanges.length} press exchanges that influenced outcome probabilities`}
    >
      {filteredExchanges.map((exchange, index) => (
        <SituationOutcomeExchangeItem
          key={`${exchange.id}-${index}`}
          exchange={exchange}
          allOutcomes={allOutcomes}
          selectedOutcomeId={selectedOutcome.id}
        />
      ))}
    </View>
  );
}
