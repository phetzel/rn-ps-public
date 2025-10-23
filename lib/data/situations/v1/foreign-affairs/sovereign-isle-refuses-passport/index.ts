import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { sovereignIsleRefusesPassportOutcomes } from "./sovereignIsleRefusesPassportOutcomes";
import { sovereignIsleRefusesPassportPreferences } from "./sovereignIsleRefusesPassportPreferences";
import { sovereignIsleRefusesPassportExchanges } from "./exchanges";

export const sovereignIsleRefusesPassport: SituationDataType = {
  trigger: {
    staticKey: "sovereign-isle-refuses-passport",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Sovereign Isle Refuses Passport",
  description: "A self-declared isle refuses to recognize diplomats' passports, sparking rival envoys, inflatable fleets, and emergency treaty talks at the foreign ministry.",
  content: {
    outcomes: sovereignIsleRefusesPassportOutcomes,
    preferences: sovereignIsleRefusesPassportPreferences,
  },
  exchanges: sovereignIsleRefusesPassportExchanges,
};
