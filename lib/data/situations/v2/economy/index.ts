import type { SituationDataType } from "~/lib/schemas/situations";
import { robotTaxDebate } from "./robot-tax-debate";
import { strategicCoffeeReserve } from "./strategic-coffee-reserve";

export const economySituationsData: SituationDataType[] = [
  robotTaxDebate,
  strategicCoffeeReserve,
];
