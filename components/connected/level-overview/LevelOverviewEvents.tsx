import React from 'react';
import { View } from 'react-native';

import LevelMediaCoverage from '~/components/connected/level-media-coverage/LevelMediaCoverage';
import SituationsOutcomeList from '~/components/connected/situations-outcome-list/SituationsOutcomeList';
import { Separator } from '~/components/ui/separator';

interface LevelOverviewEventsProps {
  levelId: string;
}

export default function LevelOverviewEvents({ levelId }: LevelOverviewEventsProps) {
  return (
    <View className="gap-4">
      <SituationsOutcomeList levelId={levelId} />
      <Separator />
      <LevelMediaCoverage levelId={levelId} />
    </View>
  );
}
