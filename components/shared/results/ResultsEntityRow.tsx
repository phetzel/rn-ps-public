import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import type { EntityWithDelta } from "~/types";

interface ResultsEntityRowProps {
  entity: EntityWithDelta;
  boostedDelta: number;
  isAdWatched: boolean;
}

export function ResultsEntityRow({
  entity,
  boostedDelta,
  isAdWatched,
}: ResultsEntityRowProps) {
  return (
    <View className="flex-row border-b border-border pb-2">
      {/* Name and title */}
      <View style={{ width: "40%" }}>
        {entity.title && (
          <Text className="text-sm text-muted-foreground leading-none">
            {entity.title}
          </Text>
        )}
        <Text className="text-base font-bold">{entity.name}</Text>
      </View>

      {/* Current value */}
      <View style={{ width: "20%" }} className="justify-center items-center">
        <Text className="text-lg font-bold">{entity.currentValue}</Text>
      </View>

      {/* Delta */}
      <View style={{ width: "20%" }} className="justify-center items-center">
        <Text
          className={cn(
            "text-lg",
            !isAdWatched
              ? entity.delta >= 0
                ? "text-green-600 font-bold"
                : "text-red-600 font-bold"
              : "text-muted-foreground"
          )}
        >
          {entity.delta >= 0 ? "+" : "-"}
          {Math.abs(entity.delta)}
        </Text>
      </View>

      {/* Boosted delta */}
      <View style={{ width: "20%" }} className="justify-center items-center">
        <Text
          className={cn(
            "text-lg",
            isAdWatched
              ? boostedDelta >= 0
                ? "text-green-600 font-bold"
                : "text-red-600 font-bold"
              : "text-muted-foreground"
          )}
        >
          {boostedDelta >= 0 ? "+" : "-"}
          {Math.abs(boostedDelta)}
        </Text>
      </View>
    </View>
  );
}
