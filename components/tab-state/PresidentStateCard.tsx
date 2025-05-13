import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeGame } from "~/lib/db/helpers";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import PoliticalLeaningBadge from "~/components/shared/PoliticalLeaningBadge";
import { Game } from "~/lib/db/models";
import { Award } from "~/lib/icons/Award";

interface PresidentStateCardProps {
  game: Game | null;
}

const PresidentStateCard = ({ game }: PresidentStateCardProps) => {
  if (!game) return null;

  return (
    <Card>
      <CardHeader className="pb-2 flex-row items-center gap-2">
        <Award className="h-5 w-5 text-primary" />
        <CardTitle className="text-lg">President</CardTitle>
      </CardHeader>

      <CardContent className="gap-2">
        <View className="flex-row items-center gap-2">
          <Text className="text-xl font-bold">{game.presName}</Text>
          <PoliticalLeaningBadge politicalLeaning={game.presParty} />
        </View>

        <View className="gap-2">
          <View>
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-sm">Approval Rating</Text>
              <Text className="text-sm font-medium">
                {game.presApprovalRating}%
              </Text>
            </View>
            <Progress value={game.presApprovalRating} className="h-2" />
          </View>

          <View>
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-sm">Relationship with You</Text>
              <Text className="text-sm font-medium">
                {game.presPsRelationship}%
              </Text>
            </View>
            <Progress value={game.presPsRelationship} className="h-2" />
          </View>
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  game: observeGame(gameId),
}));

export default enhance(PresidentStateCard);
