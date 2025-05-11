import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
import { Text } from "~/components/ui/text";

import RelationshipsAdminCard from "~/components/level-complete/RelationshipsAdminCard";
import RelationshipscabinetCard from "~/components/level-complete/RelationshipsCabinetCard";

interface LevelCompleteContentProps {
  gameId: string;
  levelId: string;
  level: Level;
}

const LevelCompleteContent = ({
  gameId,
  levelId,
  level,
}: LevelCompleteContentProps) => {
  const snapshot = level.parseOutcomeSnapshot;

  if (!snapshot) {
    return null;
  }

  return (
    <View className="gap-4">
      <RelationshipsAdminCard outcomeSnapshot={snapshot} />
      <RelationshipscabinetCard outcomeSnapshot={snapshot} levelId={levelId} />
    </View>
  );
};

const enhance = withObservables(["gameId", "levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(LevelCompleteContent);
