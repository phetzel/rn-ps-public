import React from "react";
import { Stack, useRouter } from "expo-router";

import { HeaderBackIcon } from "~/components/shared/layout/HeaderBackIcon";
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";

export default function GameSessionLayout() {
  const { backToCurrentTab } = useLevelNavigation();

  const handleGoToCurrent = () => {
    backToCurrentTab();
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
      <Stack.Screen
        name="level-press-conference"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="level-press-outcomes"
        options={{
          title: "Press Results",
          headerLeft: () => <HeaderBackIcon onPress={handleGoToCurrent} />,
        }}
      />
      <Stack.Screen
        name="level-situation-outcomes"
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
