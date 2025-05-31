import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeCabinetMembersByLevel } from "~/lib/db/helpers";
import type CabinetMember from "~/lib/db/models/CabinetMember";
import { Separator } from "~/components/ui/separator";
import LevelProgress from "~/components/screens/level-complete/LevelProgress";
import { CabinetMemberName } from "~/components/shared/entity/CabinetMemberName";
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
    <View
      className="gap-4"
      accessible={true}
      accessibilityLabel={`Cabinet members monthly update: ${cabinetMembers.length} members`}
    >
      {cabinetMembers.map((member, idx) => {
        const initialValues = initial.cabinetMembers[member.staticId];
        const finalValues = final.cabinetMembers[member.staticId];

        if (!initialValues || !finalValues) return null;

        const approvalChange =
          finalValues.approvalRating - initialValues.approvalRating;
        const relationshipChange =
          finalValues.psRelationship - initialValues.psRelationship;

        return (
          <View
            key={member.id}
            className="gap-2"
            accessible={true}
            accessibilityLabel={`${
              member.staticData.cabinetName
            }. Approval changed by ${
              approvalChange > 0 ? "+" : ""
            }${approvalChange}%. Relationship changed by ${
              relationshipChange > 0 ? "+" : ""
            }${relationshipChange}%.`}
          >
            <CabinetMemberName cabinetMember={member} />

            <View className="gap-2" accessible={false}>
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
