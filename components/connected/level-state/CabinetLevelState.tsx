import { withObservables } from '@nozbe/watermelondb/react';

import { CabinetLevelStateView } from '~/components/shared/level-state/CabinetLevelStateView';
import { observeCabinetMembersByLevel } from '~/lib/db/helpers';

import type CabinetMember from '~/lib/db/models/CabinetMember';
import type { OutcomeSnapshotType } from '~/types';

interface CabinetLevelStateProps {
  levelId: string;
  outcomeSnapshot: OutcomeSnapshotType;
  cabinetMembers: CabinetMember[];
}

function CabinetLevelState({ outcomeSnapshot, cabinetMembers }: CabinetLevelStateProps) {
  return (
    <CabinetLevelStateView outcomeSnapshot={outcomeSnapshot} cabinetMembers={cabinetMembers} />
  );
}

export default withObservables(['levelId'], ({ levelId }) => ({
  cabinetMembers: observeCabinetMembersByLevel(levelId),
}))(CabinetLevelState);
