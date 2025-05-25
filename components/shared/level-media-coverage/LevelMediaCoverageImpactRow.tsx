import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import { EntityWithMediaDelta } from "~/types";

interface LevelMediaCoverageImpactRowProps {
  entity: EntityWithMediaDelta;
}

export function LevelMediaCoverageImpactRow({
  entity,
}: LevelMediaCoverageImpactRowProps) {
  const { name, title, role, currentValue, delta, preMediaDelta } = entity;

  return (
    <View className="flex-row border-b border-border pb-2">
      {/* Name and title */}
      <View style={{ width: "40%" }}>
        {title && (
          <Text className="text-sm text-muted-foreground leading-none">
            {title}
          </Text>
        )}
        <Text className="text-base font-bold">{name}</Text>
      </View>

      {/* Current value */}
      <View style={{ width: "20%" }} className="justify-center items-center">
        <Text className="text-lg font-bold">{currentValue}</Text>
      </View>

      {/* Base Delta */}
      <View style={{ width: "20%" }} className="justify-center items-center">
        <Text
          className={cn(
            "text-lg",
            preMediaDelta >= 0 ? "text-green-600" : "text-red-600"
          )}
        >
          {preMediaDelta >= 0 ? "+" : ""}
          {preMediaDelta}
        </Text>
      </View>

      {/* Media-boosted delta */}
      <View style={{ width: "20%" }} className="justify-center items-center">
        <Text
          className={cn(
            "text-lg font-bold",
            delta >= 0 ? "text-green-600" : "text-red-600"
          )}
        >
          {delta >= 0 ? "+" : ""}
          {delta}
        </Text>
      </View>
    </View>
  );
}
