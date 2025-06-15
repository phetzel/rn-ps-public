import { SituationType, SituationData } from "~/types";
import { spyDronePizzaDropPreferences } from "./spyDronePizzaDropPreferences";
import { spyDronePizzaDropOutcomes } from "./spyDronePizzaDropOutcomes";
import { spyDronePizzaDropExchanges } from "./spyDronePizzaDropExchanges";

export const spyDronePizzaDrop: SituationData = {
  trigger: {
    staticKey: "spy_drone_pizza_drop",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Spy Drone Pizza Drop",
  description:
    "A recon drone bungles its flight path and showers a vegan world summit with pizzas meant for troops, sparking outrage over the cheesy airstrike.",
  content: {
    preferences: spyDronePizzaDropPreferences,
    outcomes: spyDronePizzaDropOutcomes,
  },
  exchanges: spyDronePizzaDropExchanges,
};
