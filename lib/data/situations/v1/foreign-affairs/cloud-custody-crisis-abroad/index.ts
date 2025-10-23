import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { cloudCustodyCrisisAbroadOutcomes } from "./cloudCustodyCrisisAbroadOutcomes";
import { cloudCustodyCrisisAbroadPreferences } from "./cloudCustodyCrisisAbroadPreferences";
import { cloudCustodyCrisisAbroadExchanges } from "./exchanges";

export const cloudCustodyCrisisAbroad: SituationDataType = {
  trigger: {
    staticKey: "cloud-custody-crisis-abroad",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Cloud Custody Crisis Abroad",
  description: "Two microstates claim ownership of a migratory 'diplomatic cloud' drifting over their capitals and Embassy Row, halting talks over passports and rain tariffs.",
  content: {
    outcomes: cloudCustodyCrisisAbroadOutcomes,
    preferences: cloudCustodyCrisisAbroadPreferences,
  },
  exchanges: cloudCustodyCrisisAbroadExchanges,
};
