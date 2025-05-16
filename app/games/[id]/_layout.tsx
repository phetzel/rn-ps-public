import React from "react";
import { Stack, useRouter } from "expo-router";

import { HeaderBackIcon } from "~/components/HeaderBackIcon";

export default function GameSessionLayout() {
  const router = useRouter();

  const handleGoToCurrent = () => {
    router.dismissTo("/games/(tabs)/current");
  };

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Current", headerShown: false }}
      />
      <Stack.Screen
        name="level-briefing"
        options={{
          title: "Briefing",
          headerLeft: () => <HeaderBackIcon onPress={handleGoToCurrent} />,
        }}
      />
      <Stack.Screen name="press-conference" options={{ headerShown: false }} />
      <Stack.Screen
        name="press-outcomes"
        options={{
          title: "Press Results",
          headerLeft: () => <HeaderBackIcon onPress={handleGoToCurrent} />,
        }}
      />
      <Stack.Screen
        name="situation-outcomes"
        options={{
          title: "Situation Results",
          headerLeft: () => <HeaderBackIcon onPress={handleGoToCurrent} />,
        }}
      />
      <Stack.Screen
        name="level-complete"
        options={{
          title: "End of Month",
          headerLeft: () => <HeaderBackIcon onPress={handleGoToCurrent} />,
        }}
      />
    </Stack>
  );
}
