import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

import ConferenceJournalistItem from "./ConferenceJournalistItem";
import { PressExchange } from "~/lib/db/models";

interface ConferenceJournalistSelectProps {
  pressExchanges: PressExchange[];
  onSelectExchange: (exchange: PressExchange) => void;
}

const ConferenceJournalistSelect = ({
  pressExchanges,
  onSelectExchange,
}: ConferenceJournalistSelectProps) => {
  return (
    <View className="gap-4">
      <Text className="text-xl font-bold mb-2 text-center">
        Select a Journalist
      </Text>
      {pressExchanges.map((exchange) => (
        <ConferenceJournalistItem
          key={exchange.id}
          pressExchange={exchange}
          onSelect={onSelectExchange}
        />
      ))}
    </View>
  );
};

export default ConferenceJournalistSelect;
