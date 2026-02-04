import { withObservables } from '@nozbe/watermelondb/react';

import GameCard from '~/components/connected/games/GameCard';
import { GamesScreenView } from '~/components/screens/games/GamesScreenView';
import { observeAllGames } from '~/lib/db/helpers';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

import type Game from '~/lib/db/models/Game';

interface GamesScreenProps {
  allGames: Game[] | undefined;
}

function GamesScreen({ allGames }: GamesScreenProps) {
  const actionError = useGameManagerStore((state) => state.error);

  return (
    <GamesScreenView
      allGames={allGames}
      actionError={actionError}
      renderGameCard={(game) => <GameCard game={game} />}
    />
  );
}

export default withObservables([], () => ({
  allGames: observeAllGames(),
}))(GamesScreen);
