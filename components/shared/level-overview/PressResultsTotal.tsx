import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { getEnhancedRelationshipDeltas } from "~/lib/db/helpers";
import { MessageSquare } from "~/lib/icons";
import { calculateAdBoost } from "~/lib/utils";
import { cn } from "~/lib/utils";
import type { EntityWithDelta } from "~/types";

interface PressResultsTotalProps {
  levelId: string;
  level: Level | null;
}

const PressResultsTotal = ({ levelId, level }: PressResultsTotalProps) => {
  const [enhancedDeltas, setEnhancedDeltas] = useState<
    EntityWithDelta[] | null
  >(null);

  useEffect(() => {
    async function loadDeltas() {
      if (!levelId) return;

      const results = await getEnhancedRelationshipDeltas(levelId);
      setEnhancedDeltas(results);
    }

    loadDeltas();
  }, [levelId]);

  if (!level || !enhancedDeltas) {
    return null;
  }

  const hasAdWatched = level.pressAdWatched;

  // Group entities by role
  const groupedEntities = {
    president: enhancedDeltas.filter((e) => e.role === "president"),
    cabinet: enhancedDeltas.filter((e) => e.role === "cabinet"),
    journalists: enhancedDeltas.filter((e) => e.role === "journalist"),
    subgroups: enhancedDeltas.filter((e) => e.role === "subgroup"),
  };

  // Check if sections should be shown
  const hasAdminEntities =
    groupedEntities.president.length > 0 || groupedEntities.cabinet.length > 0;
  const hasJournalists = groupedEntities.journalists.length > 0;
  const hasSubgroups = groupedEntities.subgroups.length > 0;

  const renderEntityRow = (entity: EntityWithDelta) => {
    const finalDelta = hasAdWatched
      ? calculateAdBoost(entity.delta)
      : entity.delta;

    // Format entity name based on role
    const displayName = entity.name;
    const displayTitle = entity.title;

    return (
      <View
        key={entity.id}
        className="flex-row py-2 border-b border-border/50"
        accessible={true}
        accessibilityLabel={`${displayName}${
          displayTitle ? `, ${displayTitle}` : ""
        }. Base change: ${
          entity.delta >= 0 ? "positive" : "negative"
        } ${Math.abs(entity.delta)}.${
          hasAdWatched
            ? ` Boosted change: ${
                finalDelta >= 0 ? "positive" : "negative"
              } ${Math.abs(finalDelta)}.`
            : ""
        }`}
      >
        <View className="flex-1" accessible={false}>
          <Text className="text-base font-bold" accessible={false}>
            {displayName}
          </Text>
          {displayTitle && (
            <Text
              className="text-sm text-muted-foreground leading-none"
              accessible={false}
            >
              {displayTitle}
            </Text>
          )}
        </View>
        <View className="w-20 items-center" accessible={false}>
          <Text
            className={cn(
              "font-semibold",
              entity.delta > 0
                ? "text-green-600"
                : entity.delta < 0
                ? "text-red-600"
                : "text-muted-foreground"
            )}
            accessible={false}
          >
            {entity.delta > 0 ? "+" : ""}
            {entity.delta}
          </Text>
        </View>
        {hasAdWatched && (
          <View className="w-20 items-center" accessible={false}>
            <Text
              className={cn(
                "font-semibold",
                finalDelta > 0
                  ? "text-green-600"
                  : finalDelta < 0
                  ? "text-red-600"
                  : "text-muted-foreground"
              )}
              accessible={false}
            >
              {finalDelta > 0 ? "+" : ""}
              {finalDelta}
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        <MessageSquare className="text-primary" />
        <CardTitle>Conference Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <View className="gap-2">
          <Text className="text-lg font-semibold">Impact on Relationships</Text>

          {/* Table Header */}
          <View className="flex-row border-b border-border pb-2">
            <View className="flex-1">
              <Text className="font-semibold">Name</Text>
            </View>
            <View className="w-20 items-center">
              <Text className="font-semibold">Base</Text>
            </View>
            {hasAdWatched && (
              <View className="w-20 items-center">
                <Text className="font-semibold">Boosted</Text>
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
              {groupedEntities.president.map(renderEntityRow)}
              {groupedEntities.cabinet.map(renderEntityRow)}
            </>
          )}

          {/* Journalists section */}
          {hasJournalists && (
            <>
              <Text
                className="text-lg font-bold"
                accessibilityRole="header"
                accessible={true}
                accessibilityLabel={`Journalists section with ${groupedEntities.journalists.length} entities`}
              >
                Journalists
              </Text>
              {groupedEntities.journalists.map(renderEntityRow)}
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
              {groupedEntities.subgroups.map(renderEntityRow)}
            </>
          )}

          {hasAdWatched && (
            <View className="mt-2 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
              <Text className="text-sm text-green-700 dark:text-green-300 font-medium">
                ✓ Ad boost applied - Enhanced relationship changes
              </Text>
            </View>
          )}
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(PressResultsTotal);
