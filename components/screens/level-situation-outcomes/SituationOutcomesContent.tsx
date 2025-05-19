import { useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeGame,
  observeLevel,
  observeSituationsByLevelId,
} from "~/lib/db/helpers/observations";
import type { Game, Level, Situation } from "~/lib/db/models";
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
import ResultsCardHeader from "~/components/shared/results/ResultsCardHeader";
import SituationOutcomeItemHeader from "~/components/screens/level-situation-outcomes/SituationOutcomeItemHeader";
import SituationOutcomeItem from "~/components/screens/level-situation-outcomes/SituationOutcomeItem";
import SituationResults from "~/components/screens/level-situation-outcomes/SituationResults";
import { ProgressNavigator } from "~/components/shared/ProgressNavigator";
import { cn } from "~/lib/utils";
import { LevelStatus } from "~/types";

interface SituationOutcomesContentProps {
  gameId: string;
  levelId: string;
  game: Game | null;
  level: Level;
  situations: Situation[];
}

const SituationOutcomesContent = ({
  gameId,
  levelId,
  game,
  level,
  situations,
}: SituationOutcomesContentProps) => {
  const [isAdWatched, setIsAdWatched] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { progressAndNavigate, navigateToCurrentLevelScreen } =
    useLevelNavigation();

  const handleNext = () => {
    if (currentIndex < situations.length) {
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
      if (level.status == LevelStatus.SituationOutcomes) {
        await progressAndNavigate();
      } else {
        await navigateToCurrentLevelScreen();
      }
    } catch (error) {
      console.error("Failed to complete situation outcomes:", error);
    }
  };

  const isOnResults = currentIndex === situations.length;
  const progressLabel = isOnResults
    ? "Results"
    : `Situation ${currentIndex + 1} of ${situations.length}`;

  const currentSituation = situations[currentIndex];

  return (
    <ProgressNavigator
      currentIndex={currentIndex}
      totalItems={situations.length + 1}
      onPrevious={handlePrevious}
      onNext={handleNext}
      onComplete={handleComplete}
      progressLabel={progressLabel}
      cardClassName={cn(
        "border-l-4",
        isAdWatched ? "border-l-green-500" : "border-l-blue-500"
      )}
      headerContent={
        isOnResults ? (
          <ResultsCardHeader
            isAdWatched={isAdWatched}
            onAdComplete={() => setIsAdWatched(true)}
          />
        ) : (
          <SituationOutcomeItemHeader situation={currentSituation} />
        )
      }
      showPercentage={false}
    >
      {isOnResults ? (
        <SituationResults
          gameId={gameId}
          level={level}
          isAdWatched={isAdWatched}
        />
      ) : (
        <SituationOutcomeItem situation={currentSituation} game={game} />
      )}
    </ProgressNavigator>
  );
};

const enhance = withObservables(
  ["gameId", "levelId"],
  ({ gameId, levelId }) => ({
    game: observeGame(gameId),
    level: observeLevel(levelId),
    situations: observeSituationsByLevelId(levelId),
  })
);

export default enhance(SituationOutcomesContent);
