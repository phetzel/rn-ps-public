import { withObservables } from '@nozbe/watermelondb/react';

import LevelMediaCoverage from '~/components/connected/level-media-coverage/LevelMediaCoverage';
import SituationReview from '~/components/connected/level-situation-outcomes/SituationReview';
import SituationsOutcomeList from '~/components/connected/situations-outcome-list/SituationsOutcomeList';
import { SituationOutcomesContentView } from '~/components/screens/level-situation-outcomes/SituationOutcomesContentView';
import { observeGame, observeLevel } from '~/lib/db/helpers/observations';

import type { Game, Level } from '~/lib/db/models';

interface SituationOutcomesContentProps {
  gameId: string;
  levelId: string;
  game: Game | null;
  level: Level;
}

function SituationOutcomesContent({ gameId, levelId, game, level }: SituationOutcomesContentProps) {
  return (
    <SituationOutcomesContentView
      gameId={gameId}
      levelId={levelId}
      game={game}
      level={level}
      renderSituationsOutcomeList={(contentLevelId) => (
        <SituationsOutcomeList levelId={contentLevelId} />
      )}
      renderLevelMediaCoverage={(contentLevelId) => <LevelMediaCoverage levelId={contentLevelId} />}
      renderSituationReview={({ isAdWatched, onAdComplete }) => (
        <SituationReview isAdWatched={isAdWatched} onAdComplete={onAdComplete} />
      )}
    />
  );
}

export default withObservables(
  ['gameId', 'levelId'],
  ({ gameId, levelId }: { gameId: string; levelId: string }) => ({
    game: observeGame(gameId),
    level: observeLevel(levelId),
  }),
)(SituationOutcomesContent);
