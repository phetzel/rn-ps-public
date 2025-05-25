import { useState } from "react";
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
    <View className="gap-4">
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="flex-row w-full">
          <TabsTrigger value="situations" className="flex-1">
            <Text>Situations</Text>
          </TabsTrigger>
          <TabsTrigger value="media" className="flex-1">
            <Text>Media</Text>
          </TabsTrigger>
          <TabsTrigger value="relationships" className="flex-1">
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
            onAdComplete={() => setIsAdWatched(true)}
            onComplete={handleComplete}
          />
        </TabsContent>
      </Tabs>
    </View>
    // <ProgressNavigator
    //   currentIndex={currentIndex}
    //   totalItems={situations.length + 2}
    //   onPrevious={handlePrevious}
    //   onNext={handleNext}
    //   onComplete={handleComplete}
    //   progressLabel={progressLabel}
    //   cardClassName={cn(
    //     "border-l-4",
    //     isAdWatched ? "border-l-green-500" : "border-l-blue-500"
    //   )}
    //   headerContent={
    //     isOnMediaCoverage ? (
    //       <MediaCoverageHeader />
    //     ) : isOnResults ? (
    //       <ResultsCardHeader
    //         isAdWatched={isAdWatched}
    //         onAdComplete={() => setIsAdWatched(true)}
    //       />
    //     ) : (
    //       <SituationOutcomeItemHeader situation={currentSituation} />
    //     )
    //   }
    //   showPercentage={false}
    // >
    //   {isOnMediaCoverage ? (
    //     <MediaCoverage gameId={gameId} levelId={levelId} />
    //   ) : isOnResults ? (
    //     <SituationResults
    //       gameId={gameId}
    //       level={level}
    //       isAdWatched={isAdWatched}
    //     />
    //   ) : (
    //     <SituationOutcomeItem situation={currentSituation} game={game} />
    //   )}
    // </ProgressNavigator>
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
