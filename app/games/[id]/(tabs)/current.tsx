import { View } from "react-native";
import { useRouter } from "expo-router";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import ActiveSituationsList from "~/components/tab-current/ActiveSituationsList";
import CurrentLevelCard from "~/components/tab-current/CurrentLevelCard";
import { ThemedView } from "~/components/ThemedView";

export default function CurrentScreen() {
  const router = useRouter();
  const currentGameId = useGameManagerStore((state) => state.currentGameId);
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  return (
    <ThemedView className="p-4">
      <CurrentLevelCard levelId={currentLevelId} />
      <ActiveSituationsList gameId={currentGameId} />
    </ThemedView>
  );
}
