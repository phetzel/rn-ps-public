import * as React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { EmptyState } from '~/components/shared/EmptyState';
import { ErrorDisplay } from '~/components/shared/ErrorDisplay';
import { ThemedView } from '~/components/shared/layout/ThemedView';

import type Game from '~/types/view-models/Game';

interface GamesScreenViewProps {
  allGames: Game[] | undefined;
  actionError: string | null;
  renderGameCard: (game: Game) => React.ReactElement | null;
}

export function GamesScreenView({ allGames, actionError, renderGameCard }: GamesScreenViewProps) {
  const isLoading = allGames === undefined;
  let content: React.ReactNode;

  if (isLoading) {
    content = <ActivityIndicator size="large" className="my-10" />;
  } else if (actionError) {
    content = <ErrorDisplay message={actionError} />;
  } else if (allGames.length === 0) {
    content = <EmptyState message="No Saved Games Found" />;
  } else {
    content = (
      <FlatList
        data={allGames}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => renderGameCard(item)}
        ItemSeparatorComponent={() => <View className="h-3" />}
        contentContainerClassName="py-4"
      />
    );
  }

  return <ThemedView className="p-4">{content}</ThemedView>;
}
