import { withObservables } from '@nozbe/watermelondb/react';

import LevelConsequences from '~/components/connected/level-consequences/LevelConsequences';
import ActiveSituationsList from '~/components/connected/tab-current/ActiveSituationsList';
import CurrentLevelCard from '~/components/connected/tab-current/CurrentLevelCard';
import { CurrentTabScreenView } from '~/components/screens/tab-current/CurrentTabScreenView';
import { isGameEnded } from '~/lib/db/helpers';
import { observeGame } from '~/lib/db/helpers/observations';
import { useCurrentLevelStore } from '~/lib/stores/currentLevelStore';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

import type { Game } from '~/lib/db/models';

interface CurrentTabScreenProps {
  game: Game | null;
}

function CurrentTabScreen({ game }: CurrentTabScreenProps) {
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  const isGameOver = game && isGameEnded(game.status);
  const shouldShowConsequences = isGameOver && currentLevelId;

  return (
    <CurrentTabScreenView
      currentLevelCard={<CurrentLevelCard levelId={currentLevelId} />}
      mainContent={
        shouldShowConsequences ? (
          <LevelConsequences levelId={currentLevelId} />
        ) : (
          <ActiveSituationsList levelId={currentLevelId} />
        )
      }
    />
  );
}

export default withObservables([], () => {
  const gameId = useGameManagerStore.getState().currentGameId;

  return {
    game: gameId ? observeGame(gameId) : null,
  };
})(CurrentTabScreen);
