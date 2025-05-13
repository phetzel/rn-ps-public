// components/briefing/BriefingSituationList.tsx
import React, { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeSituationsByLevelId,
  observeLevel,
  observeCabinetMembersByLevel,
} from "~/lib/db/helpers/observations";
import { Situation, Level, CabinetMember } from "~/lib/db/models";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { LevelStatus } from "~/types";
import BriefingSituationItem from "~/components/briefing/BriefingSituationItem";

interface BriefingSituationListProps {
  gameId: string;
  levelId: string;
  situations: Situation[];
  level: Level;
  cabinetMembers: CabinetMember[];
}

const BriefingSituationsList = ({
  gameId,
  levelId,
  situations,
  level,
  cabinetMembers,
}: BriefingSituationListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const progressCurrentLevel = useCurrentLevelStore(
    (state) => state.progressCurrentLevel
  );

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
        await progressCurrentLevel();
      }

      router.push(`/games/${level.game_id}/press-conference`);
    } catch (error) {
      console.error("Failed to start press conference:", error);
    }
  };

  if (!situations || situations.length === 0) {
    return (
      <View className="py-4">
        <Text className="text-center text-muted-foreground">
          No active situations to brief on
        </Text>
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
        isFirst={currentIndex === 0}
        handlePrevious={handlePrevious}
        isLast={isLastSituation}
        handleNext={handleNext}
        handleComplete={handleComplete}
      />
    </View>
  );
};

const enhance = withObservables(["gameId", "levelId"], ({ levelId }) => ({
  situations: observeSituationsByLevelId(levelId),
  level: observeLevel(levelId),
  cabinetMembers: observeCabinetMembersByLevel(levelId),
}));

export default enhance(BriefingSituationsList);
