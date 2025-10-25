import type { ExchangeData } from "~/lib/schemas/exchanges";
import { libPrimaryExchange } from "./libPrimaryExchange";
import { independentPrimaryExchange } from "./independentPrimaryExchange";
import { conPrimaryExchange } from "./conPrimaryExchange";

export const moralityCreditSwapScandalExchanges: ExchangeData[] = [
  libPrimaryExchange,
  independentPrimaryExchange,
  conPrimaryExchange,
];
