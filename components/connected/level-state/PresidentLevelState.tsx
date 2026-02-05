import { withObservables } from '@nozbe/watermelondb/react';

import { PresidentLevelStateView } from '~/components/shared/level-state/PresidentLevelStateView';
import { observeGame } from '~/lib/db/helpers';

import type { Game } from '~/lib/db/models';
import type { OutcomeSnapshotType } from '~/types';

interface PresidentLevelStateProps {
  gameId: string;
  outcomeSnapshot: OutcomeSnapshotType;
  game: Game | null;
}

function PresidentLevelState({ outcomeSnapshot, game }: PresidentLevelStateProps) {
  if (!game) return null;

  return (
    <PresidentLevelStateView
      presName={game.presName}
      presLeaning={game.presLeaning}
      outcomeSnapshot={outcomeSnapshot}
    />
  );
}

export default withObservables(['gameId'], ({ gameId }) => ({
  game: observeGame(gameId),
}))(PresidentLevelState);
