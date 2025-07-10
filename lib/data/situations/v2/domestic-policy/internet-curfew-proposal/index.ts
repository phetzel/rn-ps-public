import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { internetCurfewOutcomes } from "./internetCurfewOutcomes";
import { internetCurfewPreferences } from "./internetCurfewPreferences";
import { internetCurfewExchanges } from "./exchanges";

export const internetCurfew: SituationData = {
  trigger: {
    staticKey: "internet_curfew_proposal",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Internet Curfew Proposal", // 24 chars - within 15-50 limit
  description:
    "President floats 10pm internet shutdown to 'boost sleep,' sparking fury from tech firms and night owls nationwide.", // 108 chars - within 80-160 limit
  content: {
    outcomes: internetCurfewOutcomes,
    preferences: internetCurfewPreferences,
  },
  exchanges: internetCurfewExchanges,
};
