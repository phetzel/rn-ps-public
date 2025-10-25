import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { neighborhoodShadowExchangeOutcomes } from "./neighborhoodShadowExchangeOutcomes";
import { neighborhoodShadowExchangePreferences } from "./neighborhoodShadowExchangePreferences";
import { neighborhoodShadowExchangeExchanges } from "./exchanges";

export const neighborhoodShadowExchange: SituationDataType = {
  trigger: {
    staticKey: "neighborhood-shadow-exchange",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Neighborhood Shadow Exchange",
  description: "Admin launches a 'Neighborhood Shadow Exchange' to swap silhouettes for empathy, sparking lawsuits, sidewalk mix-ups, and fights over who owns evening light.",
  content: {
    outcomes: neighborhoodShadowExchangeOutcomes,
    preferences: neighborhoodShadowExchangePreferences,
  },
  exchanges: neighborhoodShadowExchangeExchanges,
};
