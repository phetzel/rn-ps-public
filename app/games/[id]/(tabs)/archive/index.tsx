import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";
import { FlatList } from "react-native";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { observeCompletedLevels } from "~/lib/db/helpers";
import { Level } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import ParallaxScrollView from "~/components/shared/layout/ParallaxScrollView";
import ArchivedLevelCard from "~/components/screens/tab-archive/ArchivedLevelCard";
import { Image } from "react-native";

interface ArchiveIndexScreenProps {
  completedLevels: Level[];
}

function ArchiveIndexScreen({ completedLevels }: ArchiveIndexScreenProps) {
  const currentGameId = useGameManagerStore((state) => state.currentGameId);

  if (!currentGameId) {
    return <Text>No game ID</Text>;
  }

  const renderLevelCard = ({ item }: { item: Level }) => (
    <ArchivedLevelCard levelId={item.id} />
  );

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
        {completedLevels.length === 0 ? (
          <View className="items-center justify-center py-8">
            <Text className="text-muted-foreground text-center">
              No completed levels yet.{"\n"}
              Complete your first month to see it here!
            </Text>
          </View>
        ) : (
          <>
            <Text className="text-xl font-bold mb-2">
              Completed Levels ({completedLevels.length})
            </Text>
            <FlatList
              data={completedLevels}
              renderItem={renderLevelCard}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              ItemSeparatorComponent={() => <View className="h-4" />}
            />
          </>
        )}
      </View>
    </ParallaxScrollView>
  );
}

const enhance = withObservables([], () => {
  const currentGameId = useGameManagerStore.getState().currentGameId;
  return {
    completedLevels: currentGameId ? observeCompletedLevels(currentGameId) : [],
  };
});

export default enhance(ArchiveIndexScreen);
