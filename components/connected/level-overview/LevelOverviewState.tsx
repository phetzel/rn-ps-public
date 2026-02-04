import { withObservables } from '@nozbe/watermelondb/react';

import CabinetLevelState from '~/components/connected/level-state/CabinetLevelState';
import PresidentLevelState from '~/components/connected/level-state/PresidentLevelState';
import SubgroupLevelState from '~/components/connected/level-state/SubgroupLevelState';
import { LevelOverviewStateView } from '~/components/shared/level-overview/LevelOverviewStateView';
import MediaLevelState from '~/components/shared/level-state/MediaLevelState';
import { observeLevel } from '~/lib/db/helpers/observations';

import type { Level } from '~/lib/db/models';

interface LevelOverviewStateProps {
  levelId: string;
  level: Level | null;
}

function LevelOverviewState({ levelId, level }: LevelOverviewStateProps) {
  const outcomeSnapshot = level?.parseOutcomeSnapshot ?? null;
  const gameId = level?.game_id;

  return (
    <LevelOverviewStateView
      levelId={levelId}
      levelFound={!!level}
      hasOutcomeSnapshot={!!outcomeSnapshot}
      presidentState={
        gameId && outcomeSnapshot ? (
          <PresidentLevelState gameId={gameId} outcomeSnapshot={outcomeSnapshot} />
        ) : null
      }
      cabinetState={
        outcomeSnapshot ? (
          <CabinetLevelState levelId={levelId} outcomeSnapshot={outcomeSnapshot} />
        ) : null
      }
      mediaState={outcomeSnapshot ? <MediaLevelState outcomeSnapshot={outcomeSnapshot} /> : null}
      subgroupState={
        gameId && outcomeSnapshot ? (
          <SubgroupLevelState gameId={gameId} outcomeSnapshot={outcomeSnapshot} />
        ) : null
      }
    />
  );
}

export default withObservables(['levelId'], ({ levelId }) => ({
  level: observeLevel(levelId),
}))(LevelOverviewState);
