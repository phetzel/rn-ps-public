import { Image, View } from "react-native";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import ParallaxScrollView from "~/components/ParallaxScrollView";
import { Text } from "~/components/ui/text";
import LevelCompleteContent from "~/components/level-complete/LevelCompleteContent";
import NextLevelButton from "~/components/level-complete/NextLevelButton";

export default function LevelCompleteScreen() {
  const gameId = useGameManagerStore((state) => state.currentGameId);
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  if (!gameId || !currentLevelId) {
    return null;
  }

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          // source={require("~/assets/images/header-outcome.png")}
          style={{
            width: "100%",
            height: "100%",
            bottom: 0,
            left: 0,
            position: "absolute",
          }}
        />
      }
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <View className="gap-4">
        <Text className="text-2xl font-bold">Month Complete</Text>

        <LevelCompleteContent gameId={gameId} levelId={currentLevelId} />
        <NextLevelButton gameId={gameId} levelId={currentLevelId} />
      </View>
    </ParallaxScrollView>
  );
}
