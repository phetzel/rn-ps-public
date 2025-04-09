import { useState } from "react";
import { Image } from "react-native";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import ParallaxScrollView from "~/components/ParallaxScrollView";
import CabinetStateCard from "~/components/tab-state/CabinetStateCard";
import MediaStateCard from "~/components/tab-state/MediaStateCard";
import PresidentStateCard from "~/components/tab-state/PresidentStateCard";
import PressSecretaryStateCard from "~/components/tab-state/PressSecretaryStateCard";
import SubgroupState from "~/components/tab-state/SubgroupState";

export default function StateScreen() {
  const [currentTab, setCurrentTab] = useState<string>("admin");
  const currentGameId = useGameManagerStore((state) => state.currentGameId);

  if (!currentGameId) {
    return <Text>No game ID</Text>;
  }

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("~/assets/images/header-state.png")}
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
      <Tabs
        value={currentTab}
        onValueChange={setCurrentTab}
        className="w-full max-w-[400px] mx-auto flex-col gap-2"
      >
        <TabsList className="flex-row w-full">
          <TabsTrigger value="admin" className="flex-1">
            <Text>Admin</Text>
          </TabsTrigger>
          <TabsTrigger value="public" className="flex-1">
            <Text>Opinion</Text>
          </TabsTrigger>
          <TabsTrigger value="media" className="flex-1">
            <Text>Media</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="admin" className="mt-4 gap-4">
          <PressSecretaryStateCard gameId={currentGameId} />
          <PresidentStateCard gameId={currentGameId} />
          <CabinetStateCard gameId={currentGameId} />
        </TabsContent>

        <TabsContent value="public" className="mt-4">
          <SubgroupState gameId={currentGameId} />
        </TabsContent>

        <TabsContent value="media" className="mt-4">
          <MediaStateCard gameId={currentGameId} />
        </TabsContent>
      </Tabs>
    </ParallaxScrollView>
  );
}
