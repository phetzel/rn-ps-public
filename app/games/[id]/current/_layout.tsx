import React from "react";
import { Stack, useRouter } from "expo-router";

import { useGameNavigation } from "~/lib/hooks/useGameNavigation";
import { HeaderBackIcon } from "~/components/shared/layout/HeaderBackIcon";

export default function GameSessionLayout() {
  const router = useRouter();
  const { goToHome } = useGameNavigation();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleBackToHome = () => {
    goToHome();
  };

  return (
    <Stack
      screenOptions={{
        headerLeft: () => <HeaderBackIcon onPress={handleBack} />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Current Month",
          headerLeft: () => <HeaderBackIcon onPress={handleBackToHome} />,
        }}
      />
      <Stack.Screen
        name="level-briefing"
        options={{
          title: "Briefing",
        }}
      />
      <Stack.Screen
        name="level-press-conference"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="level-press-outcomes"
        options={{
          title: "Press Results",
        }}
      />
      <Stack.Screen
        name="level-situation-outcomes"
        options={{
          title: "Situation Results",
        }}
      />
      <Stack.Screen
        name="level-complete"
        options={{
          title: "End of Month",
        }}
      />
    </Stack>
  );
}
