import * as React from 'react';

import { HomeHeader } from '~/components/screens/home/HomeHeader';
import { ThemedView } from '~/components/shared/layout/ThemedView';

import type Game from '~/types/view-models/Game';

interface HomeScreenViewProps {
  games: Game[];
  renderHomeMenuCard: (games: Game[]) => React.ReactNode;
}

export function HomeScreenView({ games, renderHomeMenuCard }: HomeScreenViewProps) {
  return (
    <ThemedView className="justify-around items-center p-6">
      <HomeHeader />
      {renderHomeMenuCard(games)}
    </ThemedView>
  );
}
