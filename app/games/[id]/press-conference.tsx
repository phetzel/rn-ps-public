import { View, Image } from "react-native";
import { useRouter } from "expo-router";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import ParallaxScrollView from "~/components/ParallaxScrollView";

export default function PressConferenceScreen() {
  const router = useRouter();
  const currentGameId = useGameManagerStore((state) => state.currentGameId);

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
      <View>
        <Text>Press Conference</Text>
        <Button
          onPress={() =>
            router.replace(`/games/${currentGameId}/(tabs)/current`)
          }
        >
          Back
        </Button>
      </View>
    </ParallaxScrollView>
  );
}
