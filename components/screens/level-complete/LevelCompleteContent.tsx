import { useState, ReactNode } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
// Components
import { CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { ProgressNavigator } from "~/components/shared/ProgressNavigator";
import CabinetLevelState from "~/components/screens/level-complete/CabinetLevelState";
import PresidentLevelState from "~/components/screens/level-complete/PresidentLevelState";
import MediaLevelState from "~/components/screens/level-complete/MediaLevelState";
import SubgroupLevelState from "~/components/screens/level-complete/SubgroupLevelState";
import LevelConsequences from "~/components/screens/level-complete/LevelConsequences";
// Icons
import { Award, Briefcase, Newspaper, Shield, Users } from "~/lib/icons";
// Types
import { LevelStatus } from "~/types";

interface TabConfig {
  id: string;
  label: string;
  icon: ReactNode;
  component: React.ComponentType<any>;
  props?: Record<string, any>;
}

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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const {
    progressAndNavigate,
    navigateToCurrentLevelScreen,
    navigateToCurrentTab,
  } = useLevelNavigation();

  const snapshot = level.parseOutcomeSnapshot;

  if (!snapshot) {
    return null;
  }

  // Define all tabs with their configs
  const tabs: TabConfig[] = [
    {
      id: "administration",
      label: "President Monthly Update",
      icon: <Award className="text-primary" />,
      component: PresidentLevelState,
      props: { gameId, outcomeSnapshot: snapshot },
    },
    {
      id: "cabinet",
      label: "Cabinet Monthly Update",
      icon: <Briefcase className="text-primary" />,
      component: CabinetLevelState,
      props: { levelId, outcomeSnapshot: snapshot },
    },
    {
      id: "media",
      label: "Media Monthly Update",
      icon: <Newspaper className="text-primary" />,
      component: MediaLevelState,
      props: { outcomeSnapshot: snapshot },
    },
    {
      id: "subgroups",
      label: "Subgroup Monthly Update",
      icon: <Users className="text-primary" />,
      component: SubgroupLevelState,
      props: { gameId, levelId, outcomeSnapshot: snapshot },
    },
    {
      id: "consequences",
      label: "Level Consequences",
      icon: <Shield className="text-primary" />,
      component: LevelConsequences,
      props: { levelId, outcomeSnapshot: snapshot },
    },
  ];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < tabs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleComplete = async () => {
    try {
      const isLevelGameOver = snapshot.consequences?.gameEnded || false;
      if (isLevelGameOver) {
        return await navigateToCurrentTab();
      } else {
        if (level.status == LevelStatus.Completed) {
          await progressAndNavigate();
          await navigateToCurrentTab();
        } else {
          await navigateToCurrentLevelScreen();
        }
      }
    } catch (error) {
      console.error("Failed to complete situation outcomes:", error);
    }
  };

  const currentTab = tabs[currentIndex];
  const TabComponent = currentTab.component;

  return (
    <View className="gap-4">
      <ProgressNavigator
        currentIndex={currentIndex}
        totalItems={tabs.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onComplete={handleComplete}
        progressLabel={`${currentTab.label} (${currentIndex + 1} of ${
          tabs.length
        })`}
        headerContent={
          <CardHeader className="flex-row items-center gap-2">
            {currentTab.icon}
            <CardTitle>{currentTab.label}</CardTitle>
          </CardHeader>
        }
      >
        <TabComponent {...currentTab.props} />
      </ProgressNavigator>
    </View>
  );
};

const enhance = withObservables(["gameId", "levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(LevelCompleteContent);
