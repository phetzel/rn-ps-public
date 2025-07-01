import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { strategicCoffeeReserveOutcomes } from "./strategicCoffeeReserveOutcomes";
import { strategicCoffeeReservePreferences } from "./strategicCoffeeReservePreferences";
import { strategicCoffeeReserveExchanges } from "./exchanges";

export const strategicCoffeeReserve: SituationData = {
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
