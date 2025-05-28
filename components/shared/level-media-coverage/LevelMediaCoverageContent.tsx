import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

import { cn } from "~/lib/utils";
import { PublicationBoost } from "~/types";

interface LevelMediaCoverageContentProps {
  mediaBoosts: PublicationBoost[];
  totalBoost: number;
}

function LevelMediaCoverageContent({
  mediaBoosts,
  totalBoost,
}: LevelMediaCoverageContentProps) {
  return (
    <View className="gap-2">
      {/* Header */}
      <View className="flex-row justify-between border-b pb-2">
        <Text className="font-medium">Publication</Text>
        <View className="flex-row gap-4">
          <Text className="font-medium">Approval</Text>
          <Text className="font-medium">Boost</Text>
        </View>
      </View>

      {/* Publications list */}
      {mediaBoosts.map((item) => (
        <View
          key={item.id}
          className="flex-row justify-between items-center gap-2"
        >
          <Text>{item.name}</Text>

          <View className="flex-row gap-8">
            <Text
              className={cn(
                "text-right w-10",
                item.approvalRating > 50
                  ? "text-green-500"
                  : item.approvalRating < 50
                  ? "text-red-500"
                  : "text-foreground"
              )}
            >
              {item.approvalRating}%
            </Text>
            <Text
              className={cn(
                "text-right w-14 font-semibold",
                item.approvalRating > 50
                  ? "text-green-500"
                  : item.approvalRating < 50
                  ? "text-red-500"
                  : "text-foreground"
              )}
            >
              x{item.boost.toFixed(2)}
            </Text>
          </View>
        </View>
      ))}

      {/* Total row */}
      <View className="flex-row justify-between items-center py-2 border-t">
        <Text className="font-bold">Total Media Impact</Text>
        <Text className="font-bold">x{totalBoost.toFixed(2)}</Text>
      </View>
    </View>
  );
}

export default LevelMediaCoverageContent;
