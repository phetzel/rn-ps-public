import { useEffect, useState } from "react";
import { withObservables } from "@nozbe/watermelondb/react";

// Db
import { observeLevel } from "~/lib/db/helpers/observations";
import type { Level } from "~/lib/db/models";
// Components
import { OutcomesContent } from "~/components/shared/OutcomesContent";
import ExchangesOutcomeList from "~/components/shared/exchanges-outcome-list/ExchangesOutcomeList";
import PressResultsTotal from "~/components/shared/level-overview/PressResultsTotal";
import PressReview from "~/components/screens/level-press-outcomes/PressReview";
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
  const [isAdWatched, setIsAdWatched] = useState<boolean>(false);

  useEffect(() => {
    if (level) {
      setIsAdWatched(level.pressAdWatched);
    }
  }, [level?.pressAdWatched]);

  const handleAdComplete = async () => {
    try {
      await level.markPressAdWatched();
      setIsAdWatched(true);
    } catch (error) {
      console.error("Failed to mark press ad as watched:", error);
    }
  };

  const tabs = [
    {
      value: "exchanges",
      label: "Exchanges",
      accessibilityLabel: "Press exchanges",
      accessibilityHint:
        "View questions asked and answers given during the press conference",
      content: <ExchangesOutcomeList levelId={levelId} />,
    },
    {
      value: "results",
      label: "Results",
      accessibilityLabel: "Press conference results",
      accessibilityHint: "See how media reported on the press conference",
      content: <PressResultsTotal levelId={levelId} />,
    },
    {
      value: "review",
      label: "Review",
      accessibilityLabel: "Press conference review",
      accessibilityHint:
        "See how your press conference performance affected relationships",
      content: (
        <PressReview
          isAdWatched={isAdWatched}
          onAdComplete={handleAdComplete}
        />
      ),
    },
  ];

  return (
    <OutcomesContent
      level={level}
      tabs={tabs}
      defaultTab="exchanges"
      accessibilityLabel="Press conference results and relationship changes"
      expectedLevelStatus={LevelStatus.PressResults}
      adWatched={isAdWatched}
      onAdComplete={handleAdComplete}
    />
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(PressOutcomesContent);
