import React, { useMemo } from "react";
import { View, FlatList } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import { Briefcase } from "~/lib/icons/Briefcase";

import ProgressDifference from "~/components/outcome/ProgressDifference";
import { observeCabinetMembers } from "~/lib/db/helpers";
import type { CabinetMember } from "~/lib/db/models";
import type { OutcomeSnapshotType, CabinetStaticId } from "~/types";

interface RelationshipsCabinetCardProps {
  gameId: string;
  outcomeSnapshot: OutcomeSnapshotType;
  cabinetMembers?: CabinetMember[];
}

const RelationshipsCabinetCard = ({
  outcomeSnapshot,
  cabinetMembers = [],
}: RelationshipsCabinetCardProps) => {
  const { initial, final } = outcomeSnapshot;
  const cabinetIds = Object.keys(final.cabinetMembers || {});

  // Create a map of cabinet member IDs to their models for quick lookup
  const cabinetMemberMap = useMemo(() => {
    return new Map(cabinetMembers.map((member) => [member.id, member]));
  }, [cabinetMembers]);

  if (cabinetIds.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="pb-2 flex-row items-center gap-2">
        <Briefcase className="h-5 w-5 text-primary" />
        <CardTitle className="text-lg">Cabinet</CardTitle>
      </CardHeader>

      <CardContent>
        <FlatList
          data={cabinetIds}
          keyExtractor={(id) => id}
          scrollEnabled={false}
          renderItem={({ item: id, index }) => {
            const initialValues = initial.cabinetMembers[id];
            const finalValues = final.cabinetMembers[id];

            if (!initialValues || !finalValues) return null;

            // Look up the cabinet member from our fetched data
            const cabinetMember = cabinetMemberMap.get(id);

            // Determine display name and role
            let displayName = `Cabinet Member ${index + 1}`;
            let displayRole = "";

            if (cabinetMember) {
              // We found the cabinet member, use their name and role
              displayName = cabinetMember.name;
              displayRole = cabinetMember.staticData.cabinetName;
            }

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

                {index < cabinetIds.length - 1 && (
                  <Separator className="my-4" />
                )}
              </View>
            );
          }}
          contentContainerStyle={{ gap: 3 }}
        />
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(
  ["gameId"],
  ({ gameId }: { gameId: string }) => ({
    cabinetMembers: observeCabinetMembers(gameId),
  })
);

export default enhance(RelationshipsCabinetCard);
