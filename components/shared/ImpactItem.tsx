import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { TrendingUp } from "~/lib/icons/TrendingUp";
import { TrendingDown } from "~/lib/icons/TrendingDown";
import { Minus } from "~/lib/icons/Minus";
import { Award } from "~/lib/icons/Award";
import { Briefcase } from "~/lib/icons/Briefcase";
import { Landmark } from "~/lib/icons/Landmark";
import { User } from "~/lib/icons/User";

interface ImpactItemProps {
  title: string;
  name: string;
  reaction?: string;
  weight: number;
  entityType?: "president" | "cabinet" | "political" | "journalist";
}

export default function ImpactItem({
  title,
  name,
  reaction,
  weight,
  entityType,
}: ImpactItemProps) {
  let icon = null;
  let textColor = "";

  if (weight > 0) {
    icon = <TrendingUp className="text-green-500" />;
    textColor = "text-green-500";
  } else if (weight < 0) {
    icon = <TrendingDown className="text-red-500" />;
    textColor = "text-red-500";
  } else {
    icon = <Minus className="text-muted-foreground" />;
    textColor = "text-muted-foreground";
  }

  // Determine the entity icon
  let entityIcon = null;

  switch (entityType) {
    case "president":
      entityIcon = <Award className="text-primary mr-2" size={28} />;
      break;
    case "cabinet":
      entityIcon = <Briefcase className="text-primary mr-2" size={28} />;
      break;
    case "journalist":
      entityIcon = <User className="text-primary mr-2" size={28} />;
      break;
    // subgroup
    case "political":
      entityIcon = <Landmark className="text-primary mr-2" size={28} />;
      break;
    default:
      entityIcon = <Briefcase className="text-primary mr-2" size={28} />;
  }

  return (
    <View className="gap-1">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center flex-1">
          {entityIcon}
          <View className="flex-shrink">
            <Text className="text-sm text-muted-foreground leading-none">
              {title}
            </Text>
            <Text className="text-base font-bold">{name}</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2 flex-shrink-0">
          {icon}
          <Text className={`${textColor} font-medium`}>
            {weight > 0 ? `+${weight}` : weight}
          </Text>
        </View>
      </View>
      {reaction && <Text className="text-sm italic">{reaction}</Text>}
    </View>
  );
}
