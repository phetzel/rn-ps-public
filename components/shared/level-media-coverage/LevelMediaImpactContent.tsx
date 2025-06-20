import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { LevelMediaCoverageImpactRow } from "~/components/shared/level-media-coverage/LevelMediaCoverageImpactRow";
import { EntityWithMediaDelta } from "~/types";

interface LevelMediaImpactContentProps {
  isLoading: boolean;
  enhancedDeltas: EntityWithMediaDelta[];
  hasAdWatched: boolean;
}

function LevelMediaImpactContent({
  isLoading,
  enhancedDeltas,
  hasAdWatched,
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

  const totalEntities = enhancedDeltas.length;

  return (
    <View
      className="gap-4"
      accessible={true}
      accessibilityLabel={`Media impact analysis for ${totalEntities} entities${
        hasAdminEntities ? " including administration" : ""
      }${hasSubgroups ? " and voter groups" : ""}${
        hasAdWatched ? " with ad boost applied" : ""
      }`}
    >
      {isLoading ? (
        <Text accessible={true} accessibilityLiveRegion="polite">
          Loading impact data...
        </Text>
      ) : (
        <View className="gap-4" accessible={false}>
          {/* Table header */}
          <View
            className="flex-row border-b pb-2"
            accessible={true}
            accessibilityLabel={`Table columns: Entity name, Starting value, Base change, Media boosted change${
              hasAdWatched ? ", Ad boosted change" : ""
            }`}
          >
            <View
              style={{ width: hasAdWatched ? "30%" : "40%" }}
              className="justify-end"
              accessible={false}
            >
              <Text className="font-medium" accessible={false}>
                Name
              </Text>
            </View>
            <View
              style={{ width: hasAdWatched ? "17.5%" : "20%" }}
              className="items-center justify-end"
              accessible={false}
            >
              <Text className="font-medium text-center" accessible={false}>
                Start
              </Text>
            </View>
            <View
              style={{ width: hasAdWatched ? "17.5%" : "20%" }}
              className="items-center justify-end"
              accessible={false}
            >
              <Text className="font-medium text-center" accessible={false}>
                Base
              </Text>
            </View>
            <View
              style={{ width: hasAdWatched ? "17.5%" : "20%" }}
              className="items-center justify-end"
              accessible={false}
            >
              <Text className="font-medium text-center" accessible={false}>
                Media
              </Text>
            </View>
            {hasAdWatched && (
              <View
                style={{ width: "17.5%" }}
                className="items-center justify-end"
                accessible={false}
              >
                <Text className="font-medium text-center" accessible={false}>
                  Ad Boosted
                </Text>
              </View>
            )}
          </View>

          {/* Admin section */}
          {hasAdminEntities && (
            <>
              <Text
                className="text-lg font-bold"
                accessibilityRole="header"
                accessible={true}
                accessibilityLabel={`Administration section with ${
                  groupedEntities.president.length +
                  groupedEntities.cabinet.length
                } entities`}
              >
                Admin
              </Text>
              {groupedEntities.president.map((entity) => (
                <LevelMediaCoverageImpactRow
                  key={entity.id}
                  entity={entity}
                  hasAdWatched={hasAdWatched}
                />
              ))}
              {groupedEntities.cabinet.map((entity) => (
                <LevelMediaCoverageImpactRow
                  key={entity.id}
                  entity={entity}
                  hasAdWatched={hasAdWatched}
                />
              ))}
            </>
          )}

          {/* Subgroups section */}
          {hasSubgroups && (
            <>
              <Text
                className="text-lg font-bold"
                accessibilityRole="header"
                accessible={true}
                accessibilityLabel={`Voter groups section with ${groupedEntities.subgroups.length} groups`}
              >
                Groups
              </Text>
              {groupedEntities.subgroups.map((entity) => (
                <LevelMediaCoverageImpactRow
                  key={entity.id}
                  entity={entity}
                  hasAdWatched={hasAdWatched}
                />
              ))}
            </>
          )}

          {hasAdWatched && (
            <View className="mt-2 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
              <Text className="text-sm text-green-700 dark:text-green-300 font-medium">
                ✓ Ad boost applied - Enhanced situation approval changes
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

export default LevelMediaImpactContent;
