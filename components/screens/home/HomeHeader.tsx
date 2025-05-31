import * as React from "react";
import { View } from "react-native";

import { Logo } from "~/components/shared/Logo";
import { Text } from "~/components/ui/text";

export function HomeHeader() {
  return (
    <View
      className="w-full items-center justify-center mt-10"
      accessible={true}
      accessibilityRole="header"
      accessibilityLabel="Press Office - Command the Podium. Press Secretary simulation game."
    >
      <Logo size="large" />
      <Text
        className="text-5xl font-bold mt-4"
        accessibilityRole="header"
        accessibilityLabel="Press Office"
      >
        Press Office
      </Text>
      <Text
        className="text-2xl text-muted-foreground"
        accessibilityLabel="Game tagline: Command the Podium"
      >
        Command the Podium
      </Text>
    </View>
  );
}
