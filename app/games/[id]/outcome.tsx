import { Image } from "react-native";
import { useRouter } from "expo-router";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import ParallaxScrollView from "~/components/ParallaxScrollView";
import OutcomeContent from "~/components/outcome/OutcomeContent";

export default function OutcomeScreen() {
  const router = useRouter();

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
      <OutcomeContent gameId={gameId} levelId={currentLevelId} />
    </ParallaxScrollView>
  );
}
