import { withObservables } from '@nozbe/watermelondb/react';

import { HomeMenuCard } from '~/components/connected/home/HomeMenuCard';
import { HomeScreenView } from '~/components/screens/home/HomeScreenView';
import { observeAllGames } from '~/lib/db/helpers';

import type Game from '~/types/view-models/Game';

interface HomeScreenProps {
  games: Game[];
}

function HomeScreen({ games }: HomeScreenProps) {
  return (
    <HomeScreenView
      games={games}
      renderHomeMenuCard={(allGames) => <HomeMenuCard games={allGames} />}
    />
  );
}

export default withObservables([], () => ({
  games: observeAllGames(),
}))(HomeScreen);
