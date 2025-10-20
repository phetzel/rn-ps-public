import type { SituationDataType } from "~/lib/schemas/situations";
import { internetCurfew } from "./internet-curfew-proposal";
import { nationalSiestaRegistry } from "./national-siesta-registry";
import { teachersStrikeBack } from "./teachers-strike-back";

export const domesticPolicySituationsData: SituationDataType[] = [
  internetCurfew,
  nationalSiestaRegistry,
  teachersStrikeBack,
];
