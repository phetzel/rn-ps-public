import { Stack } from "expo-router";
import * as React from "react";
import { useRouter } from "expo-router";

import { HeaderBackIcon } from "~/components/HeaderBackIcon";
import { ThemeToggle } from "~/components/ThemeToggle";

export default function GamesLayout() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Stack screenOptions={{ headerBackTitle: "Back" }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Saved Games",
          headerRight: () => <ThemeToggle />,
          headerLeft: () => <HeaderBackIcon onPress={handleBack} />,
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          title: "New Game",
          headerRight: () => <ThemeToggle />,
          headerLeft: () => <HeaderBackIcon onPress={handleBack} />,
        }}
      />
    </Stack>
  );
}
