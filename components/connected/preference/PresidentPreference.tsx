import { withObservables } from '@nozbe/watermelondb/react';

import { PresidentPreferenceView } from '~/components/shared/preference/PresidentPreferenceView';
import { observeGame } from '~/lib/db/helpers/observations';

import type { Game } from '~/lib/db/models';
import type { Preference } from '~/types';

interface PresidentPreferenceProps {
  gameId: string;
  preference?: Preference;
  game?: Game | null;
}

function PresidentPreference({ gameId, preference, game }: PresidentPreferenceProps) {
  return <PresidentPreferenceView gameId={gameId} preference={preference} game={game} />;
}

export default withObservables(['gameId'], ({ gameId }: { gameId: string }) => ({
  game: observeGame(gameId),
}))(PresidentPreference);
