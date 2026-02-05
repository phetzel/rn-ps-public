import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import LevelOverviewContent from '~/components/connected/level-overview/LevelOverviewContent';
import { EmptyState } from '~/components/shared/EmptyState';
import ParallaxScrollView from '~/components/shared/layout/ParallaxScrollView';

function ArchiveLevelScreen() {
  const { levelId } = useLocalSearchParams<{ levelId: string }>();

  if (!levelId) {
    return <EmptyState message="Level not found" />;
  }

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require('~/assets/images/header-archive.png')}
          style={{
            width: '100%',
            height: '100%',
            bottom: 0,
            left: 0,
            position: 'absolute',
          }}
        />
      }
    >
      <LevelOverviewContent levelId={levelId} />
    </ParallaxScrollView>
  );
}

export default ArchiveLevelScreen;
