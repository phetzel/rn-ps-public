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
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="briefing"
        options={{
          title: "Briefing",
          headerLeft: () => <HeaderBackIcon onPress={handleGoBack} />,
        }}
      />
      <Stack.Screen name="press-conference" options={{ headerShown: false }} />
      <Stack.Screen name="outcome" options={{ title: "Outcome" }} />
    </Stack>
  );
}
