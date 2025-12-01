import { withObservables } from '@nozbe/watermelondb/react';
import * as React from 'react';

import { HomeHeader } from '~/components/screens/home/HomeHeader';
import { HomeMenuCard } from '~/components/screens/home/HomeMenuCard';
import { ThemedView } from '~/components/shared/layout/ThemedView';
import { observeAllGames } from '~/lib/db/helpers';

import type Game from '~/lib/db/models/Game';

interface ScreenProps {
  games: Game[];
}

export function HomeScreen({ games }: ScreenProps) {
  return (
    <ThemedView className="justify-around items-center p-6">
      <HomeHeader />
      <HomeMenuCard games={games} />
    </ThemedView>
  );
}

const enhance = withObservables([], () => ({
  games: observeAllGames(),
}));

export default enhance(HomeScreen);
