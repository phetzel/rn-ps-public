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
  title: "Internet Curfew Proposal",
  description:
    "President floats a 10 p.m. internet shutdown to 'boost sleep,' prompting fury from tech firms and night owls.",
  content: {
    outcomes: internetCurfewOutcomes,
    preferences: internetCurfewPreferences,
  },
  exchanges: internetCurfewExchanges,
};
