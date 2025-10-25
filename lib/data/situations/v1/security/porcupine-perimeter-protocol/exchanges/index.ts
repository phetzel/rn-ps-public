import type { ExchangeData } from "~/lib/schemas/exchanges";
import { investigativeExchange } from "./investigativeExchange";
import { independentPrimaryExchange } from "./independentPrimaryExchange";

export const porcupinePerimeterProtocolExchanges: ExchangeData[] = [
  investigativeExchange,
  independentPrimaryExchange,
];
