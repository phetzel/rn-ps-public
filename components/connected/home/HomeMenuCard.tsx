import * as React from 'react';
import { useShallow } from 'zustand/shallow';

import { HomeMenuCardView } from '~/components/screens/home/HomeMenuCardView';
import { MAX_ACTIVE_GAMES } from '~/lib/constants';
import { useGameNavigation } from '~/lib/hooks/useGameNavigation';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

import type Game from '~/types/view-models/Game';

interface HomeMenuCardProps {
  games: Game[];
}

export function HomeMenuCard({ games }: HomeMenuCardProps) {
  const { isLoading, error, currentGameId } = useGameManagerStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      error: state.error,
      currentGameId: state.currentGameId,
    })),
  );
  const { goToCreateGame, goToGamesList, continueGame } = useGameNavigation();

  const canStartNewGame = games.length < MAX_ACTIVE_GAMES;

  const handleNavigateToCreate = () => {
    if (canStartNewGame) {
      goToCreateGame();
    }
  };

  return (
    <HomeMenuCardView
      games={games}
      isLoading={isLoading}
      error={error}
      currentGameId={currentGameId}
      onContinueGame={() => continueGame(undefined, games)}
      onCreateGame={handleNavigateToCreate}
      onManageGames={goToGamesList}
    />
  );
}
