import * as React from 'react';

import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { useGameNavigation } from '~/lib/hooks/useGameNavigation';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';
import { formatDate } from '~/lib/utils';

import { GameActions } from './GameActions';
import { GameCardHeader } from './GameCardHeader';
import GameMetadata from './GameMetadata';
import { GameTimeInfo } from './GameTimeInfo';

import type Game from '~/lib/db/models/Game';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const { deleteGame, isLoading } = useGameManagerStore((state) => ({
    setCurrentGameId: state.setCurrentGameId,
    deleteGame: state.deleteGame,
    isLoading: state.isLoading,
  }));
  const { continueGame } = useGameNavigation();

  const handleDelete = () => {
    deleteGame(game.id).catch((err) => {
      console.error('Failed to delete game from card:', err);
    });
  };

  return (
    <Card
      className="w-full overflow-hidden border-l-4 border-l-primary"
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`${game.presName} Press Secretary game. ${formatDate(
        game.currentMonth,
        game.currentYear,
      )}. Status: ${game.status}`}
      accessibilityHint="Double tap to view game details and actions"
    >
      <GameCardHeader game={game} />
      <CardContent>
        <GameMetadata game={game} />
      </CardContent>
      <CardFooter className="flex-row justify-between items-center p-3 bg-muted/30 border-t border-border">
        <GameTimeInfo lastPlayed={game.updatedAt} />
        <GameActions
          game={game}
          isLoading={isLoading}
          onDelete={handleDelete}
          onLoad={() => continueGame(game.id)}
        />
      </CardFooter>
    </Card>
  );
}

export default GameCard;
