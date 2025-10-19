import type { ExchangeData } from "~/lib/schemas/exchanges";
import { libPrimaryExchange } from "./libPrimaryExchange";
import { independentPrimaryExchange } from "./independentPrimaryExchange";

export const recordBreakingHeatwaveExchanges: ExchangeData[] = [
  libPrimaryExchange,
  independentPrimaryExchange,
];
