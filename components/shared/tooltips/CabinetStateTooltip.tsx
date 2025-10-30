import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function CabinetStateTooltip() {
  return (
    <View className="gap-1">
      <Text className="text-primary font-bold">Cabinet</Text>
      <Text className="text-muted-foreground leading-tight">Senior officials you work with daily.</Text>
      <Text className="text-muted-foreground leading-tight">
        <Text className="font-semibold">Approval Rating</Text>: Each member’s public standing. Too low and they may be fired, causing instability.
      </Text>
      <Text className="text-muted-foreground leading-tight">
        <Text className="font-semibold">Relationship</Text>: Willingness to back you and share intel. Too low means no information; high can unlock classified intel.
      </Text>
    </View>
  );
}



