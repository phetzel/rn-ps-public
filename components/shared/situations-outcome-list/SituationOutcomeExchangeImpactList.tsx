import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { TrendingUp } from "~/lib/icons/TrendingUp";
import { TrendingDown } from "~/lib/icons/TrendingDown";
import { cn } from "~/lib/utils";

interface SituationOutcomeExchangeImpactListProps {
  outcomeModifiers: Record<string, number>;
  outcomeMap: Record<string, string>;
  selectedOutcomeId: string;
}

export function SituationOutcomeExchangeImpactList({
  outcomeModifiers,
  outcomeMap,
  selectedOutcomeId,
}: SituationOutcomeExchangeImpactListProps) {
  // Filter to only show non-zero modifiers
  const relevantModifiers = Object.entries(outcomeModifiers).filter(
    ([_, modifier]) => modifier !== 0
  );

  if (relevantModifiers.length === 0) return null;

  return (
    <View>
      <Text className="text-sm font-medium mb-3">Outcome Impacts</Text>

      {relevantModifiers.map(([outcomeId, modifier]) => (
        <View
          key={outcomeId}
          className="flex-row items-center justify-between mb-2"
        >
          {/* Left side: Outcome name with optional bold for selected */}
          <View className="flex-1 mr-6">
            <Text
              className={cn(
                "text-sm",
                outcomeId === selectedOutcomeId ? "font-bold" : ""
              )}
              numberOfLines={2}
            >
              {outcomeMap[outcomeId] || `Outcome ${outcomeId}`}
            </Text>
          </View>

          {/* Right side: Fixed-width container for impact display */}
          <View className="flex-row items-center min-w-[70px] justify-end">
            {modifier > 0 ? (
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
            )}
            <Text
              className={cn(
                "font-medium",
                modifier > 0 ? "text-green-500" : "text-red-500"
              )}
            >
              {modifier > 0 ? `+${modifier}%` : `${modifier}%`}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
