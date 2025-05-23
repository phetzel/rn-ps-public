import { useRouter } from "expo-router";

import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import ActiveSituationsList from "~/components/screens/tab-current/ActiveSituationsList";
import CurrentLevelCard from "~/components/screens/tab-current/CurrentLevelCard";
import { ThemedView } from "~/components/shared/layout/ThemedView";

export default function CurrentScreen() {
  const router = useRouter();
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  return (
    <ThemedView className="p-4 gap-4">
      <CurrentLevelCard levelId={currentLevelId} />
      <ActiveSituationsList levelId={currentLevelId} />
    </ThemedView>
  );
}
