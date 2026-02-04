import React from 'react';
import { View } from 'react-native';

import { EmptyState } from '~/components/shared/EmptyState';
import { Accordion } from '~/components/ui/accordion';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';

import type { PressExchange } from '~/types/view-models';

interface ExchangesOutcomeListViewProps {
  levelId: string;
  pressExchanges: PressExchange[];
  renderExchangeOutcomeItem: (exchange: PressExchange) => React.ReactNode;
}

export function ExchangesOutcomeListView({
  levelId: _levelId,
  pressExchanges,
  renderExchangeOutcomeItem,
}: ExchangesOutcomeListViewProps) {
  if (!pressExchanges || pressExchanges.length === 0) {
    return <EmptyState message="No press exchanges found for this level." />;
  }

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`Press exchanges: ${pressExchanges.length} journalists interacted with during the press conference`}
    >
      <Text className="text-2xl font-semibold" accessibilityRole="header">
        Press Exchanges
      </Text>
      <Accordion
        type="single"
        collapsible
        accessible={true}
        accessibilityLabel="Expandable list of press exchanges"
        accessibilityHint="Each item shows a journalist and their questions/answers"
      >
        {pressExchanges.map((exchange, index) => (
          <View key={exchange.id}>
            {renderExchangeOutcomeItem(exchange)}
            {index !== pressExchanges.length - 1 && <Separator className="my-2" />}
          </View>
        ))}
      </Accordion>
    </View>
  );
}
