import type { SituationDataType } from "~/lib/schemas/situations";
import { ambassadorsForEveryBlock } from "./ambassadors-for-every-block";
import { compulsoryComplimentQuota } from "./compulsory-compliment-quota";
import { internetCurfew } from "./internet-curfew-proposal";
import { mandatoryLivingRoomFlagLaw } from "./mandatory-living-room-flag-law";
import { nationalApologyExchangeAct } from "./national-apology-exchange-act";
import { nationalSidewalkCheerMandate } from "./national-sidewalk-cheer-mandate";
import { nationalSiestaRegistry } from "./national-siesta-registry";
import { teachersStrikeBack } from "./teachers-strike-back";

export const domesticPolicySituationsData: SituationDataType[] = [
  ambassadorsForEveryBlock,
  compulsoryComplimentQuota,
  internetCurfew,
  mandatoryLivingRoomFlagLaw,
  nationalApologyExchangeAct,
  nationalSidewalkCheerMandate,
  nationalSiestaRegistry,
  teachersStrikeBack,
];
