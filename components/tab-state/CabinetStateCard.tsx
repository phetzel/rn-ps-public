import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeCabinetMembers } from "~/lib/db/helpers";
import type CabinetMember from "~/lib/db/models/CabinetMember";
import { Briefcase } from "~/lib/icons/Briefcase";
import { CABINET_DISPLAY_ROLES } from "~/lib/constants";
import { Separator } from "~/components/ui/separator";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";

interface CabinetStateCardProps {
  cabinetMembers: CabinetMember[];
}

const CabinetStateCard = ({ cabinetMembers }: CabinetStateCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2 flex-row items-center gap-2">
        <Briefcase className="h-5 w-5 text-primary" />
        <CardTitle className="text-lg">Cabinet</CardTitle>
      </CardHeader>

      <CardContent>
        <View className="gap-4">
          {cabinetMembers?.map((member, idx) => (
            <View key={member.id} className="gap-2">
              <View className="flex justify-between items-start">
                <View>
                  <Text className="text-xl font-bold">{member.name}</Text>
                  <Text className="text-lg text-muted-foreground">
                    {CABINET_DISPLAY_ROLES[member.role]}
                  </Text>
                </View>
              </View>

              <View className="gap-2">
                <View className="gap-2">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-sm">Approval</Text>
                    <Text className="text-sm font-medium">
                      {member.approvalRating}%
                    </Text>
                  </View>
                  <Progress value={member.approvalRating} className="h-1.5" />
                </View>

                <View className="gap-2">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-sm">Relationship with You</Text>
                    <Text className="text-sm font-medium">
                      {member.psRelationship}%
                    </Text>
                  </View>
                  <Progress value={member.psRelationship} className="h-1.5" />
                </View>
              </View>

              {idx !== cabinetMembers.length - 1 && (
                <Separator className="mt-4" />
              )}
            </View>
          ))}
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  cabinetMembers: observeCabinetMembers(gameId),
}));

export default enhance(CabinetStateCard);
