import type { ExchangeData } from "~/lib/schemas/exchanges";
import { libPrimaryExchange } from "./libPrimaryExchange";
import { conPrimaryExchange } from "./conPrimaryExchange";
import { independentPrimaryExchange } from "./independentPrimaryExchange";

export const houseplantJuryMandateExchanges: ExchangeData[] = [
  libPrimaryExchange,
  conPrimaryExchange,
  independentPrimaryExchange,
];
