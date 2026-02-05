import { withObservables } from '@nozbe/watermelondb/react';

import { CabinetStateCardView } from '~/components/screens/tab-state/CabinetStateCardView';
import { observeActiveCabinetMembers } from '~/lib/db/helpers';

import type CabinetMember from '~/lib/db/models/CabinetMember';

interface CabinetStateCardProps {
  gameId: string;
  cabinetMembers: CabinetMember[];
}

function CabinetStateCard({ cabinetMembers }: CabinetStateCardProps) {
  return <CabinetStateCardView cabinetMembers={cabinetMembers} />;
}

export default withObservables(['gameId'], ({ gameId }: { gameId: string }) => ({
  cabinetMembers: observeActiveCabinetMembers(gameId),
}))(CabinetStateCard);
