import { Image } from "react-native";

import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import ParallaxScrollView from "~/components/ParallaxScrollView";
import BriefingSituationsList from "~/components/screens/level-briefing/BriefingSituationsList";

export default function LevelBriefingScreen() {
  const currentGameId = useGameManagerStore((state) => state.currentGameId);
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("~/assets/images/header-briefing.png")}
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
      <BriefingSituationsList gameId={currentGameId} levelId={currentLevelId} />
    </ParallaxScrollView>
  );
}
