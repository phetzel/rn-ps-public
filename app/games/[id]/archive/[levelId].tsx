import React from "react";
import { Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "~/components/shared/layout/ParallaxScrollView";
import ArchivedLevelContent from "~/components/screens/archived-level/ArchivedLevelContent";
import { EmptyState } from "~/components/shared/EmptyState";

interface ArchiveLevelScreenProps {}

function ArchiveLevelScreen({}: ArchiveLevelScreenProps) {
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
      <ArchivedLevelContent levelId={levelId} />
    </ParallaxScrollView>
  );
}

export default ArchiveLevelScreen;
