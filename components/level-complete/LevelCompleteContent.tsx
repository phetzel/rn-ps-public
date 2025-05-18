import { useState } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeLevel,
  observeCabinetMembersByLevel,
} from "~/lib/db/helpers/observations";
import type { Level, CabinetMember } from "~/lib/db/models";
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
import RelationshipsAdmin from "~/components/level-complete/RelationshipsAdmin";
import RelationshipsCabinet from "~/components/level-complete/RelationshipsCabinet";
import { LevelStatus } from "~/types";
import { ProgressNavigator } from "~/components/shared/ProgressNavigator";
import { CardHeader, CardTitle } from "~/components/ui/card";
import { Award } from "~/lib/icons/Award";
import { Briefcase } from "~/lib/icons/Briefcase";
import { Text } from "~/components/ui/text";

interface LevelCompleteContentProps {
  gameId: string;
  levelId: string;
  level: Level;
  cabinetMembers?: CabinetMember[];
}

const LevelCompleteContent = ({
  gameId,
  levelId,
  level,
  cabinetMembers,
}: LevelCompleteContentProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { progressAndNavigate, navigateToCurrentLevelScreen } =
    useLevelNavigation();

  const snapshot = level.parseOutcomeSnapshot;

  if (!snapshot) {
    return null;
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleComplete = async () => {
    try {
      if (level.status == LevelStatus.Completed) {
        await progressAndNavigate();
      } else {
        await navigateToCurrentLevelScreen();
      }
    } catch (error) {
      console.error("Failed to complete situation outcomes:", error);
    }
  };

  const isShowingAdmin = currentIndex === 0;

  return (
    <View className="gap-4">
      <Text className="text-2xl font-bold">Month Complete</Text>

      <ProgressNavigator
        currentIndex={currentIndex}
        totalItems={2}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onComplete={handleComplete}
        progressLabel={isShowingAdmin ? "Administration" : "Cabinet"}
        headerContent={
          <CardHeader className="flex-row items-center gap-2">
            {isShowingAdmin ? (
              <Award className="text-primary" />
            ) : (
              <Briefcase className="text-primary" />
            )}
            <CardTitle>
              {isShowingAdmin ? "Administration" : "Cabinet"}
            </CardTitle>
          </CardHeader>
        }
      >
        {isShowingAdmin ? (
          <RelationshipsAdmin outcomeSnapshot={snapshot} />
        ) : (
          <RelationshipsCabinet
            outcomeSnapshot={snapshot}
            cabinetMembers={cabinetMembers}
          />
        )}
      </ProgressNavigator>
    </View>
  );
};

const enhance = withObservables(["gameId", "levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
  cabinetMembers: observeCabinetMembersByLevel(levelId),
}));

export default enhance(LevelCompleteContent);
