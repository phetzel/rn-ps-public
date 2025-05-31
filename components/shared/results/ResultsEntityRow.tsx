import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import type { EntityWithDelta } from "~/types";

interface ResultsEntityRowProps {
  entity: EntityWithDelta;
  isAdWatched: boolean;
}

export function ResultsEntityRow({
  entity,
  isAdWatched,
}: ResultsEntityRowProps) {
  return (
    <View className="flex-row border-b border-border pb-2">
      {/* Name and title */}
      <View
        style={{ width: "40%" }}
        accessible={true}
        accessibilityLabel={`${entity.name}${
          entity.title ? `, ${entity.title}` : ""
        }`}
      >
        {entity.title && (
          <Text
            className="text-sm text-muted-foreground leading-none"
            accessible={false}
          >
            {entity.title}
          </Text>
        )}
        <Text className="text-base font-bold" accessible={false}>
          {entity.name}
        </Text>
      </View>

      {/* Current value */}
      <View
        style={{ width: "20%" }}
        className="justify-center items-center"
        accessible={true}
        accessibilityLabel={`Current value: ${entity.currentValue}`}
      >
        <Text className="text-lg font-bold" accessible={false}>
          {entity.currentValue}
        </Text>
      </View>

      {/* Delta */}
      <View
        style={{ width: "20%" }}
        className="justify-center items-center"
        accessible={true}
        accessibilityLabel={`Base change: ${
          entity.delta >= 0 ? "plus" : "minus"
        } ${Math.abs(entity.delta)}`}
      >
        <Text
          className={cn(
            "text-lg",
            !isAdWatched
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

      {/* Boosted delta */}
      <View
        style={{ width: "20%" }}
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
    </View>
  );
}
