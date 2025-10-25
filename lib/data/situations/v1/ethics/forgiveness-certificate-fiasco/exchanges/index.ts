import type { ExchangeData } from "~/lib/schemas/exchanges";
import { independentPrimaryExchange } from "./independentPrimaryExchange";
import { investigativeExchange } from "./investigativeExchange";

export const forgivenessCertificateFiascoExchanges: ExchangeData[] = [
  independentPrimaryExchange,
  investigativeExchange,
];
