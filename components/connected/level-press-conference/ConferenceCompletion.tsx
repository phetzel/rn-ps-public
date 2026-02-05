import { withObservables } from '@nozbe/watermelondb/react';

import { ConferenceCompletionView } from '~/components/screens/level-press-conference/ConferenceCompletionView';
import { observeLevel } from '~/lib/db/helpers/observations';

import type { Level } from '~/lib/db/models';

interface ConferenceCompletionProps {
  levelId: string;
  level: Level | null;
}

function ConferenceCompletion({ levelId, level }: ConferenceCompletionProps) {
  return <ConferenceCompletionView levelId={levelId} level={level} />;
}

export default withObservables(['levelId'], ({ levelId }: { levelId: string }) => ({
  level: observeLevel(levelId),
}))(ConferenceCompletion);
