import { withObservables } from '@nozbe/watermelondb/react';
import * as React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import GameCard from '~/components/screens/games/GameCard';
import { EmptyState } from '~/components/shared/EmptyState';
import { ErrorDisplay } from '~/components/shared/ErrorDisplay';
import { ThemedView } from '~/components/shared/layout/ThemedView';
import { observeAllGames } from '~/lib/db/helpers';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

import type Game from '~/lib/db/models/Game';
// Components

interface GamesScreenProps {
  allGames: Game[] | undefined; // Receive all games (or undefined if loading)
}

function GamesScreen({ allGames }: GamesScreenProps) {
  const { error: actionError } = useGameManagerStore((state) => ({
    error: state.error,
  }));

  const isLoading = allGames === undefined;

  return (
    <ThemedView className="p-4">
      {isLoading ? ( // Show loading only if list is empty initially
        <ActivityIndicator size="large" className="my-10" />
      ) : actionError ? (
        <ErrorDisplay message={actionError} />
      ) : allGames.length === 0 ? (
        <EmptyState message="No Saved Games Found" />
      ) : (
        <FlatList
          data={allGames}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <GameCard game={item} />}
          ItemSeparatorComponent={() => <View className="h-3" />}
          contentContainerClassName="py-4"
        />
      )}
    </ThemedView>
  );
}

const enhance = withObservables([], () => ({
  allGames: observeAllGames(),
}));

export default enhance(GamesScreen);
