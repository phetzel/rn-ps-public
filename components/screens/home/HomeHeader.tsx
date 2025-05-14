import * as React from "react";
import { View } from "react-native";

import { Logo } from "~/components/shared/Logo";
import { Text } from "~/components/ui/text";

export function HomeHeader() {
  return (
    <View className="w-full items-center justify-center mt-10">
      <Logo size="large" />
      <Text className="text-5xl font-bold mt-4">Press Office</Text>
      <Text className="text-2xl text-muted-foreground">Command the Podium</Text>
    </View>
  );
}
