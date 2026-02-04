import * as React from 'react';
import { useShallow } from 'zustand/shallow';

import GameMetadata from '~/components/connected/games/GameMetadata';
import { GameCardView } from '~/components/screens/games/GameCardView';
import { useGameNavigation } from '~/lib/hooks/useGameNavigation';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

import type Game from '~/lib/db/models/Game';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const { deleteGame, isLoading } = useGameManagerStore(
    useShallow((state) => ({
      deleteGame: state.deleteGame,
      isLoading: state.isLoading,
    })),
  );
  const { continueGame } = useGameNavigation();

  const handleDelete = () => {
    deleteGame(game.id).catch((err) => {
      console.error('Failed to delete game from card:', err);
    });
  };

  return (
    <GameCardView
      game={game}
      isLoading={isLoading}
      onDelete={handleDelete}
      onLoad={() => continueGame(game.id)}
      metadataContent={<GameMetadata game={game} />}
    />
  );
}
