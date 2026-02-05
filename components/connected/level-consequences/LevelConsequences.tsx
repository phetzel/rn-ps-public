import { withObservables } from '@nozbe/watermelondb/react';

import ConsequenceGameComplete from '~/components/connected/level-consequences/ConsequenceGameComplete';
import { LevelConsequencesView } from '~/components/shared/level-consequences/LevelConsequencesView';
import { observeCabinetMembersByLevel, observeLevel } from '~/lib/db/helpers';

import type { CabinetMember, Level } from '~/lib/db/models';

interface LevelConsequencesProps {
  level: Level | null;
  cabinetMembers: CabinetMember[];
}

function LevelConsequences({ level, cabinetMembers }: LevelConsequencesProps) {
  const outcomeSnapshot = level?.parseOutcomeSnapshot ?? null;
  const gameId = level?.game_id ?? null;

  return (
    <LevelConsequencesView
      gameId={gameId}
      outcomeSnapshot={outcomeSnapshot}
      cabinetMembers={cabinetMembers}
      renderConsequenceGameComplete={(currentGameId) => (
        <ConsequenceGameComplete gameId={currentGameId} />
      )}
    />
  );
}

export default withObservables(['levelId'], ({ levelId }) => ({
  level: observeLevel(levelId),
  cabinetMembers: observeCabinetMembersByLevel(levelId),
}))(LevelConsequences);
