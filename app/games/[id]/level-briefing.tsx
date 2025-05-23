import { Image } from "react-native";

import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import ParallaxScrollView from "~/components/shared/layout/ParallaxScrollView";
import BriefingSituationsList from "~/components/screens/level-briefing/BriefingSituationsList";

export default function LevelBriefingScreen() {
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
    >
      <BriefingSituationsList levelId={currentLevelId} />
    </ParallaxScrollView>
  );
}
