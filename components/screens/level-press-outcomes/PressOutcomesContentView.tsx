import { useEffect, useState } from 'react';

import { OutcomesContent } from '~/components/shared/OutcomesContent';
import { useLevelNavigation } from '~/lib/hooks/useLevelNavigation';
import { LevelStatus } from '~/types';

import type { Level } from '~/types/view-models';

interface PressOutcomesContentViewProps {
  levelId: string;
  level: Level;
  renderExchangesOutcomeList: (levelId: string) => React.ReactNode;
  renderPressResultsTotal: (levelId: string) => React.ReactNode;
  renderPressReview: (args: {
    isAdWatched: boolean;
    onAdComplete: () => Promise<void>;
  }) => React.ReactNode;
}

export function PressOutcomesContentView({
  levelId,
  level,
  renderExchangesOutcomeList,
  renderPressResultsTotal,
  renderPressReview,
}: PressOutcomesContentViewProps) {
  const [isAdWatched, setIsAdWatched] = useState<boolean>(false);
  const { progressAndNavigate, navigateToCurrentLevelScreen } = useLevelNavigation();

  useEffect(() => {
    if (level) {
      setIsAdWatched(level.pressAdWatched);
    }
  }, [level]);

  const handleAdComplete = async () => {
    try {
      await level.markPressAdWatched();
      setIsAdWatched(true);
    } catch (error) {
      console.error('Failed to mark press ad as watched:', error);
    }
  };

  const tabs = [
    {
      value: 'exchanges',
      label: 'Exchanges',
      accessibilityLabel: 'Press exchanges',
      accessibilityHint: 'View questions asked and answers given during the press conference',
      content: renderExchangesOutcomeList(levelId),
    },
    {
      value: 'results',
      label: 'Results',
      accessibilityLabel: 'Press conference results',
      accessibilityHint: 'See how media reported on the press conference',
      content: renderPressResultsTotal(levelId),
    },
    {
      value: 'review',
      label: 'Review',
      accessibilityLabel: 'Press conference review',
      accessibilityHint: 'See how your press conference performance affected relationships',
      content: renderPressReview({
        isAdWatched,
        onAdComplete: handleAdComplete,
      }),
    },
  ];

  const handleComplete = async () => {
    try {
      if (level.status === LevelStatus.PressResults) {
        await progressAndNavigate();
      } else {
        await navigateToCurrentLevelScreen();
      }
    } catch (error) {
      console.error('Failed to complete outcomes:', error);
    }
  };

  return (
    <OutcomesContent
      tabs={tabs}
      defaultTab="exchanges"
      accessibilityLabel="Press conference results and relationship changes"
      expectedLevelStatus={LevelStatus.PressResults}
      adWatched={isAdWatched}
      onAdComplete={handleAdComplete}
      onComplete={handleComplete}
    />
  );
}
