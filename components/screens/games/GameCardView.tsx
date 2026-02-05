import * as React from 'react';

import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { formatDate } from '~/lib/utils';

import { GameActions } from './GameActions';
import { GameCardHeader } from './GameCardHeader';
import { GameTimeInfo } from './GameTimeInfo';

import type Game from '~/types/view-models/Game';

interface GameCardViewProps {
  game: Game;
  isLoading: boolean;
  onDelete: () => void;
  onLoad: () => void;
  metadataContent: React.ReactNode;
}

export function GameCardView({
  game,
  isLoading,
  onDelete,
  onLoad,
  metadataContent,
}: GameCardViewProps) {
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
      <CardContent>{metadataContent}</CardContent>
      <CardFooter className="flex-row justify-between items-center p-3 bg-muted/30 border-t border-border">
        <GameTimeInfo lastPlayed={game.updatedAt} />
        <GameActions game={game} isLoading={isLoading} onDelete={onDelete} onLoad={onLoad} />
      </CardFooter>
    </Card>
  );
}
