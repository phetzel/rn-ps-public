import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observePresident } from "~/lib/db/helpers";
import type President from "~/lib/db/models/President";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Award } from "~/lib/icons/Award";

interface PresidentStateCardProps {
  president: President | undefined;
}

const PresidentStateCard = ({ president }: PresidentStateCardProps) => {
  if (!president) return null;

  return (
    <Card>
      <CardHeader className="pb-2 flex-row items-center gap-2">
        <Award className="h-5 w-5 text-primary" />
        <CardTitle className="text-lg">President</CardTitle>
      </CardHeader>

      <CardContent>
        <Text className="text-xl font-bold mb-2">{president.name}</Text>

        <View className="gap-2">
          <View>
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-sm">Approval Rating</Text>
              <Text className="text-sm font-medium">
                {president.approvalRating}%
              </Text>
            </View>
            <Progress value={president.approvalRating} className="h-2" />
          </View>

          <View>
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-sm">Relationship with You</Text>
              <Text className="text-sm font-medium">
                {president.psRelationship}%
              </Text>
            </View>
            <Progress value={president.psRelationship} className="h-2" />
          </View>
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  president: observePresident(gameId),
}));

export default enhance(PresidentStateCard);
