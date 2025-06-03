import { SituationType, SituationData } from "~/types";
import { nationalCoffeeReservePreferences } from "./nationalCoffeeReservePreferences";
import { nationalCoffeeReserveOutcomes } from "./nationalCoffeeReserveOutcomes";
import { nationalCoffeeReserveExchanges } from "./nationalCoffeeReserveExchanges";

export const nationalCoffeeReserve: SituationData = {
  trigger: {
    staticKey: "national_coffee_reserve",
    type: SituationType.Economy,
    requirements: { year: { min: 1, max: 4 } },
  },
  type: SituationType.Economy,
  title: "National Coffee Reserve",
  description:
    "Administration creates a strategic coffee stockpile to shield the nation from bean shortages, igniting debates over cost, mold, and market meddling.",
  content: {
    preferences: nationalCoffeeReservePreferences,
    outcomes: nationalCoffeeReserveOutcomes,
  },
  exchanges: nationalCoffeeReserveExchanges,
};
