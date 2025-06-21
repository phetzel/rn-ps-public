import React from "react";
import { View } from "react-native";

import { Separator } from "~/components/ui/separator";
import SituationsOutcomeList from "~/components/shared/situations-outcome-list/SituationsOutcomeList";
import LevelMediaCoverage from "~/components/shared/level-media-coverage/LevelMediaCoverage";

interface LevelOverviewEventsProps {
  levelId: string;
}

export default function LevelOverviewEvents({
  levelId,
}: LevelOverviewEventsProps) {
  return (
    <View className="gap-4">
      <SituationsOutcomeList levelId={levelId} />
      <Separator />
      <LevelMediaCoverage levelId={levelId} />
    </View>
  );
}
