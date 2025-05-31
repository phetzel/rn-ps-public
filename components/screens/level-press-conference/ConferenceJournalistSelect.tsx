import React, { useMemo } from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

import { PressExchange } from "~/lib/db/models";
import ConferenceJournalistItem from "~/components/screens/level-press-conference/ConferenceJournalistItem";

interface ConferenceJournalistSelectProps {
  pressExchanges: PressExchange[];
  onSelectExchange: (exchange: PressExchange) => void;
}

const ConferenceJournalistSelect = ({
  pressExchanges,
  onSelectExchange,
}: ConferenceJournalistSelectProps) => {
  const sortedExchanges = useMemo(() => {
    return [...pressExchanges].sort((a, b) => {
      const aHasQuestion = a.parseProgress?.currentQuestionId !== null;
      const bHasQuestion = b.parseProgress?.currentQuestionId !== null;

      if (aHasQuestion && !bHasQuestion) return -1;
      if (!aHasQuestion && bHasQuestion) return 1;
      return 0;
    });
  }, [pressExchanges]);

  const availableJournalists = sortedExchanges.filter(
    (exchange) => exchange.parseProgress?.currentQuestionId !== null
  );

  return (
    <View
      className="gap-4"
      accessible={true}
      accessibilityLabel={`Journalist selection screen. ${availableJournalists.length} journalists available out of ${sortedExchanges.length} total.`}
    >
      <View className="mb-4" accessible={true} accessibilityRole="header">
        <Text className="text-xl font-bold text-center">
          Select a Journalist
        </Text>
        <Text className="text-sm text-center text-muted-foreground mt-1">
          Choose who will ask the next question
        </Text>
      </View>

      <View
        accessible={true}
        accessibilityLabel="List of journalists"
        accessibilityHint="Select a journalist to see their question"
        className="gap-4"
      >
        {sortedExchanges.map((exchange, index) => (
          <ConferenceJournalistItem
            key={exchange.id}
            pressExchange={exchange}
            onSelect={onSelectExchange}
          />
        ))}
      </View>
    </View>
  );
};

export default ConferenceJournalistSelect;
