import { withObservables } from '@nozbe/watermelondb/react';

import SituationOutcomeItem from '~/components/connected/situations-outcome-list/SituationOutcomeItem';
import { SituationsOutcomeListView } from '~/components/shared/situations-outcome-list/SituationsOutcomeListView';
import { observeSituationsByLevelId } from '~/lib/db/helpers/observations';

import type { Situation } from '~/lib/db/models';

interface SituationsOutcomeListProps {
  levelId: string;
  situations: Situation[];
}

function SituationsOutcomeList({ levelId, situations }: SituationsOutcomeListProps) {
  return (
    <SituationsOutcomeListView
      levelId={levelId}
      situations={situations}
      renderSituationOutcomeItem={(situation) => <SituationOutcomeItem situation={situation} />}
    />
  );
}

export default withObservables(['levelId'], ({ levelId }: { levelId: string }) => ({
  situations: observeSituationsByLevelId(levelId),
}))(SituationsOutcomeList);
