import { withObservables } from '@nozbe/watermelondb/react';

import { ConferenceQuestionView } from '~/components/screens/level-press-conference/ConferenceQuestionView';
import {
  observeCabinetMembersByLevel,
  observeJournalist,
  observePublicationForJournalistId,
} from '~/lib/db/helpers/observations';

import type { PressExchange as PressExchangeModel } from '~/lib/db/models';
import type { CabinetMember, Journalist, PressExchange, Publication } from '~/types/view-models';

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
  const pressExchangeModel = pressExchange as PressExchangeModel;
  return (
    <ConferenceQuestionView
      pressExchange={pressExchange}
      journalist={journalist}
      publication={publication}
      cabinetMembers={cabinetMembers}
      handleClear={handleClear}
      onAnswerQuestion={(answerId) => pressExchangeModel.answerQuestion(answerId)}
      onSkipQuestion={() => pressExchangeModel.skipQuestion()}
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
