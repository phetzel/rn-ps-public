import { withObservables } from '@nozbe/watermelondb/react';

import { CurrentLevelCardView } from '~/components/screens/tab-current/CurrentLevelCardView';
import { observeLevel } from '~/lib/db/helpers';

import type { Level } from '~/lib/db/models';

interface CurrentLevelCardProps {
  levelId: string;
  level?: Level;
}

function CurrentLevelCard({ level }: CurrentLevelCardProps) {
  return <CurrentLevelCardView level={level} />;
}

export default withObservables(['levelId'], ({ levelId }: { levelId: string }) => ({
  level: observeLevel(levelId),
}))(CurrentLevelCard);
