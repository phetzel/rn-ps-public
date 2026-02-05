import { withObservables } from '@nozbe/watermelondb/react';

import { ExchangeOutcomeItemView } from '~/components/connected/exchanges-outcome-list/ExchangeOutcomeItemView';

import type { Journalist, PressExchange, Situation } from '~/lib/db/models';

interface ExchangeOutcomeItemProps {
  exchange: PressExchange;
  situation: Situation;
  journalist: Journalist;
}

function ExchangeOutcomeItem({ exchange, situation, journalist }: ExchangeOutcomeItemProps) {
  return (
    <ExchangeOutcomeItemView exchange={exchange} situation={situation} journalist={journalist} />
  );
}

export default withObservables(['exchange'], ({ exchange }: { exchange: PressExchange }) => ({
  exchange,
  situation: exchange.situation.observe(),
  journalist: exchange.journalist.observe(),
}))(ExchangeOutcomeItem);
