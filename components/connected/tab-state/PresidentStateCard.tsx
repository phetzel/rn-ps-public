import { withObservables } from '@nozbe/watermelondb/react';

import { PresidentStateCardView } from '~/components/screens/tab-state/PresidentStateCardView';
import { observeGame, observePresidentApprovalRating } from '~/lib/db/helpers';

import type { Game } from '~/lib/db/models';

interface PresidentStateCardProps {
  gameId: string;
  game: Game | null;
  presApprovalRating: number;
}

function PresidentStateCard({ game, presApprovalRating }: PresidentStateCardProps) {
  return <PresidentStateCardView game={game} presApprovalRating={presApprovalRating} />;
}

export default withObservables(['gameId'], ({ gameId }: { gameId: string }) => ({
  game: observeGame(gameId),
  presApprovalRating: observePresidentApprovalRating(gameId),
}))(PresidentStateCard);
