import { withObservables } from '@nozbe/watermelondb/react';
import { View } from 'react-native';

import LevelConsequencesCard from '~/components/shared/level-consequences/LevelConsequencesCard';
import LevelConsequencesRiskCard from '~/components/shared/level-consequences/LevelConsequencesRiskCard';
import { Text } from '~/components/ui/text';
import { observeLevel, observeCabinetMembersByLevel } from '~/lib/db/helpers';

import type { CabinetMember, Level } from '~/lib/db/models';
import type { OutcomeSnapshotType } from '~/types';

interface LevelConsequencesProps {
  level: Level;
  outcomeSnapshot: OutcomeSnapshotType;
  cabinetMembers: CabinetMember[];
}

const LevelConsequences = ({ level, cabinetMembers }: LevelConsequencesProps) => {
  // Get snapshot from level directly
  const outcomeSnapshot = level.parseOutcomeSnapshot;

  if (!outcomeSnapshot) {
    return (
      <View
        className="p-4"
        accessible={true}
        accessibilityLabel="Level not yet completed - no consequences available"
      >
        <Text className="text-muted-foreground">
          Level consequences will be available after completion.
        </Text>
      </View>
    );
  }

  const { final, consequences } = outcomeSnapshot;

  if (!final || !consequences) {
    return (
      <View
        className="p-4"
        accessible={true}
        accessibilityLabel="Consequence data not available - level may not be complete"
      >
        <Text className="text-muted-foreground">
          Consequence data not available - level may not be complete.
        </Text>
      </View>
    );
  }

  return (
    <View
      className="gap-4"
      accessible={true}
      accessibilityLabel={`Level consequences and risk assessment.`}
    >
      <LevelConsequencesCard
        gameId={level.game_id}
        consequences={consequences}
        cabinetMembers={cabinetMembers}
      />
      <LevelConsequencesRiskCard
        finalSnapshot={final}
        cabinetMembers={cabinetMembers}
        firedMembers={consequences?.cabinetMembersFired || []}
      />
    </View>
  );
};

const enhance = withObservables(['levelId'], ({ levelId }) => ({
  level: observeLevel(levelId),
  cabinetMembers: observeCabinetMembersByLevel(levelId),
}));

export default enhance(LevelConsequences);
