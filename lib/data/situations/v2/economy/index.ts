import type { SituationDataType } from "~/lib/schemas/situations";
import { strategicCoffeeReserve } from "./strategic-coffee-reserve";
import { robotTaxDebate } from "./robot-tax-debate";

export const economySituationsData: SituationDataType[] = [
  strategicCoffeeReserve,
  robotTaxDebate,
];
