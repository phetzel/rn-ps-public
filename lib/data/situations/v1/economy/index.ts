import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalMonopolonBailout } from "./national-monopolon-bailout";
import { robotTaxDebate } from "./robot-tax-debate";
import { strategicCoffeeReserve } from "./strategic-coffee-reserve";

export const economySituationsData: SituationDataType[] = [
  nationalMonopolonBailout,
  robotTaxDebate,
  strategicCoffeeReserve,
];
