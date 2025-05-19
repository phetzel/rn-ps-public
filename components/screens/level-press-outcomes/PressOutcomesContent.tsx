import { useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeLevel,
  observePressExchangesForLevel,
} from "~/lib/db/helpers/observations";
import type { Level, PressExchange } from "~/lib/db/models";

import { ProgressNavigator } from "~/components/shared/ProgressNavigator";
import ResultsCardHeader from "~/components/shared/results/ResultsCardHeader";
import ExchangeItemHeader from "~/components/screens/level-press-outcomes/ExchangeItemHeader";
import ExchangeItem from "~/components/screens/level-press-outcomes/ExchangeItem";
import PressResults from "~/components/screens/level-press-outcomes/PressResults";
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
import { LevelStatus } from "~/types";
import { cn } from "~/lib/utils";

interface PressOutcomesContentProps {
  gameId: string;
  levelId: string;
  level: Level;
  pressExchanges: PressExchange[];
}

const PressOutcomesContent = ({
  gameId,
  levelId,
  level,
  pressExchanges,
}: PressOutcomesContentProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAdWatched, setIsAdWatched] = useState<boolean>(false);

  const { progressAndNavigate, navigateToCurrentLevelScreen } =
    useLevelNavigation();

  const handleNext = () => {
    if (currentIndex < pressExchanges.length) {
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
      if (level.status == LevelStatus.PressResults) {
        await progressAndNavigate();
      } else {
        await navigateToCurrentLevelScreen();
      }
    } catch (error) {
      console.error("Failed to start press conference:", error);
    }
  };

  const isOnResults = currentIndex === pressExchanges.length;
  const progressLabel = isOnResults
    ? "Results"
    : `Press Exchange ${currentIndex + 1} of ${pressExchanges.length}`;

  const currentExchange = pressExchanges[currentIndex];

  return (
    <ProgressNavigator
      currentIndex={currentIndex}
      totalItems={pressExchanges.length + 1}
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
          <ExchangeItemHeader exchange={currentExchange} />
        )
      }
      showPercentage={false}
    >
      {isOnResults ? (
        <PressResults gameId={gameId} level={level} isAdWatched={isAdWatched} />
      ) : (
        <ExchangeItem exchange={currentExchange} />
      )}
    </ProgressNavigator>
  );
};

const enhance = withObservables(["gameId", "levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
  pressExchanges: observePressExchangesForLevel(levelId),
}));

export default enhance(PressOutcomesContent);
