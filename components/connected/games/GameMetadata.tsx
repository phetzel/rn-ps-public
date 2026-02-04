import { withObservables } from '@nozbe/watermelondb/react';

import { GameMetadataView } from '~/components/screens/games/GameMetadataView';
import { observePresidentApprovalRating } from '~/lib/db/helpers/observations';

import type Game from '~/lib/db/models/Game';

interface GameMetadataProps {
  game: Game;
  presApprovalRating: number;
}

function GameMetadata({ game, presApprovalRating }: GameMetadataProps) {
  return <GameMetadataView game={game} presApprovalRating={presApprovalRating} />;
}

export default withObservables(['game'], ({ game }: { game: Game }) => ({
  game,
  presApprovalRating: observePresidentApprovalRating(game.id),
}))(GameMetadata);
