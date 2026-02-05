import { useEffect, useState } from 'react';

import { OutcomesContent } from '~/components/shared/OutcomesContent';
import { useLevelNavigation } from '~/lib/hooks/useLevelNavigation';
import { LevelStatus } from '~/types';

import type { Game, Level } from '~/types/view-models';

interface SituationOutcomesContentViewProps {
  gameId: string;
  levelId: string;
  game: Game | null;
  level: Level;
  onMarkSituationAdWatched: () => Promise<void>;
  renderSituationsOutcomeList: (levelId: string) => React.ReactNode;
  renderLevelMediaCoverage: (levelId: string) => React.ReactNode;
  renderSituationReview: (args: {
    isAdWatched: boolean;
    onAdComplete: () => Promise<void>;
  }) => React.ReactNode;
}

export function SituationOutcomesContentView({
  gameId: _gameId,
  levelId,
  game: _game,
  level,
  onMarkSituationAdWatched,
  renderSituationsOutcomeList,
  renderLevelMediaCoverage,
  renderSituationReview,
}: SituationOutcomesContentViewProps) {
  const [isAdWatched, setIsAdWatched] = useState<boolean>(false);
  const { progressAndNavigate, navigateToCurrentLevelScreen } = useLevelNavigation();

  useEffect(() => {
    if (level) {
      setIsAdWatched(level.situationAdWatched);
    }
  }, [level]);

  const handleAdComplete = async () => {
    try {
      await onMarkSituationAdWatched();
      setIsAdWatched(true);
    } catch (error) {
      console.error('Failed to mark situation ad as watched:', error);
    }
  };

  const tabs = [
    {
      value: 'situations',
      label: 'Situations',
      accessibilityLabel: 'Situation outcomes',
      accessibilityHint: 'View how situations were resolved and their impacts',
      content: renderSituationsOutcomeList(levelId),
    },
    {
      value: 'results',
      label: 'Results',
      accessibilityLabel: 'Situation results',
      accessibilityHint: 'See how media reported on the situations and events',
      content: renderLevelMediaCoverage(levelId),
    },
    {
      value: 'review',
      label: 'Review',
      accessibilityLabel: 'Situation review',
      accessibilityHint: 'Review how situation outcomes affected your situation approval changes',
      content: renderSituationReview({
        isAdWatched,
        onAdComplete: handleAdComplete,
      }),
    },
  ];

  const handleComplete = async () => {
    try {
      if (level.status === LevelStatus.SituationOutcomes) {
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
      defaultTab="situations"
      accessibilityLabel="Situation outcomes, media coverage, and relationship changes"
      expectedLevelStatus={LevelStatus.SituationOutcomes}
      adWatched={isAdWatched}
      onAdComplete={handleAdComplete}
      onComplete={handleComplete}
    />
  );
}
