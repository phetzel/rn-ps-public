import type { SituationDataType } from "~/lib/schemas/situations";
import { teachersStrikeBack } from "./teachers-strike-back";
import { internetCurfew } from "./internet-curfew-proposal";

export const domesticPolicySituationsData: SituationDataType[] = [
  teachersStrikeBack,
  internetCurfew,
];
