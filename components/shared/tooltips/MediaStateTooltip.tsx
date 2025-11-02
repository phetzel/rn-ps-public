import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function MediaStateTooltip() {
  return (
    <View className="gap-1">
      <Text className="text-primary font-bold">Media Outlets</Text>
      <Text className="text-muted-foreground leading-tight">Outlets covering the administration and shaping perception.</Text>
      <Text className="text-muted-foreground leading-tight">
        <Text className="font-semibold">Approval Rating</Text>: Shapes situation coverage, amplifying both good and bad effects.
      </Text>
    </View>
  );
}



