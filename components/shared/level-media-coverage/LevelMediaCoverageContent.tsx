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
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`Media publications table with ${
        mediaBoosts.length
      } publications and total boost of ${totalBoost.toFixed(2)}`}
    >
      {/* Header */}
      <View
        className="flex-row justify-between border-b pb-2"
        accessible={true}
        accessibilityLabel="Table headers: Publication name, Approval rating, Boost multiplier"
      >
        <Text className="font-medium" accessible={false}>
          Publication
        </Text>
        <View className="flex-row gap-4" accessible={false}>
          <Text className="font-medium" accessible={false}>
            Approval
          </Text>
          <Text className="font-medium" accessible={false}>
            Boost
          </Text>
        </View>
      </View>

      {/* Publications list */}
      {mediaBoosts.map((item) => (
        <View
          key={item.id}
          className="flex-row justify-between items-center gap-2"
          accessibilityLabel={`${item.name}: ${
            item.approvalRating
          }% approval, boost multiplier ${item.boost.toFixed(2)}`}
        >
          <Text>{item.name}</Text>

          <View className="flex-row gap-8" accessible={false}>
            <Text
              className={cn(
                "text-right w-10",
                item.approvalRating > 50
                  ? "text-green-500"
                  : item.approvalRating < 50
                  ? "text-red-500"
                  : "text-foreground"
              )}
              accessible={false}
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
              accessible={false}
            >
              x{item.boost.toFixed(2)}
            </Text>
          </View>
        </View>
      ))}

      {/* Total row */}
      <View
        className="flex-row justify-between items-center py-2 border-t"
        accessible={true}
        accessibilityLabel={`Total media impact: boost multiplier of ${totalBoost.toFixed(
          2
        )}`}
      >
        <Text className="font-bold" accessible={false}>
          Total Media Impact
        </Text>
        <Text className="font-bold" accessible={false}>
          x{totalBoost.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

export default LevelMediaCoverageContent;
