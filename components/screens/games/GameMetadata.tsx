import * as React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { User } from "~/lib/icons/User";
import { Award } from "~/lib/icons/Award";
import { Text } from "~/components/ui/text";
import PoliticalLeaningBadge from "~/components/shared/entity/PoliticalLeaningBadge";
import { observePresidentApprovalRating } from "~/lib/db/helpers/observations";
import type Game from "~/lib/db/models/Game";

interface GameMetadataProps {
  game: Game;
  presApprovalRating: number;
}

function GameMetadata({ game, presApprovalRating }: GameMetadataProps) {
  return (
    <View className="gap-2">
      <View
        className="flex-row items-center gap-2"
        accessible={true}
        accessibilityLabel={`President: ${game.presName}`}
      >
        <User className="text-muted-foreground" size={32} />
        <Text className="text-xl font-medium">{game.presName}</Text>
      </View>

      <View
        className="flex-row items-center gap-2"
        accessible={true}
        accessibilityLabel={`President ${game.presName}, ${game.presLeaning} party, ${presApprovalRating}% approval rating`}
      >
        <Award className="text-muted-foreground" size={32} />
        <View>
          <Text>President {game.presName}</Text>
          <View className="flex-row items-center gap-2">
            <PoliticalLeaningBadge politicalLeaning={game.presLeaning} />
            <Text
              className="text-sm text-muted-foreground"
              accessibilityLabel={`${presApprovalRating} percent approval rating`}
            >
              ({presApprovalRating}% approval)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const enhance = withObservables(["game"], ({ game }) => ({
  game,
  presApprovalRating: observePresidentApprovalRating(game.id),
}));

export default enhance(GameMetadata);
