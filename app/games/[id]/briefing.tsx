import { View } from "react-native";
import { useRouter } from "expo-router";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function BriefingScreen() {
  const router = useRouter();
  const currentGameId = useGameManagerStore((state) => state.currentGameId);

  return (
    <View>
      <Text>Briefing</Text>
      <Button
        onPress={() => router.replace(`/games/${currentGameId}/(tabs)/current`)}
      >
        Back
      </Button>
    </View>
  );
}
