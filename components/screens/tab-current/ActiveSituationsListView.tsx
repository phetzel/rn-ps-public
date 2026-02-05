import React from 'react';
import { FlatList, View } from 'react-native';

import { SituationCard } from '~/components/screens/tab-current/SituationCard';
import { EmptyState } from '~/components/shared/EmptyState';
import InfoTooltip from '~/components/shared/InfoTooltip';
import { Text } from '~/components/ui/text';

import type { Situation } from '~/types/view-models';

interface ActiveSituationsListViewProps {
  situations: Situation[];
}

export function ActiveSituationsListView({ situations }: ActiveSituationsListViewProps) {
  return (
    <View
      className="gap-2 flex-1"
      accessible={true}
      accessibilityLabel={`Active situations: ${situations?.length || 0} total`}
    >
      <View className="flex-row items-center gap-2" testID="active-situations-header">
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
}
