import { Image } from "react-native";
import { useRouter } from "expo-router";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import ParallaxScrollView from "~/components/ParallaxScrollView";
import ConferenceContent from "~/components/press-conference/ConferenceContent";

export default function LevelPressConferenceScreen() {
  const router = useRouter();
  const currentGameId = useGameManagerStore((state) => state.currentGameId);
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("~/assets/images/header-press.png")}
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
      <ConferenceContent levelId={currentLevelId} />
    </ParallaxScrollView>
  );
}
