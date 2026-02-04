import { withObservables } from '@nozbe/watermelondb/react';

import { SituationOutcomeExchangesView } from '~/components/connected/situations-outcome-list/SituationOutcomeExchangesView';
import { observePressExchangesForSituation } from '~/lib/db/helpers/observations';

import type { PressExchange } from '~/lib/db/models';
import type { SituationOutcome } from '~/types';

interface SituationOutcomeExchangesProps {
  situationId: string;
  pressExchanges: PressExchange[];
  selectedOutcome: SituationOutcome;
  allOutcomes: SituationOutcome[];
}

function SituationOutcomeExchanges({
  pressExchanges,
  selectedOutcome,
  allOutcomes,
}: SituationOutcomeExchangesProps) {
  return (
    <SituationOutcomeExchangesView
      pressExchanges={pressExchanges}
      selectedOutcome={selectedOutcome}
      allOutcomes={allOutcomes}
    />
  );
}

export default withObservables(['situationId'], ({ situationId }: { situationId: string }) => ({
  pressExchanges: observePressExchangesForSituation(situationId),
}))(SituationOutcomeExchanges);
