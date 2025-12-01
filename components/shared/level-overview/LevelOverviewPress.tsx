import React from 'react';
import { View } from 'react-native';

import ExchangesOutcomeList from '~/components/shared/exchanges-outcome-list/ExchangesOutcomeList';
import PressResultsTotal from '~/components/shared/level-overview/PressResultsTotal';
import { Separator } from '~/components/ui/separator';

interface LevelOverviewPressProps {
  levelId: string;
}

export default function LevelOverviewPress({ levelId }: LevelOverviewPressProps) {
  return (
    <View className="gap-4">
      <ExchangesOutcomeList levelId={levelId} />
      <Separator />
      <PressResultsTotal levelId={levelId} />
    </View>
  );
}
