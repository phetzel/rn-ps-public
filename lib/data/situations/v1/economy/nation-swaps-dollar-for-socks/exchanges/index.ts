import type { ExchangeData } from "~/lib/schemas/exchanges";
import { libPrimaryExchange } from "./libPrimaryExchange";
import { independentPrimaryExchange } from "./independentPrimaryExchange";

export const nationSwapsDollarForSocksExchanges: ExchangeData[] = [
  libPrimaryExchange,
  independentPrimaryExchange,
];
