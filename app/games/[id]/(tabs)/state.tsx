import { Image } from "react-native";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import ParallaxScrollView from "~/components/ParallaxScrollView";
import CabinetState from "~/components/tab-state/CabinetState";
import MediaState from "~/components/tab-state/MediaState";
import SubgroupState from "~/components/tab-state/SubgroupState";
import { Text } from "~/components/ui/text";

export default function StateScreen() {
  const currentGameId = useGameManagerStore((state) => state.currentGameId);

  if (!currentGameId) {
    return <Text>No game ID</Text>;
  }

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("~/assets/images/tab-header-state.png")}
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
      <CabinetState gameId={currentGameId} />
      <MediaState gameId={currentGameId} />
      <SubgroupState gameId={currentGameId} />
    </ParallaxScrollView>
  );
}
