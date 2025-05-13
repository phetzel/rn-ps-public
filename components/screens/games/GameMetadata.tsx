import * as React from "react";
import { View } from "react-native";
import { User } from "~/lib/icons/User";
import { Award } from "~/lib/icons/Award";
import { Text } from "~/components/ui/text";
import PoliticalLeaningBadge from "~/components/shared/PoliticalLeaningBadge";
import type Game from "~/lib/db/models/Game";

interface GameMetadataProps {
  game: Game;
}

export function GameMetadata({ game }: GameMetadataProps) {
  return (
    <View className="gap-2">
      <View className="flex-row items-center gap-2">
        <User className="text-muted-foreground" size={32} />
        <Text className="text-xl font-medium">{game.presName}</Text>
      </View>

      <View className="flex-row items-center gap-2">
        <Award className="text-muted-foreground" size={32} />
        <View>
          <Text>President {game.presName}</Text>
          <View className="flex-row items-center gap-2">
            <PoliticalLeaningBadge politicalLeaning={game.presParty} />
            <Text className="text-sm text-muted-foreground">
              ({game.presApprovalRating}% approval)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
