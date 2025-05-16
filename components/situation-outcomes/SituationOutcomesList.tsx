import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

// DB
import {
  observeSituationsByLevelId,
  observeGame,
} from "~/lib/db/helpers/observations";
import type { Game, Level, Situation } from "~/lib/db/models";
// Icons
import { AlertCircle } from "~/lib/icons/AlertCircle";
// Components
import { Text } from "~/components/ui/text";
import SituationOutcomeItem from "~/components/situation-outcomes/SituationOutcomeItem";

interface SituationOutcomesListProps {
  gameId: string;
  level: Level;
  situations: Situation[];
  game: Game | null;
}

const SituationOutcomesList = ({
  situations,
  game,
  level,
}: SituationOutcomesListProps) => {
  if (!game) {
    return null;
  }

  if (situations.length === 0) {
    return (
      <View className="py-12 items-center justify-center border rounded-lg bg-muted/30">
        <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center mb-4">
          <AlertCircle className="h-6 w-6 text-primary" />
        </View>
        <Text className="text-lg font-medium mb-2">No Situation Outcomes</Text>
        <Text className="text-sm text-muted-foreground mb-4 text-center max-w-xs mx-auto">
          There are no situation outcomes to review at this time.
        </Text>
      </View>
    );
  }

  return (
    <View className="gap-4">
      {situations.map((situation) => (
        <SituationOutcomeItem
          key={situation.id}
          situation={situation}
          game={game}
        />
      ))}
    </View>
  );
};

const enhance = withObservables(["gameId", "level"], ({ gameId, level }) => ({
  situations: observeSituationsByLevelId(level.id),
  game: observeGame(gameId),
  level,
}));

export default enhance(SituationOutcomesList);
