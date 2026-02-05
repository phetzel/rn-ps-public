import { withObservables } from '@nozbe/watermelondb/react';

import SituationPreferences from '~/components/connected/preference/SituationPreferences';
import { BriefingSituationsListView } from '~/components/screens/level-briefing/BriefingSituationsListView';
import { observeLevel, observeSituationsByLevelId } from '~/lib/db/helpers/observations';

import type { Level, Situation } from '~/lib/db/models';

interface BriefingSituationsListProps {
  levelId: string;
  situations: Situation[];
  level: Level;
}

function BriefingSituationsList({ levelId, situations, level }: BriefingSituationsListProps) {
  return (
    <BriefingSituationsListView
      levelId={levelId}
      situations={situations}
      level={level}
      renderSituationPreferences={(situation) => <SituationPreferences situation={situation} />}
    />
  );
}

export default withObservables(
  ['gameId', 'levelId'],
  ({ levelId }: { gameId: string; levelId: string }) => ({
    situations: observeSituationsByLevelId(levelId),
    level: observeLevel(levelId),
  }),
)(BriefingSituationsList);
