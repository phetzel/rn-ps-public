import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { TrendingUp } from "~/lib/icons/TrendingUp";
import { TrendingDown } from "~/lib/icons/TrendingDown";
import { Minus } from "~/lib/icons/Minus";

interface ImpactItemProps {
  title: string;
  name: string;
  reaction: string;
  weight: number;
}

export default function ImpactItem({
  title,
  name,
  reaction,
  weight,
}: ImpactItemProps) {
  let icon = null;
  let textColor = "";

  if (weight > 0) {
    icon = <TrendingUp className="h-2 w-2 text-green-500" />;
    textColor = "text-green-500";
  } else if (weight < 0) {
    icon = <TrendingDown className="h-2 w-2 text-red-500" />;
    textColor = "text-red-500";
  } else {
    icon = <Minus className="h-2 w-2 text-muted-foreground" />;
    textColor = "text-muted-foreground";
  }

  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-1">
        <Text className="text-xs text-muted-foreground">{title}</Text>
        <Text className="font-semibold">{name}</Text>
        <Text className="text-sm italic">{reaction}</Text>
      </View>
      <View className="flex-row items-center gap-1">
        {icon}
        <Text className={`${textColor} font-medium`}>
          {weight > 0 ? `+${weight}` : weight}
        </Text>
      </View>
    </View>
  );
}
