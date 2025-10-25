import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { dollarNowBarterOptionalOutcomes } from "./dollarNowBarterOptionalOutcomes";
import { dollarNowBarterOptionalPreferences } from "./dollarNowBarterOptionalPreferences";
import { dollarNowBarterOptionalExchanges } from "./exchanges";

export const dollarNowBarterOptional: SituationDataType = {
  trigger: {
    staticKey: "dollar-now-barter-optional",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Dollar Now Barter-Optional",
  description: "Treasury unveils 'Dollar Now Barter-Optional', letting taxes and fees be paid in goods, favors or artisanal memes, forcing markets to invent new price tags.",
  content: {
    outcomes: dollarNowBarterOptionalOutcomes,
    preferences: dollarNowBarterOptionalPreferences,
  },
  exchanges: dollarNowBarterOptionalExchanges,
};
