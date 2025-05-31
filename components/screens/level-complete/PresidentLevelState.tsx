import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeGame } from "~/lib/db/helpers";
import { Text } from "~/components/ui/text";
import PoliticalLeaningBadge from "~/components/shared/entity/PoliticalLeaningBadge";
import LevelProgress from "~/components/screens/level-complete/LevelProgress";
import { Game } from "~/lib/db/models";
import { Award } from "~/lib/icons/Award";
import type { OutcomeSnapshotType } from "~/types";

interface PresidentStateCardProps {
  outcomeSnapshot: OutcomeSnapshotType;
  game: Game | null;
}

const PresidentLevelCard = ({
  game,
  outcomeSnapshot,
}: PresidentStateCardProps) => {
  const { initial, final } = outcomeSnapshot;

  if (!game || !initial || !final) return null;

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`President ${game.presName}.`}
    >
      <View
        className="flex-row items-center justify-between gap-2"
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel={`President ${game.presName}, ${game.presLeaning} political leaning`}
      >
        <Text className="text-2xl font-bold">{game.presName}</Text>
        <PoliticalLeaningBadge politicalLeaning={game.presLeaning} />
      </View>

      <View className="gap-2" accessible={false}>
        <LevelProgress
          label="Approval Rating"
          initialValue={initial.president.approvalRating}
          finalValue={final.president.approvalRating}
          size="medium"
        />

        <LevelProgress
          label="Relationship with You"
          initialValue={initial.president.psRelationship}
          finalValue={final.president.psRelationship}
          size="medium"
        />
      </View>
    </View>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  game: observeGame(gameId),
}));

export default enhance(PresidentLevelCard);
