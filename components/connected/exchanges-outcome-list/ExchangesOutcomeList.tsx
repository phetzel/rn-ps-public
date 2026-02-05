import { withObservables } from '@nozbe/watermelondb/react';

import ExchangeOutcomeItem from '~/components/connected/exchanges-outcome-list/ExchangeOutcomeItem';
import { ExchangesOutcomeListView } from '~/components/shared/exchanges-outcome-list/ExchangesOutcomeListView';
import { observePressExchangesForLevel } from '~/lib/db/helpers/observations';

import type { PressExchange } from '~/lib/db/models';

interface ExchangesOutcomeListProps {
  levelId: string;
  pressExchanges: PressExchange[];
}

function ExchangesOutcomeList({ levelId, pressExchanges }: ExchangesOutcomeListProps) {
  return (
    <ExchangesOutcomeListView
      levelId={levelId}
      pressExchanges={pressExchanges}
      renderExchangeOutcomeItem={(exchange) => <ExchangeOutcomeItem exchange={exchange} />}
    />
  );
}

export default withObservables(['levelId'], ({ levelId }: { levelId: string }) => ({
  pressExchanges: observePressExchangesForLevel(levelId),
}))(ExchangesOutcomeList);
