import { withObservables } from '@nozbe/watermelondb/react';

import { SubgroupLevelStateView } from '~/components/shared/level-state/SubgroupLevelStateView';
import { observeSubgroupApprovals } from '~/lib/db/helpers';

import type SubgroupApproval from '~/lib/db/models/SubgroupApproval';
import type { OutcomeSnapshotType } from '~/types';

interface SubgroupLevelStateProps {
  gameId: string;
  outcomeSnapshot: OutcomeSnapshotType;
  subgroupApprovals: SubgroupApproval[];
}

function SubgroupLevelState({ outcomeSnapshot, subgroupApprovals }: SubgroupLevelStateProps) {
  return (
    <SubgroupLevelStateView
      outcomeSnapshot={outcomeSnapshot}
      subgroupApprovals={subgroupApprovals}
    />
  );
}

export default withObservables(['gameId'], ({ gameId }) => ({
  subgroupApprovals: observeSubgroupApprovals(gameId),
}))(SubgroupLevelState);
