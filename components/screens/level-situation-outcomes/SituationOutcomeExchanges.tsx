import React, { useMemo } from "react";
import { View } from "react-native";

// Components
import { Text } from "~/components/ui/text";
import SituationOutcomeExchangeItem from "~/components/screens/level-situation-outcomes/SituationOutcomeExchangeItem";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
// Types
import type { PressExchange } from "~/lib/db/models";
import type { SituationOutcome } from "~/types";

interface SituationOutcomeExchangesProps {
  pressExchanges: PressExchange[];
  selectedOutcome: SituationOutcome;
  allOutcomes: SituationOutcome[];
}

export default function SituationOutcomeExchanges({
  pressExchanges,
  selectedOutcome,
  allOutcomes,
}: SituationOutcomeExchangesProps) {
  // Filter exchanges that affected ANY outcome using useMemo
  const filteredExchanges = useMemo(() => {
    return pressExchanges.filter((exchange) => {
      const content = exchange.parseContent;
      const progress = exchange.parseProgress;

      if (!content || !progress) return false;

      // Check if any answer in this exchange affected ANY outcome
      for (const item of progress.history) {
        if (item.skipped || !item.answerId) continue;

        const question = content.questions[item.questionId];
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
        <Text className="text-sm text-muted-foreground">
          No press conference responses affected this outcome.
        </Text>
      </View>
    );
  }

  return (
    <Accordion type="single" collapsible className="px-4">
      <AccordionItem value="press-exchanges" className="border-0">
        <AccordionTrigger>
          <Text>Press Exchanges: ({filteredExchanges.length})</Text>
        </AccordionTrigger>

        <AccordionContent>
          <View className="gap-2">
            {filteredExchanges.map((exchange, index) => (
              <SituationOutcomeExchangeItem
                key={`${exchange.id}-${index}`}
                exchange={exchange}
                allOutcomes={allOutcomes}
                selectedOutcomeId={selectedOutcome.id}
              />
            ))}
          </View>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
