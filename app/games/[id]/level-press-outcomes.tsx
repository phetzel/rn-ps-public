import { Image } from "react-native";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import ParallaxScrollView from "~/components/shared/layout/ParallaxScrollView";
import PressOutcomesContent from "~/components/screens/level-press-outcomes/PressOutcomesContent";

export default function LevelPressOutcomesScreen() {
  const gameId = useGameManagerStore((state) => state.currentGameId);
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  if (!gameId || !currentLevelId) {
    return null;
  }

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("~/assets/images/header-press-outcome.png")}
          style={{
            width: "100%",
            height: "100%",
            bottom: 0,
            left: 0,
            position: "absolute",
          }}
        />
      }
    >
      <PressOutcomesContent gameId={gameId} levelId={currentLevelId} />
    </ParallaxScrollView>
  );
}
