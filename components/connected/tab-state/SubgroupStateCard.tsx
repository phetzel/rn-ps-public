import { withObservables } from '@nozbe/watermelondb/react';

import { SubgroupStateCardView } from '~/components/screens/tab-state/SubgroupStateCardView';
import { observeSubgroupApprovals } from '~/lib/db/helpers';

import type SubgroupApproval from '~/lib/db/models/SubgroupApproval';

interface SubgroupStateCardProps {
  gameId: string;
  subgroupApprovals: SubgroupApproval[];
}

function SubgroupStateCard({ subgroupApprovals }: SubgroupStateCardProps) {
  return <SubgroupStateCardView subgroupApprovals={subgroupApprovals} />;
}

export default withObservables(['gameId'], ({ gameId }: { gameId: string }) => ({
  subgroupApprovals: observeSubgroupApprovals(gameId),
}))(SubgroupStateCard);
