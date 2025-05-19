import { View } from "react-native";

import { TrendingUp } from "~/lib/icons/TrendingUp";
import { TrendingDown } from "~/lib/icons/TrendingDown";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import { cn } from "~/lib/utils";

interface LevelProgressProps {
  label: string;
  initialValue: number;
  finalValue: number;
  size?: "small" | "medium";
}

export default function LevelProgress({
  label,
  initialValue,
  finalValue,
  size = "small",
}: LevelProgressProps) {
  const isPositive = finalValue > initialValue;
  const isNeutral = finalValue === initialValue;
  const difference = finalValue - initialValue;
  const absoluteDifference = Math.abs(difference);

  const minValue = 0;
  const maxValue = 100;

  // Calculate percentage for progress bar display
  const initialPercentage =
    ((initialValue - minValue) / (maxValue - minValue)) * 100;
  const differencePercentage =
    (absoluteDifference / (maxValue - minValue)) * 100;

  // Format values for display
  const formattedInitial = `${initialValue}%`;
  const formattedFinal = `${finalValue}%`;
  const formattedDifference = `${isPositive ? "+" : ""}${difference}%`;

  // Height variations based on size
  const progressHeight = {
    small: "h-1.5",
    medium: "h-2.5",
  }[size];

  // Font size variations
  const labelSize = {
    small: "text-sm",
    medium: "text-base",
  }[size];

  return (
    <View className="gap-1">
      <View className="flex-row justify-between items-center">
        <Text className="font-medium">{label}</Text>
        {!isNeutral &&
          (isPositive ? (
            <View className="flex-row items-center gap-1">
              <TrendingUp className={cn("text-green-500", labelSize)} />
              <Text className={cn("text-green-500", labelSize)}>
                {formattedDifference}
              </Text>
            </View>
          ) : (
            <View className="flex-row items-center gap-1">
              <TrendingDown className={cn("text-red-500", labelSize)} />
              <Text className={cn("text-red-500", labelSize)}>
                {formattedDifference}
              </Text>
            </View>
          ))}
      </View>

      <View className={cn("relative w-full", progressHeight)}>
        <Progress
          value={initialPercentage}
          className={cn(
            "bg-gray-200 rounded-full overflow-hidden",
            progressHeight
          )}
          indicatorClassName={"bg-gray-500"}
        />

        {!isNeutral && (
          <View
            className={cn(
              "absolute rounded-r-full",
              isPositive ? "bg-green-500" : "bg-red-500",
              progressHeight
            )}
            style={{
              width: `${differencePercentage}%`,
              left: `${initialPercentage}%`,
            }}
          />
        )}
      </View>

      <View className="flex-row justify-between">
        <Text className={cn("text-muted-foreground", labelSize)}>
          Before: {formattedInitial}
        </Text>
        <Text className={cn("text-muted-foreground", labelSize)}>
          After: {formattedFinal}
        </Text>
      </View>
    </View>
  );
}
