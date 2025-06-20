import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observePressExchangesForLevel } from "~/lib/db/helpers/observations";
import { PressExchange } from "~/lib/db/models";
import { Accordion } from "~/components/ui/accordion";
import { Separator } from "~/components/ui/separator";
import { EmptyState } from "~/components/shared/EmptyState";
import { Text } from "~/components/ui/text";
import ExchangeOutcomeItem from "~/components/shared/exchanges-outcome-list/ExchangeOutcomeItem";

interface ExchangesOutcomeListProps {
  levelId: string;
  pressExchanges: PressExchange[];
}

const ExchangesOutcomeList = ({
  levelId,
  pressExchanges,
}: ExchangesOutcomeListProps) => {
  if (!pressExchanges || pressExchanges.length === 0) {
    return <EmptyState message="No press exchanges found for this level." />;
  }

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`Press exchanges: ${pressExchanges.length} journalists interacted with during the press conference`}
    >
      {/* <Text className="text-2xl font-semibold" accessibilityRole="header">
        Press Exchanges
      </Text> */}
      <Accordion
        type="single"
        collapsible
        accessible={true}
        accessibilityLabel="Expandable list of press exchanges"
        accessibilityHint="Each item shows a journalist and their questions/answers"
      >
        {pressExchanges.map((exchange, index) => (
          <View key={exchange.id}>
            <ExchangeOutcomeItem key={exchange.id} exchange={exchange} />
            {index !== pressExchanges.length - 1 && (
              <Separator className="my-2" />
            )}
          </View>
        ))}
      </Accordion>
    </View>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  pressExchanges: observePressExchangesForLevel(levelId),
}));

export default enhance(ExchangesOutcomeList);
