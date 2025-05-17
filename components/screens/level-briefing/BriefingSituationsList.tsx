import React, { useState } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeSituationsByLevelId,
  observeLevel,
  observeCabinetMembersByLevel,
  observeGame,
} from "~/lib/db/helpers/observations";
import { Situation, Level, CabinetMember, Game } from "~/lib/db/models";
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
// Components
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { LevelStatus } from "~/types";
import BriefingSituationItem from "~/components/screens/level-briefing/BriefingSituationItem";
import BriefingSituationItemHeader from "~/components/screens/level-briefing/BriefingSituationItemHeader";
import { EmptyState } from "~/components/shared/EmptyState";
import { ProgressNavigator } from "~/components/shared/ProgressNavigator";

interface BriefingSituationsListProps {
  gameId: string;
  levelId: string;
  situations: Situation[];
  level: Level;
  cabinetMembers: CabinetMember[];
  game: Game | null;
}

const BriefingSituationsList = ({
  gameId,
  levelId,
  situations,
  level,
  cabinetMembers,
  game,
}: BriefingSituationsListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { progressAndNavigate, navigateToCurrentLevelScreen } =
    useLevelNavigation();

  const handleNext = () => {
    if (currentIndex < situations.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleComplete = async () => {
    try {
      if (level.status == LevelStatus.Briefing) {
        await progressAndNavigate();
      } else {
        await navigateToCurrentLevelScreen();
      }
    } catch (error) {
      console.error("Failed to start press conference:", error);
    }
  };

  if (!situations || situations.length === 0) {
    return (
      <View className="py-4 gap-4">
        <EmptyState message="No active situations to brief on" />
        <Button className="mt-4" onPress={() => handleComplete()}>
          <Text>Proceed to Press Conference</Text>
        </Button>
      </View>
    );
  }

  const currentSituation = situations[currentIndex];

  return (
    <ProgressNavigator
      currentIndex={currentIndex}
      totalItems={situations.length}
      onPrevious={handlePrevious}
      onNext={handleNext}
      onComplete={handleComplete}
      progressLabel={`Situation ${currentIndex + 1} of ${situations.length}`}
      cardClassName="border-l-4 border-l-primary"
      headerContent={
        <BriefingSituationItemHeader situation={currentSituation} />
      }
    >
      <BriefingSituationItem
        situation={currentSituation}
        cabinetMembers={cabinetMembers}
        presName={game?.presName ?? "President"}
      />
    </ProgressNavigator>
  );
};

const enhance = withObservables(
  ["gameId", "levelId"],
  ({ gameId, levelId }) => ({
    situations: observeSituationsByLevelId(levelId),
    level: observeLevel(levelId),
    cabinetMembers: observeCabinetMembersByLevel(levelId),
    game: observeGame(gameId),
  })
);

export default enhance(BriefingSituationsList);
