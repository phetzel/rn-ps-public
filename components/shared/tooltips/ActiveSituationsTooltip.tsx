import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function ActiveSituationsTooltip() {
  return (
    <View className="gap-1">
      <Text className="text-primary font-bold">Active Situations</Text>
      <Text className="text-muted-foreground leading-tight">
        Current issues the administration is handling and topics the press will ask about.
      </Text>
    </View>
  );
}


