import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeGame } from "~/lib/db/helpers";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import PoliticalLeaningBadge from "~/components/shared/PoliticalLeaningBadge";
import { StateProgress } from "~/components/screens/tab-state/StateProgress";
import { Game } from "~/lib/db/models";
import { Award } from "~/lib/icons/Award";

interface PresidentStateCardProps {
  game: Game | null;
}

const PresidentStateCard = ({ game }: PresidentStateCardProps) => {
  if (!game) return null;

  return (
    <Card>
      <CardHeader className="pb-4 flex-row items-center gap-2">
        <Award className="text-primary" />
        <CardTitle>President</CardTitle>
      </CardHeader>

      <CardContent className="gap-2">
        <View className="flex-row items-center justify-between gap-2">
          <Text className="text-2xl font-bold">{game.presName}</Text>
          <PoliticalLeaningBadge politicalLeaning={game.presParty} />
        </View>

        <View className="gap-2">
          <StateProgress
            label="Approval Rating"
            value={game.presApprovalRating}
            size="medium"
          />

          <StateProgress
            label="Relationship with You"
            value={game.presPsRelationship}
            size="medium"
          />
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  game: observeGame(gameId),
}));

export default enhance(PresidentStateCard);
