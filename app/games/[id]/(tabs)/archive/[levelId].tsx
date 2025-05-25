import React, { useState } from "react";
import { Image, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { Text } from "~/components/ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import ParallaxScrollView from "~/components/shared/layout/ParallaxScrollView";
import ExchangesOutcomeList from "~/components/shared/exchanges-outcome-list/ExchangesOutcomeList";
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
      <View className="p-4 gap-4">
        <Tabs value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="flex-row mx-4">
            <TabsTrigger value="exchanges" className="flex-1">
              <Text>Exchanges</Text>
            </TabsTrigger>
            <TabsTrigger value="outcomes" className="flex-1">
              <Text>Outcomes</Text>
            </TabsTrigger>
            <TabsTrigger value="situations" className="flex-1">
              <Text>Situations</Text>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="exchanges" className="mt-4">
            <ExchangesOutcomeList levelId={levelId} />
          </TabsContent>

          <TabsContent value="outcomes" className="mt-4">
            <View className="p-4">
              <Text className="text-center text-muted-foreground">
                Outcomes content coming soon...
              </Text>
            </View>
          </TabsContent>

          <TabsContent value="situations" className="mt-4">
            <View className="p-4">
              <Text className="text-center text-muted-foreground">
                Situations content coming soon...
              </Text>
            </View>
          </TabsContent>
        </Tabs>
      </View>
    </ParallaxScrollView>
  );
}

export default ArchiveLevelScreen;
