import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { casualFridayEverydayOutcomes } from "./casualFridayEverydayOutcomes";
import { casualFridayEverydayPreferences } from "./casualFridayEverydayPreferences";
import { casualFridayEverydayExchanges } from "./exchanges";

export const casualFridayEveryday: SituationData = {
  trigger: {
    staticKey: "casual_friday_everyday",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Casual Friday, Everyday",
  description:
    "The White House declares every day 'Casual Friday,' sparking pajama disputes and debates on government decorum.",
  content: {
    outcomes: casualFridayEverydayOutcomes,
    preferences: casualFridayEverydayPreferences,
  },
  exchanges: casualFridayEverydayExchanges,
};
