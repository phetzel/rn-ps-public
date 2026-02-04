import { withObservables } from '@nozbe/watermelondb/react';

import { ArchivedLevelCardView } from '~/components/screens/tab-archive/ArchivedLevelCardView';
import { observeLevel, observeSituationsByLevelId } from '~/lib/db/helpers';

import type { Level, Situation } from '~/lib/db/models';

interface ArchivedLevelCardProps {
  levelId: string;
  level?: Level;
  situations: Situation[];
}

function ArchivedLevelCard({ levelId, level, situations }: ArchivedLevelCardProps) {
  return <ArchivedLevelCardView level={level} situations={situations} levelId={levelId} />;
}

export default withObservables(['levelId'], ({ levelId }: { levelId: string }) => ({
  level: observeLevel(levelId),
  situations: observeSituationsByLevelId(levelId),
}))(ArchivedLevelCard);
