import type { ExchangeData } from "~/lib/schemas/exchanges";
import { independentPrimaryExchange } from "./independentPrimaryExchange";
import { conPrimaryExchange } from "./conPrimaryExchange";

export const diplomatsDeclareMusicalSiegeExchanges: ExchangeData[] = [
  independentPrimaryExchange,
  conPrimaryExchange,
];
