import React from "react";
import { FlatList, View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeSituationsByLevelId } from "~/lib/db/helpers/observations";
import { Situation } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import { SituationCard } from "~/components/screens/tab-current/SituationCard";
import { EmptyState } from "~/components/shared/EmptyState";
import InfoTooltip from "~/components/shared/InfoTooltip";

interface ActiveSituationsListProps {
  situations: Situation[];
}

const ActiveSituationsList = ({ situations }: ActiveSituationsListProps) => {
  return (
    <View
      className="gap-2 flex-1"
      accessible={true}
      accessibilityLabel={`Active situations: ${situations?.length || 0} total`}
    >
      <View className="flex-row items-center gap-2">
      <Text className="text-2xl font-semibold">Active Situations</Text>
        <View className="ml-auto">
          <InfoTooltip tooltipId="current.activeSituations" />
        </View>
      </View>

      {!situations?.length ? (
        <EmptyState message="No active situations" />
      ) : (
        <FlatList
          data={situations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SituationCard situation={item} />}
          ItemSeparatorComponent={() => <View className="h-4" />}
          contentContainerStyle={{ paddingVertical: 8 }}
          style={{ flexGrow: 1 }}
          accessibilityLabel={`List of ${situations.length} active situations`}
          accessible={false}
        />
      )}
    </View>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  situations: observeSituationsByLevelId(levelId),
}));

export default enhance(ActiveSituationsList);
