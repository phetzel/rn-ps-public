import React from 'react';
import { View } from 'react-native';

import CabinetStateCard from '~/components/connected/tab-state/CabinetStateCard';
import MediaStateCard from '~/components/connected/tab-state/MediaStateCard';
import PresidentStateCard from '~/components/connected/tab-state/PresidentStateCard';
import SubgroupStateCard from '~/components/connected/tab-state/SubgroupStateCard';
import { TabStateContent as TabStateContentView } from '~/components/screens/tab-state/TabStateContent';

interface TabStateContentProps {
  gameId: string;
}

export function TabStateContent({ gameId }: TabStateContentProps) {
  return (
    <TabStateContentView
      gameId={gameId}
      renderAdminCards={(currentGameId) => (
        <View className="gap-4">
          <PresidentStateCard gameId={currentGameId} />
          <CabinetStateCard gameId={currentGameId} />
        </View>
      )}
      renderMediaCard={(currentGameId) => <MediaStateCard gameId={currentGameId} />}
      renderOpinionCard={(currentGameId) => <SubgroupStateCard gameId={currentGameId} />}
    />
  );
}
