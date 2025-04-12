import React from "react";
import { FlatList, View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeActiveSituationsForGame } from "~/lib/db/helpers/observations";
import { Situation } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import SituationCard from "./SituationCard";

interface ActiveSituationsListProps {
  gameId: string;
  situations: Situation[];
}

const ActiveSituationsList = ({ situations }: ActiveSituationsListProps) => {
  if (!situations || situations.length === 0) {
    return (
      <View className="py-4">
        <Text className="text-center text-muted-foreground">
          No active situations
        </Text>
      </View>
    );
  }

  return (
    <View className="py-4 gap-2">
      <Text className="text-2xl font-semibold">Active Situations</Text>
      <FlatList
        data={situations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SituationCard situation={item} />}
        ItemSeparatorComponent={() => <View className="h-4" />}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </View>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  situations: observeActiveSituationsForGame(gameId),
}));

export default enhance(ActiveSituationsList);
