import { View } from 'react-native';

import LevelConsequencesCard from '~/components/shared/level-consequences/LevelConsequencesCard';
import LevelConsequencesRiskCard from '~/components/shared/level-consequences/LevelConsequencesRiskCard';
import { Text } from '~/components/ui/text';

import type { OutcomeSnapshotType } from '~/types';
import type { CabinetMember } from '~/types/view-models';

interface LevelConsequencesViewProps {
  gameId: string | null;
  outcomeSnapshot: OutcomeSnapshotType | null;
  cabinetMembers: CabinetMember[];
  renderConsequenceGameComplete: (gameId: string) => React.ReactNode;
}

export function LevelConsequencesView({
  gameId,
  outcomeSnapshot,
  cabinetMembers,
  renderConsequenceGameComplete,
}: LevelConsequencesViewProps) {
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
      {gameId && (
        <LevelConsequencesCard
          gameId={gameId}
          consequences={consequences}
          cabinetMembers={cabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />
      )}
      <LevelConsequencesRiskCard
        finalSnapshot={final}
        cabinetMembers={cabinetMembers}
        firedMembers={consequences?.cabinetMembersFired || []}
      />
    </View>
  );
}
