import React, { useMemo } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observePressExchangesForSituation } from "~/lib/db/helpers/observations";
import { findQuestionById } from "~/lib/db/helpers/exchangeApi";
// Components
import { Text } from "~/components/ui/text";
import SituationOutcomeExchangeItem from "~/components/shared/situations-outcome-list/SituationOutcomeExchangeItem";
// Types
import type { PressExchange } from "~/lib/db/models";
import type { SituationOutcome } from "~/types";

interface SituationOutcomeExchangesProps {
  pressExchanges: PressExchange[];
  selectedOutcome: SituationOutcome;
  allOutcomes: SituationOutcome[];
}

const SituationOutcomeExchanges = ({
  pressExchanges,
  selectedOutcome,
  allOutcomes,
}: SituationOutcomeExchangesProps) => {
  // Filter exchanges that affected ANY outcome using useMemo
  const filteredExchanges = useMemo(() => {
    return pressExchanges.filter((exchange) => {
      const content = exchange.parseContent;
      const progress = exchange.parseProgress;

      if (!content || !progress) return false;

      // Check if any answer in this exchange affected ANY outcome
      for (const item of progress.history) {
        if (item.skipped || !item.answerId) continue;

        const question = findQuestionById(item.questionId, content);
        if (!question) continue;

        const answer = question.answers.find((a) => a.id === item.answerId);
        if (!answer || !answer.outcomeModifiers) continue;

        // Check if this answer affected any outcome
        if (Object.values(answer.outcomeModifiers).some((mod) => mod !== 0)) {
          return true; // Include this exchange
        }
      }

      return false; // No relevant answers found
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
};

const enhance = withObservables(["situationId"], ({ situationId }) => ({
  pressExchanges: observePressExchangesForSituation(situationId),
}));

export default enhance(SituationOutcomeExchanges);
