import React, { useEffect } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function GameSessionLayout() {
  const router = useRouter();
  const { id: gameIdString } = useLocalSearchParams<{ id: string }>();
  const gameId = parseInt(gameIdString || "0", 10);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
