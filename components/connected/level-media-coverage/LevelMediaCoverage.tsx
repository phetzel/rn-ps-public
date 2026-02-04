import { withObservables } from '@nozbe/watermelondb/react';

import { LevelMediaCoverageView } from '~/components/shared/level-media-coverage/LevelMediaCoverageView';
import { observeLevel } from '~/lib/db/helpers/observations';
import { useMediaCoverageData } from '~/lib/hooks/useMediaCoverageData';

import type { Level } from '~/lib/db/models';

interface LevelMediaCoverageProps {
  levelId: string;
  level: Level | null;
}

function LevelMediaCoverage({ levelId, level }: LevelMediaCoverageProps) {
  const { mediaBoosts, totalBoost, enhancedDeltas, error } = useMediaCoverageData({ levelId });

  const isAdWatched = level?.situationAdWatched || false;

  return (
    <LevelMediaCoverageView
      mediaBoosts={mediaBoosts}
      totalBoost={totalBoost}
      enhancedDeltas={enhancedDeltas}
      isAdWatched={isAdWatched}
      errorMessage={error?.message}
    />
  );
}

export default withObservables(['levelId'], ({ levelId }) => ({
  level: observeLevel(levelId),
}))(LevelMediaCoverage);
