import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { LevelMediaCoverageImpactRow } from "~/components/shared/level-media-coverage/LevelMediaCoverageImpactRow";
import { EntityWithMediaDelta } from "~/types";

interface LevelMediaImpactContentProps {
  isLoading: boolean;
  enhancedDeltas: EntityWithMediaDelta[];
}

function LevelMediaImpactContent({
  isLoading,
  enhancedDeltas,
}: LevelMediaImpactContentProps) {
  // Group entities by role
  const groupedEntities = {
    president: enhancedDeltas.filter((e) => e.role === "president"),
    cabinet: enhancedDeltas.filter((e) => e.role === "cabinet"),
    subgroups: enhancedDeltas.filter((e) => e.role === "subgroup"),
  };

  // Check if sections should be shown
  const hasAdminEntities =
    groupedEntities.president.length > 0 || groupedEntities.cabinet.length > 0;
  const hasSubgroups = groupedEntities.subgroups.length > 0;

  return (
    <View className="gap-4">
      {isLoading ? (
        <Text>Loading impact data...</Text>
      ) : (
        <View className="gap-4">
          {/* Table header */}
          <View className="flex-row border-b pb-2">
            <View style={{ width: "40%" }} className="justify-end">
              <Text className="font-medium">Name</Text>
            </View>
            <View style={{ width: "20%" }} className="items-center justify-end">
              <Text className="font-medium text-center">Start</Text>
            </View>
            <View style={{ width: "20%" }} className="items-center justify-end">
              <Text className="font-medium text-center">Base</Text>
            </View>
            <View style={{ width: "20%" }} className="items-center justify-end">
              <Text className="font-medium text-center">Media Boost</Text>
            </View>
          </View>

          {/* Admin section */}
          {hasAdminEntities && (
            <>
              <Text className="text-lg font-bold">Admin</Text>
              {groupedEntities.president.map((entity) => (
                <LevelMediaCoverageImpactRow key={entity.id} entity={entity} />
              ))}
              {groupedEntities.cabinet.map((entity) => (
                <LevelMediaCoverageImpactRow key={entity.id} entity={entity} />
              ))}
            </>
          )}

          {/* Subgroups section */}
          {hasSubgroups && (
            <>
              <Text className="text-lg font-bold">Groups</Text>
              {groupedEntities.subgroups.map((entity) => (
                <LevelMediaCoverageImpactRow key={entity.id} entity={entity} />
              ))}
            </>
          )}
        </View>
      )}
    </View>
  );
}

export default LevelMediaImpactContent;
