import { SituationType, SituationData } from "~/types";
import { casualFridayEverydayPreferences } from "./casualFridayEverydayPreferences";
import { casualFridayEverydayOutcomes } from "./casualFridayEverydayOutcomes";
import { casualFridayEverydayExchanges } from "./casualFridayEverydayExchanges";

export const casualFridayEveryday: SituationData = {
  trigger: {
    staticKey: "casual_friday_everyday",
    type: SituationType.DomesticPolicy,
    requirements: {}, // can occur any month
  },
  type: SituationType.DomesticPolicy,
  title: "Casual Friday, Everyday",
  description:
    "Administration declares every weekday ‘Casual Friday,’ sparking pajama disputes, HR confusion, and debates about government decorum.",
  content: {
    preferences: casualFridayEverydayPreferences,
    outcomes: casualFridayEverydayOutcomes,
  },
  exchanges: casualFridayEverydayExchanges,
};
