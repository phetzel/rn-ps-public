import { Stack, useRouter } from "expo-router";
import * as React from "react";

import { HeaderBackIcon } from "~/components/shared/layout/HeaderBackIcon";

export default function GamesLayout() {
  const router = useRouter();

  const handleBackToHome = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <Stack
      screenOptions={{
        headerBackTitle: "Back",
        headerLeft: () => <HeaderBackIcon onPress={handleBackToHome} />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Saved Games",
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          title: "New Game",
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
