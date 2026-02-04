import { withObservables } from '@nozbe/watermelondb/react';

import { ImpactListView } from '~/components/shared/impact/ImpactListView';
import {
  observeCabinetMembersByLevel,
  observeGame,
  observeSubgroupApprovals,
} from '~/lib/db/helpers';

import type { CabinetMember, Game, SubgroupApproval } from '~/lib/db/models';
import type { DisplayImpacts } from '~/types';

interface ImpactListProps {
  impacts: DisplayImpacts;
  gameId: string;
  levelId: string;
  game: Game | null | undefined;
  cabinetMembers: CabinetMember[];
  subgroupApprovals: SubgroupApproval[];
}

function ImpactList({ impacts, game, cabinetMembers, subgroupApprovals }: ImpactListProps) {
  return (
    <ImpactListView
      impacts={impacts}
      game={game}
      cabinetMembers={cabinetMembers}
      subgroupApprovals={subgroupApprovals}
    />
  );
}

export default withObservables(
  ['gameId', 'levelId'],
  ({ gameId, levelId }: { gameId: string; levelId: string }) => ({
    game: observeGame(gameId),
    cabinetMembers: observeCabinetMembersByLevel(levelId),
    subgroupApprovals: observeSubgroupApprovals(gameId),
  }),
)(ImpactList);
