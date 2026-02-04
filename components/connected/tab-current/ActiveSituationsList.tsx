import { withObservables } from '@nozbe/watermelondb/react';

import { ActiveSituationsListView } from '~/components/screens/tab-current/ActiveSituationsListView';
import { observeSituationsByLevelId } from '~/lib/db/helpers/observations';

import type { Situation } from '~/lib/db/models';

interface ActiveSituationsListProps {
  levelId: string;
  situations: Situation[];
}

function ActiveSituationsList({ situations }: ActiveSituationsListProps) {
  return <ActiveSituationsListView situations={situations} />;
}

export default withObservables(['levelId'], ({ levelId }: { levelId: string }) => ({
  situations: observeSituationsByLevelId(levelId),
}))(ActiveSituationsList);
