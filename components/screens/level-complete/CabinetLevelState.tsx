import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeCabinetMembersByLevel } from "~/lib/db/helpers";
import type CabinetMember from "~/lib/db/models/CabinetMember";
import { Briefcase } from "~/lib/icons/Briefcase";
import { Separator } from "~/components/ui/separator";
import { Text } from "~/components/ui/text";
import LevelProgress from "~/components/screens/level-complete/LevelProgress";
import { CabinetMemberName } from "~/components/shared/CabinetMemberName";
import type { OutcomeSnapshotType } from "~/types";

interface CabinetLevelStateProps {
  outcomeSnapshot: OutcomeSnapshotType;
  cabinetMembers: CabinetMember[];
}

const CabinetLevelState = ({
  outcomeSnapshot,
  cabinetMembers,
}: CabinetLevelStateProps) => {
  const { initial, final } = outcomeSnapshot;

  if (!final) {
    return null;
  }

  return (
    <View className="gap-4">
      {cabinetMembers.map((member, idx) => {
        const initialValues = initial.cabinetMembers[member.staticId];
        const finalValues = final.cabinetMembers[member.staticId];

        if (!initialValues || !finalValues) return null;

        return (
          <View key={member.id} className="gap-2">
            <CabinetMemberName cabinetMember={member} />

            <View className="gap-2">
              <LevelProgress
                label="Approval Rating"
                initialValue={initialValues.approvalRating}
                finalValue={finalValues.approvalRating}
              />

              <LevelProgress
                label="Relationship with You"
                initialValue={initialValues.psRelationship}
                finalValue={finalValues.psRelationship}
              />
            </View>

            {idx !== cabinetMembers.length - 1 && (
              <Separator className="mt-4" />
            )}
          </View>
        );
      })}
    </View>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  cabinetMembers: observeCabinetMembersByLevel(levelId),
}));

export default enhance(CabinetLevelState);
