import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import { EntityWithMediaDelta } from "~/types";

interface LevelMediaCoverageImpactRowProps {
  entity: EntityWithMediaDelta;
  hasAdWatched: boolean;
}

export function LevelMediaCoverageImpactRow({
  entity,
  hasAdWatched,
}: LevelMediaCoverageImpactRowProps) {
  const {
    name,
    title,
    role,
    currentValue,
    delta,
    preMediaDelta,
    adBoostedDelta,
  } = entity;

  const finalValue = adBoostedDelta || delta;

  return (
    <View
      className="flex-row border-b border-border pb-2"
      accessible={true}
      accessibilityLabel={`${name}${
        title ? `, ${title}` : ""
      }. Current: ${currentValue}. Base change: ${
        preMediaDelta >= 0 ? "positive" : "negative"
      } ${Math.abs(preMediaDelta)}. Media boosted change: ${
        delta >= 0 ? "positive" : "negative"
      } ${Math.abs(delta)}.${
        hasAdWatched
          ? ` Final ad-boosted change: ${
              finalValue >= 0 ? "positive" : "negative"
            } ${Math.abs(finalValue)}.`
          : ""
      } Media ${
        Math.abs(delta) > Math.abs(preMediaDelta) ? "amplified" : "reduced"
      } the impact.`}
    >
      {/* Name and title */}
      <View style={{ width: hasAdWatched ? "30%" : "40%" }} accessible={false}>
        <Text className="text-base font-bold" accessible={false}>
          {name}
        </Text>
        {title && (
          <Text
            className="text-sm text-muted-foreground leading-none"
            accessible={false}
          >
            {title}
          </Text>
        )}
      </View>

      {/* Current value */}
      <View
        style={{ width: hasAdWatched ? "17.5%" : "20%" }}
        className="justify-center items-center"
        accessible={false}
      >
        <Text className="text-lg font-bold" accessible={false}>
          {currentValue}
        </Text>
      </View>

      {/* Base Delta */}
      <View
        style={{ width: hasAdWatched ? "17.5%" : "20%" }}
        className="justify-center items-center"
        accessible={false}
      >
        <Text
          className={cn(
            "text-lg",
            preMediaDelta >= 0 ? "text-green-600" : "text-red-600"
          )}
          accessible={false}
        >
          {preMediaDelta >= 0 ? "+" : ""}
          {preMediaDelta}
        </Text>
      </View>

      {/* Media-boosted delta */}
      <View
        style={{ width: hasAdWatched ? "17.5%" : "20%" }}
        className="justify-center items-center"
        accessible={false}
      >
        <Text
          className={cn(
            "text-lg font-bold",
            delta >= 0 ? "text-green-600" : "text-red-600"
          )}
          accessible={false}
        >
          {delta >= 0 ? "+" : ""}
          {delta}
        </Text>
      </View>

      {/* Ad-boosted delta (only if ad watched) */}
      {hasAdWatched && (
        <View
          style={{ width: "17.5%" }}
          className="justify-center items-center"
          accessible={false}
        >
          <Text
            className={cn(
              "text-lg font-bold",
              finalValue >= 0 ? "text-green-600" : "text-red-600"
            )}
            accessible={false}
          >
            {finalValue >= 0 ? "+" : ""}
            {finalValue}
          </Text>
        </View>
      )}
    </View>
  );
}
