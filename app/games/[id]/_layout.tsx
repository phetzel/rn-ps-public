import React from "react";
import { Stack, useRouter } from "expo-router";

import { HeaderBackIcon } from "~/components/HeaderBackIcon";

export default function GameSessionLayout() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Current", headerShown: false }}
      />
      <Stack.Screen
        name="briefing"
        options={{
          title: "Briefing",
          headerLeft: () => <HeaderBackIcon onPress={handleGoBack} />,
        }}
      />
      <Stack.Screen name="press-conference" options={{ headerShown: false }} />
      <Stack.Screen
        name="press-outcomes"
        options={{ title: "Press Results" }}
      />
      <Stack.Screen
        name="situation-outcomes"
        options={{ title: "Situation Results" }}
      />
      <Stack.Screen name="level-complete" options={{ title: "End of Month" }} />
    </Stack>
  );
}
