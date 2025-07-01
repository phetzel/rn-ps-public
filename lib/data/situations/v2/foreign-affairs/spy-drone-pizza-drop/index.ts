import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { spyDronePizzaDropOutcomes } from "./spyDronePizzaDropOutcomes";
import { spyDronePizzaDropPreferences } from "./spyDronePizzaDropPreferences";
import { spyDronePizzaDropExchanges } from "./exchanges";

export const spyDronePizzaDrop: SituationData = {
  trigger: {
    staticKey: "spy_drone_pizza_drop",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Spy Drone Pizza Drop",
  description:
    "A recon drone accidentally drops pizzas on a rival nation's military parade, sparking outrage over the cheesy airstrike.",
  content: {
    outcomes: spyDronePizzaDropOutcomes,
    preferences: spyDronePizzaDropPreferences,
  },
  exchanges: spyDronePizzaDropExchanges,
};
