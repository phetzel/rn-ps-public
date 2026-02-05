import { withObservables } from '@nozbe/watermelondb/react';

import { ConsequenceGameCompleteView } from '~/components/shared/level-consequences/ConsequenceGameCompleteView';
import { observeGame, observePresidentApprovalRating } from '~/lib/db/helpers';

import type { Game } from '~/lib/db/models';

interface ConsequenceGameCompleteProps {
  game: Game | null;
  presApprovalRating: number;
}

function ConsequenceGameComplete({ game, presApprovalRating }: ConsequenceGameCompleteProps) {
  if (!game) return null;

  return (
    <ConsequenceGameCompleteView
      psName={game.psName}
      presName={game.presName}
      presPsRelationship={game.presPsRelationship}
      presApprovalRating={presApprovalRating}
    />
  );
}

export default withObservables(['gameId'], ({ gameId }) => ({
  game: observeGame(gameId),
  presApprovalRating: observePresidentApprovalRating(gameId),
}))(ConsequenceGameComplete);
