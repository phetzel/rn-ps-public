import { SituationType, SituationData } from "~/types";
import { bridgeToNowherePreferences } from "./bridgeToNowherePreferences";
import { bridgeToNowhereOutcomes } from "./bridgeToNowhereOutcomes";
import { bridgeToNowhereExchanges } from "./bridgeToNowhereExchanges";

export const bridgeToNowhere: SituationData = {
  trigger: {
    staticKey: "bridge_to_nowhere_act",
    type: SituationType.Economy,
    requirements: {}, // can trigger anytime
  },
  type: SituationType.Economy,
  title: "Bridge to Nowhere Act",
  description:
    "Congress funds a $2 billion bridge linking two tiny towns (pop. 7). Critics decry pork; locals hope for tourism gold.",
  content: {
    preferences: bridgeToNowherePreferences,
    outcomes: bridgeToNowhereOutcomes,
  },
  exchanges: bridgeToNowhereExchanges,
};
