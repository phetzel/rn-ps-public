import { useRouter } from "expo-router";

import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import ActiveSituationsList from "~/components/tab-current/ActiveSituationsList";
import CurrentLevelCard from "~/components/tab-current/CurrentLevelCard";
import { ThemedView } from "~/components/ThemedView";

export default function CurrentScreen() {
  const router = useRouter();
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  return (
    <ThemedView className="p-4">
      <CurrentLevelCard levelId={currentLevelId} />
      <ActiveSituationsList levelId={currentLevelId} />
    </ThemedView>
  );
}
