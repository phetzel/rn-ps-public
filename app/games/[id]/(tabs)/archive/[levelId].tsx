import React, { useState } from "react";
import { Image, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { Text } from "~/components/ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import ParallaxScrollView from "~/components/shared/layout/ParallaxScrollView";
import ExchangesOutcomeList from "~/components/shared/exchanges-outcome-list/ExchangesOutcomeList";
import SituationsOutcomeList from "~/components/shared/situations-outcome-list/SituationsOutcomeList";
import LevelMediaCoverage from "~/components/shared/level-media-coverage/LevelMediaCoverage";
import { EmptyState } from "~/components/shared/EmptyState";

interface ArchiveLevelScreenProps {}

function ArchiveLevelScreen({}: ArchiveLevelScreenProps) {
  const [currentTab, setCurrentTab] = useState<string>("exchanges");
  const { levelId } = useLocalSearchParams<{ levelId: string }>();

  if (!levelId) {
    return <EmptyState message="Level not found" />;
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
      <View className="gap-4">
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          accessibilityLabel="Archive sections"
        >
          <TabsList className="flex-row">
            <TabsTrigger
              value="exchanges"
              className="flex-1"
              accessibilityLabel="Press exchanges"
            >
              <Text>Exchanges</Text>
            </TabsTrigger>
            <TabsTrigger
              value="situations"
              className="flex-1"
              accessibilityLabel="Press exchanges"
            >
              <Text>Situations</Text>
            </TabsTrigger>
            <TabsTrigger
              value="outcomes"
              className="flex-1"
              accessibilityLabel="Level outcomes"
            >
              <Text>Outcomes</Text>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="exchanges" className="mt-4">
            <ExchangesOutcomeList levelId={levelId} />
          </TabsContent>

          <TabsContent value="situations" className="mt-4 gap-4">
            <SituationsOutcomeList levelId={levelId} />

            <View className="gap-2">
              <Text className="text-2xl font-semibold">Results</Text>
              <LevelMediaCoverage levelId={levelId} />
            </View>
          </TabsContent>

          <TabsContent value="complete" className="mt-4">
            <View className="p-4">
              <Text className="text-center text-muted-foreground">
                Complete content coming soon...
              </Text>
            </View>
          </TabsContent>
        </Tabs>
      </View>
    </ParallaxScrollView>
  );
}

export default ArchiveLevelScreen;
