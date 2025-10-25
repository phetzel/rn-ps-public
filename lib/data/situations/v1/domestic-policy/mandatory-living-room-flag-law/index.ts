import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { mandatoryLivingRoomFlagLawOutcomes } from "./mandatoryLivingRoomFlagLawOutcomes";
import { mandatoryLivingRoomFlagLawPreferences } from "./mandatoryLivingRoomFlagLawPreferences";
import { mandatoryLivingRoomFlagLawExchanges } from "./exchanges";

export const mandatoryLivingRoomFlagLaw: SituationDataType = {
  trigger: {
    staticKey: "mandatory-living-room-flag-law",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Mandatory Living Room Flag Law",
  description: "Federal directive orders every household to display a gov-issued 'living room' flag with rotating slogans; fines, parades, and craft boondoggles ensue.",
  content: {
    outcomes: mandatoryLivingRoomFlagLawOutcomes,
    preferences: mandatoryLivingRoomFlagLawPreferences,
  },
  exchanges: mandatoryLivingRoomFlagLawExchanges,
};
