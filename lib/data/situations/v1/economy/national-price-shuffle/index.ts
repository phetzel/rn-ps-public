import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalPriceShuffleOutcomes } from "./nationalPriceShuffleOutcomes";
import { nationalPriceShufflePreferences } from "./nationalPriceShufflePreferences";
import { nationalPriceShuffleExchanges } from "./exchanges";

export const nationalPriceShuffle: SituationDataType = {
  trigger: {
    staticKey: "national-price-shuffle",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "National Price Shuffle",
  description: "Treasury announces a monthly 'National Price Shuffle' where prices are randomly reassigned by a ceremonial spinner, upending household and business budgets.",
  content: {
    outcomes: nationalPriceShuffleOutcomes,
    preferences: nationalPriceShufflePreferences,
  },
  exchanges: nationalPriceShuffleExchanges,
};
