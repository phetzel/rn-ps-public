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
import { EmptyState } from "~/components/shared/EmptyState";

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
  const progressPercentage =
    situations.length > 0 ? ((currentIndex + 1) / situations.length) * 100 : 0;
  const isLastSituation = currentIndex === situations.length - 1;

  return (
    <View className="py-4 gap-4">
      {/* Progress Bar */}
      <View className="gap-2">
        <View className="flex-row justify-between items-center">
          <Text className="text-md font-medium">
            Situation {currentIndex + 1} of {situations.length}
          </Text>
          <Text className="text-md text-muted-foreground">
            {Math.round(progressPercentage)}% Complete
          </Text>
        </View>
        <Progress value={progressPercentage} className="h-2" />
      </View>

      <BriefingSituationItem
        situation={currentSituation}
        cabinetMembers={cabinetMembers}
        presName={game?.presName ?? "President"}
        isFirst={currentIndex === 0}
        handlePrevious={handlePrevious}
        isLast={isLastSituation}
        handleNext={handleNext}
        handleComplete={handleComplete}
      />
    </View>
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
