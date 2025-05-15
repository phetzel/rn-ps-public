import React from "react";
import { View } from "react-native";
import { Text, TextClassContext } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";

interface StateProgressProps {
  label: string;
  value: number;
  size?: "small" | "medium";
}

export function StateProgress({
  label,
  value,
  size = "small",
}: StateProgressProps) {
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
      <View className={`flex-row justify-between items-center`}>
        <TextClassContext.Provider value={labelSize}>
          <Text>{label}</Text>
        </TextClassContext.Provider>
        <TextClassContext.Provider value={labelSize}>
          <Text>{value}%</Text>
        </TextClassContext.Provider>
      </View>
      <Progress value={value} className={progressHeight} />
    </View>
  );
}
