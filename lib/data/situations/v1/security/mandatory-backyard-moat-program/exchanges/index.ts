import type { ExchangeData } from "~/lib/schemas/exchanges";
import { libPrimaryExchange } from "./libPrimaryExchange";
import { conPrimaryExchange } from "./conPrimaryExchange";

export const mandatoryBackyardMoatProgramExchanges: ExchangeData[] = [
  libPrimaryExchange,
  conPrimaryExchange,
];
