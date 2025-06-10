import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeCabinetMembersByLevel } from "~/lib/db/helpers";
import type CabinetMember from "~/lib/db/models/CabinetMember";

import { Text } from "~/components/ui/text";
import { OutcomeSnapshotType } from "~/types";
import LevelConsequencesCard from "~/components/shared/level-consequences/LevelConsequencesCard";
import LevelConsequencesRiskCard from "~/components/shared/level-consequences/LevelConsequencesRiskCard";

interface LevelConsequencesProps {
  outcomeSnapshot: OutcomeSnapshotType;
  cabinetMembers: CabinetMember[];
}

const LevelConsequences = ({
  outcomeSnapshot,
  cabinetMembers,
}: LevelConsequencesProps) => {
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

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  cabinetMembers: observeCabinetMembersByLevel(levelId),
}));

export default enhance(LevelConsequences);
