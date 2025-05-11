import { Image } from "react-native";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import ParallaxScrollView from "~/components/ParallaxScrollView";
import PressOutcomesContent from "~/components/press-outcomes/PressOutcomesContent";

export default function PressOutcomesScreen() {
  const gameId = useGameManagerStore((state) => state.currentGameId);
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  if (!gameId || !currentLevelId) {
    return null;
  }

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("~/assets/images/header-outcome.png")}
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
      <PressOutcomesContent gameId={gameId} levelId={currentLevelId} />
    </ParallaxScrollView>
  );
}
