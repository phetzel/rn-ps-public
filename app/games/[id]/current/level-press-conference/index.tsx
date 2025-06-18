import { Image } from "react-native";

import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import ParallaxScrollView from "~/components/shared/layout/ParallaxScrollView";
import ConferenceContent from "~/components/screens/level-press-conference/ConferenceContent";

export default function LevelPressConferenceScreen() {
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
    >
      <ConferenceContent levelId={currentLevelId} />
    </ParallaxScrollView>
  );
}
