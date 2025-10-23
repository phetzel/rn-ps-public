import type { SituationDataType } from "~/lib/schemas/situations";
import { ambassadorsForEveryBlock } from "./ambassadors-for-every-block";
import { compulsoryComplimentQuota } from "./compulsory-compliment-quota";
import { internetCurfew } from "./internet-curfew-proposal";
import { mandatoryKitchenSwapWeek } from "./mandatory-kitchen-swap-week";
import { mandatoryLivingRoomFlagLaw } from "./mandatory-living-room-flag-law";
import { nationalApologyExchangeAct } from "./national-apology-exchange-act";
import { nationalMoodRingMandate } from "./national-mood-ring-mandate";
import { nationalSidewalkCheerMandate } from "./national-sidewalk-cheer-mandate";
import { nationalSiestaRegistry } from "./national-siesta-registry";
import { neighborhoodTreatyMandate } from "./neighborhood-treaty-mandate";
import { teachersStrikeBack } from "./teachers-strike-back";

export const domesticPolicySituationsData: SituationDataType[] = [
  ambassadorsForEveryBlock,
  compulsoryComplimentQuota,
  internetCurfew,
  mandatoryKitchenSwapWeek,
  mandatoryLivingRoomFlagLaw,
  nationalApologyExchangeAct,
  nationalMoodRingMandate,
  nationalSidewalkCheerMandate,
  nationalSiestaRegistry,
  neighborhoodTreatyMandate,
  teachersStrikeBack,
];
