import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { cn, calculateTableColumnWidths } from "~/lib/utils";
import type { EntityWithDelta, EntityWithMediaDelta } from "~/types";

interface ResultsEntityRowProps {
  entity: EntityWithDelta | EntityWithMediaDelta;
  isAdWatched: boolean;
  showAdColumn?: boolean;
}

export function ResultsEntityRow({
  entity,
  isAdWatched,
  showAdColumn = true,
}: ResultsEntityRowProps) {
  // Check if entity has media data and should show base column
  const hasMediaData = "preMediaDelta" in entity;
  const showBaseColumn = hasMediaData && !showAdColumn;

  // Calculate column count and get widths
  const columnCount = 2 + (showBaseColumn ? 1 : 0) + 1 + (showAdColumn ? 1 : 0); // Name + Start + Base? + Change + Boosted?
  const { name: nameWidth, data: dataWidth } =
    calculateTableColumnWidths(columnCount);

  return (
    <View className="flex-row border-b border-border pb-2">
      {/* Name and title */}
      <View
        style={{ width: nameWidth }}
        accessible={true}
        accessibilityLabel={`${entity.name}${
          entity.title ? `, ${entity.title}` : ""
        }`}
        className="gap-1"
      >
        <Text className="text-base font-bold leading-none" accessible={false}>
          {entity.name}
        </Text>
        {entity.title && (
          <Text
            className="text-sm text-muted-foreground leading-none"
            accessible={false}
          >
            {entity.title}
          </Text>
        )}
      </View>

      {/* Start value (current value) */}
      <View
        style={{ width: dataWidth }}
        className="justify-center items-center"
        accessible={true}
        accessibilityLabel={`Start value: ${entity.currentValue}`}
      >
        <Text className="text-lg" accessible={false}>
          {entity.currentValue}
        </Text>
      </View>

      {/* Base (preMediaDelta) - only when media data present and no ad column */}
      {showBaseColumn && (
        <View
          style={{ width: dataWidth }}
          className="justify-center items-center"
          accessible={true}
          accessibilityLabel={`Base change: ${
            (entity as EntityWithMediaDelta).preMediaDelta >= 0
              ? "plus"
              : "minus"
          } ${Math.abs((entity as EntityWithMediaDelta).preMediaDelta)}`}
        >
          <Text className={"text-lg text-muted-foreground"} accessible={false}>
            {(entity as EntityWithMediaDelta).preMediaDelta >= 0 ? "+" : "-"}
            {Math.abs((entity as EntityWithMediaDelta).preMediaDelta)}
          </Text>
        </View>
      )}

      {/* Change (delta) */}
      <View
        style={{ width: dataWidth }}
        className="justify-center items-center"
        accessible={true}
        accessibilityLabel={`Change: ${
          entity.delta >= 0 ? "plus" : "minus"
        } ${Math.abs(entity.delta)}`}
      >
        <Text
          className={cn(
            "text-lg",
            !showAdColumn || !isAdWatched
              ? entity.delta >= 0
                ? "text-green-600 font-bold"
                : "text-red-600 font-bold"
              : "text-muted-foreground"
          )}
          accessible={false}
        >
          {entity.delta >= 0 ? "+" : "-"}
          {Math.abs(entity.delta)}
        </Text>
      </View>

      {/* Boosted (ad-boosted delta) */}
      {showAdColumn && (
        <View
          style={{ width: dataWidth }}
          className="justify-center items-center"
          accessible={true}
          accessibilityLabel={`${
            isAdWatched ? "Ad boosted" : "Potential boost"
          }: ${entity.adBoostedDelta >= 0 ? "plus" : "minus"} ${Math.abs(
            entity.adBoostedDelta
          )}`}
        >
          <Text
            className={cn(
              "text-lg",
              isAdWatched
                ? entity.adBoostedDelta >= 0
                  ? "text-green-600 font-bold"
                  : "text-red-600 font-bold"
                : "text-muted-foreground"
            )}
            accessible={false}
          >
            {entity.adBoostedDelta >= 0 ? "+" : "-"}
            {Math.abs(entity.adBoostedDelta)}
          </Text>
        </View>
      )}
    </View>
  );
}
