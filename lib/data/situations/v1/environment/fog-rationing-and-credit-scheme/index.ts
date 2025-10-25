import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { fogRationingAndCreditSchemeOutcomes } from "./fogRationingAndCreditSchemeOutcomes";
import { fogRationingAndCreditSchemePreferences } from "./fogRationingAndCreditSchemePreferences";
import { fogRationingAndCreditSchemeExchanges } from "./exchanges";

export const fogRationingAndCreditScheme: SituationDataType = {
  trigger: {
    staticKey: "fog-rationing-and-credit-scheme",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Fog Rationing and Credit Scheme",
  description: "Whitehall unveils a fog credit market that rations fog hours, auctions rooftop vouchers, and pits urban gardeners against coastal harvesters.",
  content: {
    outcomes: fogRationingAndCreditSchemeOutcomes,
    preferences: fogRationingAndCreditSchemePreferences,
  },
  exchanges: fogRationingAndCreditSchemeExchanges,
};
