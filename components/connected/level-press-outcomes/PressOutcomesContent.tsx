import { withObservables } from '@nozbe/watermelondb/react';

import ExchangesOutcomeList from '~/components/connected/exchanges-outcome-list/ExchangesOutcomeList';
import PressResultsTotal from '~/components/connected/level-overview/PressResultsTotal';
import PressReview from '~/components/connected/level-press-outcomes/PressReview';
import { PressOutcomesContentView } from '~/components/screens/level-press-outcomes/PressOutcomesContentView';
import { observeLevel } from '~/lib/db/helpers/observations';

import type { Level } from '~/lib/db/models';

interface PressOutcomesContentProps {
  levelId: string;
  level: Level;
}

function PressOutcomesContent({ levelId, level }: PressOutcomesContentProps) {
  return (
    <PressOutcomesContentView
      levelId={levelId}
      level={level}
      onMarkPressAdWatched={() => level.markPressAdWatched()}
      renderExchangesOutcomeList={(contentLevelId) => (
        <ExchangesOutcomeList levelId={contentLevelId} />
      )}
      renderPressResultsTotal={(contentLevelId) => <PressResultsTotal levelId={contentLevelId} />}
      renderPressReview={({ isAdWatched, onAdComplete }) => (
        <PressReview isAdWatched={isAdWatched} onAdComplete={onAdComplete} />
      )}
    />
  );
}

export default withObservables(['levelId'], ({ levelId }: { levelId: string }) => ({
  level: observeLevel(levelId),
}))(PressOutcomesContent);
