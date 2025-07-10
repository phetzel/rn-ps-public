import type { ExchangeData } from "~/types";
import { libPrimaryExchange } from "./libPrimaryExchange";
import { independentPrimaryExchange } from "./independentPrimaryExchange";

export const strategicCoffeeReserveExchanges: ExchangeData[] = [
  libPrimaryExchange,
  independentPrimaryExchange,
];
