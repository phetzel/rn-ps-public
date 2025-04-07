import { Stack } from "expo-router";
import * as React from "react";
import { useRouter } from "expo-router";

import { HeaderBackIcon } from "~/components/HeaderBackIcon";

export default function GamesLayout() {
  const router = useRouter();

  const handleBack = () => {
    router.replace("/");
  };

  return (
    <Stack screenOptions={{ headerBackTitle: "Back" }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Saved Games",
          headerLeft: () => <HeaderBackIcon onPress={handleBack} />,
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          title: "New Game",
          headerLeft: () => <HeaderBackIcon onPress={handleBack} />,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
