import { Image } from "react-native";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { Text } from "~/components/ui/text";
import ParallaxScrollView from "~/components/ParallaxScrollView";

export default function ArchiveScreen() {
  const currentGameId = useGameManagerStore((state) => state.currentGameId);

  if (!currentGameId) {
    return <Text>No game ID</Text>;
  }
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("~/assets/images/header-archive.png")}
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
      <Text>Archive Screen</Text>
    </ParallaxScrollView>
  );
}
