import { withObservables } from '@nozbe/watermelondb/react';

import JournalistDisplay from '~/components/connected/entity/JournalistDisplay';
import ConferenceCompletion from '~/components/connected/level-press-conference/ConferenceCompletion';
import ConferenceQuestion from '~/components/connected/level-press-conference/ConferenceQuestion';
import { ConferenceContentView } from '~/components/screens/level-press-conference/ConferenceContentView';
import ConferenceJournalistSelect from '~/components/screens/level-press-conference/ConferenceJournalistSelect';
import { observePressExchangesForLevel } from '~/lib/db/helpers/observations';

import type { PressExchange } from '~/types/view-models';

interface ConferenceContentProps {
  levelId: string;
  pressExchanges: PressExchange[];
}

function ConferenceContent({ levelId, pressExchanges }: ConferenceContentProps) {
  return (
    <ConferenceContentView
      levelId={levelId}
      pressExchanges={pressExchanges}
      renderConferenceCompletion={(contentLevelId) => (
        <ConferenceCompletion levelId={contentLevelId} />
      )}
      renderConferenceQuestion={({ pressExchange, handleClear }) => (
        <ConferenceQuestion pressExchange={pressExchange} handleClear={handleClear} />
      )}
      renderJournalistSelect={({ pressExchanges: exchanges, onSelectExchange }) => (
        <ConferenceJournalistSelect
          pressExchanges={exchanges}
          onSelectExchange={onSelectExchange}
          renderJournalist={(journalistId) => <JournalistDisplay journalistId={journalistId} />}
        />
      )}
    />
  );
}

export default withObservables(['levelId'], ({ levelId }: { levelId: string }) => ({
  pressExchanges: observePressExchangesForLevel(levelId),
}))(ConferenceContent);
