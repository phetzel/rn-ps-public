import React from "react";
import { View } from "react-native";

import { Separator } from "~/components/ui/separator";
import ExchangesOutcomeList from "~/components/shared/exchanges-outcome-list/ExchangesOutcomeList";
import PressResultsTotal from "~/components/shared/level-overview/PressResultsTotal";

interface LevelOverviewPressProps {
  levelId: string;
}

export default function LevelOverviewPress({
  levelId,
}: LevelOverviewPressProps) {
  return (
    <View className="gap-4">
      <ExchangesOutcomeList levelId={levelId} />
      <Separator />
      <PressResultsTotal levelId={levelId} />
    </View>
  );
}
