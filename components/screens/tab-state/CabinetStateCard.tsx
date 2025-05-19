import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeActiveCabinetMembers } from "~/lib/db/helpers";
import type CabinetMember from "~/lib/db/models/CabinetMember";
import { Briefcase } from "~/lib/icons/Briefcase";
import { Separator } from "~/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { StateProgress } from "~/components/screens/tab-state/StateProgress";
import { CabinetMemberName } from "~/components/shared/CabinetMemberName";

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
        {cabinetMembers.map((member, idx) => (
          <View key={member.id} className="gap-2">
            <CabinetMemberName cabinetMember={member} />

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
        ))}
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  cabinetMembers: observeActiveCabinetMembers(gameId),
}));

export default enhance(CabinetStateCard);
