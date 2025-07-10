import type { ExchangeData } from "~/types";
import { libPrimaryExchange } from "./libPrimaryExchange";
import { independentPrimaryExchange } from "./independentPrimaryExchange";

export const recordBreakingHeatwaveExchanges: ExchangeData[] = [
  libPrimaryExchange,
  independentPrimaryExchange,
];
