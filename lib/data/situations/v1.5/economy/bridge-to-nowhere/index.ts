import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { bridgeToNowhereOutcomes } from "./bridgeToNowhereOutcomes";
import { bridgeToNowherePreferences } from "./bridgeToNowherePreferences";
import { bridgeToNowhereExchanges } from "./exchanges";

export const bridgeToNowhere: SituationData = {
  trigger: {
    staticKey: "bridge_to_nowhere_act",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Bridge to Nowhere Act",
  description:
    "Congress funds a $2B bridge linking two tiny towns. Critics decry pork spending; locals hope for a tourism boom.",
  content: {
    outcomes: bridgeToNowhereOutcomes,
    preferences: bridgeToNowherePreferences,
  },
  exchanges: bridgeToNowhereExchanges,
};
