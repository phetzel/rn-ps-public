import { View } from "react-native";
import { TrendingUp } from "~/lib/icons/TrendingUp";
import { TrendingDown } from "~/lib/icons/TrendingDown";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";

interface ProgressDifferenceProps {
  label: string;
  initialValue: number;
  finalValue: number;
  // Optional display configurations
  showPercentage?: boolean;
  minValue?: number;
  maxValue?: number;
}

export default function ProgressDifference({
  label,
  initialValue,
  finalValue,
  showPercentage = true,
  minValue = 0,
  maxValue = 100,
}: ProgressDifferenceProps) {
  const isPositive = finalValue > initialValue;
  const isNeutral = finalValue === initialValue;
  const difference = finalValue - initialValue;
  const absoluteDifference = Math.abs(difference);

  // Calculate percentage for progress bar display
  const initialPercentage =
    ((initialValue - minValue) / (maxValue - minValue)) * 100;
  const differencePercentage =
    (absoluteDifference / (maxValue - minValue)) * 100;

  // Format values for display
  const formattedInitial = showPercentage
    ? `${initialValue}%`
    : initialValue.toString();
  const formattedFinal = showPercentage
    ? `${finalValue}%`
    : finalValue.toString();
  const formattedDifference = showPercentage
    ? `${isPositive ? "+" : ""}${difference}%`
    : `${isPositive ? "+" : ""}${difference}`;

  return (
    <View className="w-full gap-2">
      <View className="flex-row justify-between items-center mb-1">
        <Text className="font-medium">{label}</Text>
        <View className="flex-row items-center gap-1">
          {!isNeutral &&
            (isPositive ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            ))}

          {!isNeutral && (
            <Text
              className={`font-medium ${
                isPositive
                  ? "text-green-500"
                  : isNeutral
                  ? "text-muted-foreground"
                  : "text-red-500"
              }`}
            >
              {formattedDifference}
            </Text>
          )}
        </View>
      </View>

      <View className="relative w-full h-2">
        <Progress
          value={initialPercentage}
          className="h-2 bg-gray-200 rounded-full overflow-hidden"
          indicatorClassName="bg-gray-500"
        />

        {!isNeutral && (
          <View
            className={`absolute h-2 ${
              isPositive ? "bg-green-500" : "bg-red-500"
            } rounded-r-full`}
            style={{
              width: `${differencePercentage}%`,
              left: `${initialPercentage}%`,
            }}
          />
        )}
      </View>

      <View className="flex-row justify-between mt-1">
        <Text className="text-muted-foreground">
          Before: {formattedInitial}
        </Text>
        <Text className="text-muted-foreground">After: {formattedFinal}</Text>
      </View>
    </View>
  );
}
