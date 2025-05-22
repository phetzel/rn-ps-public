import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { MediaCoverageImpactRow } from "~/components/screens/level-situation-outcomes/MediaCoverageImpactRow";
import { EntityWithMediaDelta } from "~/types";

interface MediaImpactContentProps {
  isLoading: boolean;
  enhancedDeltas: EntityWithMediaDelta[];
}

function MediaImpactContent({
  isLoading,
  enhancedDeltas,
}: MediaImpactContentProps) {
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
            <View style={{ width: "40%" }}>
              <Text className="font-medium">Name</Text>
            </View>
            <View style={{ width: "20%" }} className="items-center">
              <Text className="font-medium">Current</Text>
            </View>
            <View style={{ width: "20%" }} className="items-center">
              <Text className="font-medium">Base</Text>
            </View>
            <View style={{ width: "20%" }} className="items-center">
              <Text className="font-medium">Media</Text>
            </View>
          </View>

          {/* Admin section */}
          {hasAdminEntities && (
            <>
              <Text className="text-lg font-bold">Admin</Text>
              {groupedEntities.president.map((entity) => (
                <MediaCoverageImpactRow key={entity.id} entity={entity} />
              ))}
              {groupedEntities.cabinet.map((entity) => (
                <MediaCoverageImpactRow key={entity.id} entity={entity} />
              ))}
            </>
          )}

          {/* Subgroups section */}
          {hasSubgroups && (
            <>
              <Text className="text-lg font-bold">Groups</Text>
              {groupedEntities.subgroups.map((entity) => (
                <MediaCoverageImpactRow key={entity.id} entity={entity} />
              ))}
            </>
          )}
        </View>
      )}
    </View>
  );
}

export default MediaImpactContent;
