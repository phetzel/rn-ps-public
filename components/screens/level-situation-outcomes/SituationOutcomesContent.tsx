import { withObservables } from '@nozbe/watermelondb/react';
import { useEffect, useState } from 'react';

// Components
import SituationReview from '~/components/screens/level-situation-outcomes/SituationReview';
import LevelMediaCoverage from '~/components/shared/level-media-coverage/LevelMediaCoverage';
import { OutcomesContent } from '~/components/shared/OutcomesContent';
import SituationsOutcomeList from '~/components/shared/situations-outcome-list/SituationsOutcomeList';
import { observeGame, observeLevel } from '~/lib/db/helpers/observations';
// Types
import { LevelStatus } from '~/types';

import type { Game, Level } from '~/lib/db/models';

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
  const [isAdWatched, setIsAdWatched] = useState<boolean>(false);

  // Set initial ad watched state from level
  useEffect(() => {
    if (level) {
      setIsAdWatched(level.situationAdWatched);
    }
  }, [level]);

  const handleAdComplete = async () => {
    try {
      await level.markSituationAdWatched();
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
      content: <SituationsOutcomeList levelId={levelId} />,
    },
    {
      value: 'results',
      label: 'Results',
      accessibilityLabel: 'Situation results',
      accessibilityHint: 'See how media reported on the situations and events',
      content: <LevelMediaCoverage levelId={levelId} />,
    },
    {
      value: 'review',
      label: 'Review',
      accessibilityLabel: 'Situation review',
      accessibilityHint: 'Review how situation outcomes affected your situation approval changes',
      content: <SituationReview isAdWatched={isAdWatched} onAdComplete={handleAdComplete} />,
    },
  ];

  return (
    <OutcomesContent
      level={level}
      tabs={tabs}
      defaultTab="situations"
      accessibilityLabel="Situation outcomes, media coverage, and relationship changes"
      expectedLevelStatus={LevelStatus.SituationOutcomes}
      adWatched={isAdWatched}
      onAdComplete={handleAdComplete}
    />
  );
};

const enhance = withObservables(['gameId', 'levelId'], ({ gameId, levelId }) => ({
  game: observeGame(gameId),
  level: observeLevel(levelId),
}));

export default enhance(SituationOutcomesContent);
