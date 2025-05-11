import React from "react";
import { View, FlatList } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";
import { observePressExchangesForLevel } from "~/lib/db/helpers/observations";

import type { PressExchange } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import { Card, CardHeader, CardContent, CardTitle } from "~/components/ui/card";
import ExchangeItem from "~/components/press-outcomes/ExchangeItem";

interface ExcahngesOutcomesProps {
  levelId: string;
  pressExchanges: PressExchange[];
}

const ExcahngesOutcomes = ({ pressExchanges }: ExcahngesOutcomesProps) => {
  if (pressExchanges.length === 0) {
    return (
      <Card>
        <CardContent>
          <Text className="text-center py-4">
            No exchanges found for this level.
          </Text>
        </CardContent>
      </Card>
    );
  }

  const answeredExchanges = pressExchanges.filter((exchange) => {
    const progress = exchange.parseProgress;
    return progress && progress.history.length > 0;
  });

  return (
    <View className="gap-4 pb-4">
      <Card>
        <CardHeader>
          <CardTitle>Press Exchanges</CardTitle>
        </CardHeader>
        <CardContent>
          <Text>
            {answeredExchanges.length} of {pressExchanges.length} journalists
            called on.
          </Text>
        </CardContent>
      </Card>

      <FlatList
        data={pressExchanges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExchangeItem exchange={item} />}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View className="h-4" />}
        contentContainerStyle={{ gap: 8 }}
      />
    </View>
  );
};

export default withObservables(["levelId"], ({ levelId }) => ({
  pressExchanges: observePressExchangesForLevel(levelId),
}))(ExcahngesOutcomes);
