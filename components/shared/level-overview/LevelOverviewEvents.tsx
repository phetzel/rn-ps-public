import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import ExchangesOutcomeList from "~/components/shared/exchanges-outcome-list/ExchangesOutcomeList";
import SituationsOutcomeList from "~/components/shared/situations-outcome-list/SituationsOutcomeList";
import LevelMediaCoverage from "~/components/shared/level-media-coverage/LevelMediaCoverage";
import { MessageSquare, AlertCircle, Newspaper } from "~/lib/icons";

interface LevelOverviewEventsProps {
  levelId: string;
}

export default function LevelOverviewEvents({
  levelId,
}: LevelOverviewEventsProps) {
  return (
    <View className="gap-6">
      {/* Press Conference Exchanges */}
      <ExchangesOutcomeList levelId={levelId} />

      <Separator />

      {/* Situation Outcomes */}
      <SituationsOutcomeList levelId={levelId} />

      <Separator />

      {/* Media Coverage */}
      <LevelMediaCoverage levelId={levelId} />
    </View>
  );
}
