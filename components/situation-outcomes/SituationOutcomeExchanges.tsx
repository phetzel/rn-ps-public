import React, { useState, useMemo } from "react";
import { View } from "react-native";

// Components
import { Text } from "~/components/ui/text";
import SituationOutcomeExchangeItem from "~/components/situation-outcomes/SituationOutcomeExchangeItem";

import { Button } from "~/components/ui/button";
// Icons
import { ChevronDown } from "~/lib/icons/ChevronDown";
import { ChevronUp } from "~/lib/icons/ChevronUp";
// Types
import type { PressExchange } from "~/lib/db/models";
import type { SituationOutcome } from "~/types";

interface SituationOutcomeExchangesProps {
  pressExchanges: PressExchange[];
  outcome: SituationOutcome;
}

export default function SituationOutcomeExchanges({
  pressExchanges,
  outcome,
}: SituationOutcomeExchangesProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Filter exchanges that affected the outcome using useMemo
  const filteredExchanges = useMemo(() => {
    return pressExchanges.filter((exchange) => {
      const content = exchange.parseContent;
      const progress = exchange.parseProgress;

      if (!content || !progress) return false;

      // Check if any answer in this exchange affected our outcome
      for (const item of progress.history) {
        if (item.skipped || !item.answerId) continue;

        const question = content.questions[item.questionId];
        if (!question) continue;

        const answer = question.answers.find((a) => a.id === item.answerId);
        if (!answer || !answer.outcomeModifiers) continue;

        // Check if this answer affected our outcome
        const modifier = answer.outcomeModifiers[outcome.id];
        if (modifier !== undefined && modifier !== 0) {
          return true; // Include this exchange
        }
      }

      return false; // No relevant answers found
    });
  }, [pressExchanges, outcome.id]);

  if (filteredExchanges.length === 0) {
    return (
      <View className="py-2">
        <Text className="text-sm text-muted-foreground">
          No press conference responses affected this outcome.
        </Text>
      </View>
    );
  }

  return (
    <View className="gap-2">
      {/* Header with toggle */}
      <View className="flex-row justify-between items-center">
        <Text className="font-medium">
          Press Exchanges: ({filteredExchanges.length})
        </Text>
        <Button
          variant="ghost"
          size="sm"
          onPress={() => setIsExpanded(!isExpanded)}
          className="h-8 gap-2 flex-row"
        >
          <Text>{isExpanded ? "Collapse" : "Expand"}</Text>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-foreground" />
          )}
        </Button>
      </View>

      {/* Exchange items */}
      {isExpanded && (
        <View className="gap-2">
          {filteredExchanges.map((exchange, index) => (
            <SituationOutcomeExchangeItem
              key={`${exchange.id}-${index}`}
              exchange={exchange}
              outcome={outcome}
            />
          ))}
        </View>
      )}
    </View>
  );
}
