import React, { useMemo } from "react";
import { View, FlatList } from "react-native";

import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import ProgressDifference from "~/components/level-complete/ProgressDifference";
import type { CabinetMember } from "~/lib/db/models";
import type { OutcomeSnapshotType, CabinetStaticId } from "~/types";

interface RelationshipsCabinetProps {
  outcomeSnapshot: OutcomeSnapshotType;
  cabinetMembers?: CabinetMember[];
}

const RelationshipsCabinet = ({
  outcomeSnapshot,
  cabinetMembers = [],
}: RelationshipsCabinetProps) => {
  const { initial, final } = outcomeSnapshot;

  if (!final) {
    return null;
  }

  const membersToDisplay = useMemo(() => {
    // Filter to members that have entries in the final snapshot
    return cabinetMembers.filter(
      (member) =>
        final.cabinetMembers[member.staticId as CabinetStaticId] !== undefined
    );
  }, [cabinetMembers, final.cabinetMembers]);

  if (membersToDisplay.length === 0) {
    return null;
  }

  return (
    <FlatList
      data={membersToDisplay}
      keyExtractor={(member) => member.id}
      scrollEnabled={false}
      renderItem={({ item: member, index }) => {
        const staticId = member.staticId as CabinetStaticId;
        const initialValues = initial.cabinetMembers[staticId];
        const finalValues = final.cabinetMembers[staticId];

        if (!initialValues || !finalValues) return null;

        // Get display name and role directly from the member
        const displayName = member.name;
        const displayRole = member.staticData.cabinetName;

        return (
          <View className="gap-3">
            <View>
              <Text className="text-xl font-bold">{displayName}</Text>
              {displayRole && (
                <Text className="text-lg text-muted-foreground">
                  {displayRole}
                </Text>
              )}
            </View>

            <View className="gap-2">
              <ProgressDifference
                label="Approval Rating"
                initialValue={initialValues.approvalRating}
                finalValue={finalValues.approvalRating}
                showPercentage={true}
              />

              <ProgressDifference
                label="Relationship with You"
                initialValue={initialValues.psRelationship}
                finalValue={finalValues.psRelationship}
                showPercentage={true}
              />
            </View>

            {index < membersToDisplay.length - 1 && (
              <Separator className="my-4" />
            )}
          </View>
        );
      }}
      contentContainerStyle={{ gap: 3 }}
    />
  );
};

export default RelationshipsCabinet;
