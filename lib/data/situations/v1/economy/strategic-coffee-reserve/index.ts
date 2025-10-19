import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { strategicCoffeeReserveOutcomes } from "./strategicCoffeeReserveOutcomes";
import { strategicCoffeeReservePreferences } from "./strategicCoffeeReservePreferences";
import { strategicCoffeeReserveExchanges } from "./exchanges";

export const strategicCoffeeReserve: SituationDataType = {
  trigger: {
    staticKey: "strategic_coffee_reserve",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Strategic Coffee Reserve",
  description:
    "The government creates a massive coffee stockpile to prevent shortages, igniting debates over market meddling and cost.",
  content: {
    outcomes: strategicCoffeeReserveOutcomes,
    preferences: strategicCoffeeReservePreferences,
  },
  exchanges: strategicCoffeeReserveExchanges,
};
