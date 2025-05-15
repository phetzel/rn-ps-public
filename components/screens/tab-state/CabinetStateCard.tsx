import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeActiveCabinetMembers } from "~/lib/db/helpers";
import type CabinetMember from "~/lib/db/models/CabinetMember";
import { Briefcase } from "~/lib/icons/Briefcase";
import { Separator } from "~/components/ui/separator";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { StateProgress } from "~/components/screens/tab-state/StateProgress";

interface CabinetStateCardProps {
  cabinetMembers: CabinetMember[];
}

const CabinetStateCard = ({ cabinetMembers }: CabinetStateCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-4 flex-row items-center gap-2">
        <Briefcase className="text-primary" />
        <CardTitle>Cabinet</CardTitle>
      </CardHeader>

      <CardContent className="gap-4">
        {cabinetMembers.map((member, idx) => {
          const memberStaticData = member.staticData;
          return (
            <View key={member.id} className="gap-2">
              <View className="flex justify-between items-start">
                <View>
                  <Text className="text-xl font-bold">{member.name}</Text>
                  <Text className="text-lg text-muted-foreground leading-none">
                    {memberStaticData.cabinetName}
                  </Text>
                </View>
              </View>

              <View className="gap-2">
                <StateProgress
                  label="Approval Rating"
                  value={member.approvalRating}
                />

                <StateProgress
                  label="Relationship with You"
                  value={member.psRelationship}
                />
              </View>

              {idx !== cabinetMembers.length - 1 && (
                <Separator className="mt-4" />
              )}
            </View>
          );
        })}
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  cabinetMembers: observeActiveCabinetMembers(gameId),
}));

export default enhance(CabinetStateCard);
