import { useEffect, useState } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeGame, observeLevel } from "~/lib/db/helpers/observations";
import type { Game, Level } from "~/lib/db/models";
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import SituationResults from "~/components/screens/level-situation-outcomes/SituationResults";
import LevelMediaCoverage from "~/components/shared/level-media-coverage/LevelMediaCoverage";
import SituationsOutcomeList from "~/components/shared/situations-outcome-list/SituationsOutcomeList";
// Utils + Types
import { cn } from "~/lib/utils";
import { LevelStatus } from "~/types";

interface SituationOutcomesContentProps {
  gameId: string;
  levelId: string;
  game: Game | null;
  level: Level;
}

const SituationOutcomesContent = ({
  gameId,
  levelId,
  game,
  level,
}: SituationOutcomesContentProps) => {
  const [currentTab, setCurrentTab] = useState<string>("situations");
  const [isAdWatched, setIsAdWatched] = useState<boolean>(false);

  const { progressAndNavigate, navigateToCurrentLevelScreen } =
    useLevelNavigation();

  // Set initial ad watched state from level
  useEffect(() => {
    if (level) {
      setIsAdWatched(level.situationAdWatched);
    }
  }, [level?.situationAdWatched]);

  const handleAdComplete = async () => {
    try {
      // Mark ad as watched in the level
      await level.markSituationAdWatched();
      setIsAdWatched(true);
    } catch (error) {
      console.error("Failed to mark situation ad as watched:", error);
    }
  };

  const handleComplete = async () => {
    try {
      if (level.status == LevelStatus.SituationOutcomes) {
        await progressAndNavigate();
      } else {
        await navigateToCurrentLevelScreen();
      }
    } catch (error) {
      console.error("Failed to complete situation outcomes:", error);
    }
  };

  return (
    <View
      className="gap-4"
      accessibilityLabel="Situation outcomes, media coverage, and relationship changes"
    >
      <Tabs
        value={currentTab}
        onValueChange={setCurrentTab}
        accessibilityLabel="Situation results sections"
      >
        <TabsList className="flex-row w-full">
          <TabsTrigger
            value="situations"
            className="flex-1"
            accessibilityLabel="Situation outcomes"
            accessibilityHint="View how situations were resolved and their impacts"
          >
            <Text>Situations</Text>
          </TabsTrigger>
          <TabsTrigger
            value="media"
            className="flex-1"
            accessibilityLabel="Media coverage"
            accessibilityHint="See how media reported on the situations and events"
          >
            <Text>Media</Text>
          </TabsTrigger>
          <TabsTrigger
            value="relationships"
            className="flex-1"
            accessibilityLabel="Relationship impacts"
            accessibilityHint="Review how situation outcomes affected your relationships"
          >
            <Text>Relationships</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="situations" className="mt-4">
          <SituationsOutcomeList levelId={levelId} />
        </TabsContent>

        <TabsContent value="media" className="mt-4">
          <LevelMediaCoverage levelId={levelId} />
        </TabsContent>

        <TabsContent value="relationships" className="mt-4">
          <SituationResults
            isAdWatched={isAdWatched}
            onAdComplete={handleAdComplete}
            onComplete={handleComplete}
          />
        </TabsContent>
      </Tabs>
    </View>
  );
};

const enhance = withObservables(
  ["gameId", "levelId"],
  ({ gameId, levelId }) => ({
    game: observeGame(gameId),
    level: observeLevel(levelId),
  })
);

export default enhance(SituationOutcomesContent);
