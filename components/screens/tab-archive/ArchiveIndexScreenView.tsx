import React from 'react';
import { Image, View, FlatList } from 'react-native';

import ParallaxScrollView from '~/components/shared/layout/ParallaxScrollView';
import { Text } from '~/components/ui/text';

import type { Level } from '~/types/view-models';

interface ArchiveIndexScreenViewProps {
  completedLevels?: Level[];
  hasGame: boolean;
  renderLevelCard: ({ item }: { item: Level }) => React.ReactElement | null;
}

export function ArchiveIndexScreenView({
  completedLevels = [],
  hasGame,
  renderLevelCard,
}: ArchiveIndexScreenViewProps) {
  if (!hasGame) {
    return <Text>No game ID</Text>;
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
      <View className="p-4 gap-4">
        {completedLevels.length === 0 ? (
          <View className="items-center justify-center py-8">
            <Text className="text-muted-foreground text-center">
              No completed levels yet.{'\n'}
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
