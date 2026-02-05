import { withObservables } from '@nozbe/watermelondb/react';

import LevelOverviewContent from '~/components/connected/level-overview/LevelOverviewContent';
import { LevelCompleteContentView } from '~/components/screens/level-complete/LevelCompleteContentView';
import { observeLevel } from '~/lib/db/helpers/observations';

import type { Level } from '~/lib/db/models';

interface LevelCompleteContentProps {
  gameId: string;
  levelId: string;
  level: Level;
}

function LevelCompleteContent({ gameId, levelId, level }: LevelCompleteContentProps) {
  return (
    <LevelCompleteContentView
      gameId={gameId}
      levelId={levelId}
      level={level}
      renderLevelOverviewContent={(contentLevelId) => (
        <LevelOverviewContent levelId={contentLevelId} />
      )}
    />
  );
}

export default withObservables(
  ['gameId', 'levelId'],
  ({ levelId }: { gameId: string; levelId: string }) => ({
    level: observeLevel(levelId),
  }),
)(LevelCompleteContent);
