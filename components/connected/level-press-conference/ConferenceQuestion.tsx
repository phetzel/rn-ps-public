import { withObservables } from '@nozbe/watermelondb/react';

import { ConferenceQuestionView } from '~/components/screens/level-press-conference/ConferenceQuestionView';
import {
  observeCabinetMembersByLevel,
  observeJournalist,
  observePublicationForJournalistId,
} from '~/lib/db/helpers/observations';

import type { CabinetMember, Journalist, PressExchange, Publication } from '~/lib/db/models';

interface ConferenceQuestionProps {
  pressExchange: PressExchange;
  journalist: Journalist | null;
  publication: Publication | null;
  cabinetMembers: CabinetMember[];
  handleClear: () => void;
}

function ConferenceQuestion({
  pressExchange,
  journalist,
  publication,
  cabinetMembers,
  handleClear,
}: ConferenceQuestionProps) {
  return (
    <ConferenceQuestionView
      pressExchange={pressExchange}
      journalist={journalist}
      publication={publication}
      cabinetMembers={cabinetMembers}
      handleClear={handleClear}
    />
  );
}

export default withObservables(
  ['pressExchange'],
  ({ pressExchange }: { pressExchange: PressExchange }) => ({
    journalist: observeJournalist(pressExchange.journalist_id),
    publication: observePublicationForJournalistId(pressExchange.journalist_id),
    cabinetMembers: observeCabinetMembersByLevel(pressExchange.level_id),
  }),
)(ConferenceQuestion);
