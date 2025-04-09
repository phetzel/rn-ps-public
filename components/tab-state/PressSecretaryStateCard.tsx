import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observePressSecretary } from "~/lib/db/helpers";
import type PressSecretary from "~/lib/db/models/PressSecretary";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { User } from "~/lib/icons/User";

interface PressSecretaryStateCardProps {
  pressSecretary: PressSecretary | undefined;
}

const PressSecretaryStateCard = ({
  pressSecretary,
}: PressSecretaryStateCardProps) => {
  if (!pressSecretary) return null;

  return (
    <Card>
      <CardHeader className="pb-2 flex-row items-center gap-2">
        <User className="h-5 w-5 text-primary" />
        <CardTitle className="text-lg">Press Secretary</CardTitle>
      </CardHeader>

      <CardContent>
        <Text className="text-xl font-bold mb-2">{pressSecretary.name}</Text>

        <View className="gap-2">
          <View>
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-sm">Approval Rating</Text>
              <Text className="text-sm font-medium">
                {pressSecretary.approvalRating}%
              </Text>
            </View>
            <Progress value={pressSecretary.approvalRating} className="h-2" />
          </View>

          <View>
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-sm">Credibility</Text>
              <Text className="text-sm font-medium">
                {pressSecretary.credibility}%
              </Text>
            </View>
            <Progress
              value={Number(pressSecretary.credibility)}
              className="h-2"
            />
          </View>
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  pressSecretary: observePressSecretary(gameId),
}));

export default enhance(PressSecretaryStateCard);
