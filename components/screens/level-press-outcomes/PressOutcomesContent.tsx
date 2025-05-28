import { useEffect, useState } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

// Db
import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
// Hooks
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import ExchangesOutcomeList from "~/components/shared/exchanges-outcome-list/ExchangesOutcomeList";
import PressResults from "~/components/screens/level-press-outcomes/PressResults";
// Types
import { LevelStatus } from "~/types";

interface PressOutcomesContentProps {
  levelId: string;
  level: Level;
}

const PressOutcomesContent = ({
  levelId,
  level,
}: PressOutcomesContentProps) => {
  const [currentTab, setCurrentTab] = useState<string>("exchanges");
  const [isAdWatched, setIsAdWatched] = useState<boolean>(false);

  const { progressAndNavigate, navigateToCurrentLevelScreen } =
    useLevelNavigation();

  useEffect(() => {
    if (level) {
      setIsAdWatched(level.pressAdWatched);
    }
  }, [level?.pressAdWatched]);

  const handleAdComplete = async () => {
    try {
      // Mark ad as watched in the level
      await level.markPressAdWatched();
      setIsAdWatched(true);
    } catch (error) {
      console.error("Failed to mark press ad as watched:", error);
    }
  };

  const handleComplete = async () => {
    try {
      if (level.status == LevelStatus.PressResults) {
        await progressAndNavigate();
      } else {
        await navigateToCurrentLevelScreen();
      }
    } catch (error) {
      console.error("Failed to start press conference:", error);
    }
  };

  return (
    <View className="gap-4">
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="flex-row w-full">
          <TabsTrigger value="exchanges" className="flex-1">
            <Text>Exchanges</Text>
          </TabsTrigger>
          <TabsTrigger value="relationships" className="flex-1">
            <Text>Relationships</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="exchanges" className="mt-4">
          <ExchangesOutcomeList levelId={levelId} />
        </TabsContent>

        <TabsContent value="relationships" className="mt-4">
          <PressResults
            isAdWatched={isAdWatched}
            onAdComplete={handleAdComplete}
            onComplete={handleComplete}
          />
        </TabsContent>
      </Tabs>
    </View>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(PressOutcomesContent);
