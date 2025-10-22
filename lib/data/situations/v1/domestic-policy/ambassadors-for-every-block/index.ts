import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { ambassadorsForEveryBlockOutcomes } from "./ambassadorsForEveryBlockOutcomes";
import { ambassadorsForEveryBlockPreferences } from "./ambassadorsForEveryBlockPreferences";
import { ambassadorsForEveryBlockExchanges } from "./exchanges";

export const ambassadorsForEveryBlock: SituationDataType = {
  trigger: {
    staticKey: "ambassadors-for-every-block",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Ambassadors for Every Block",
  description: "State launches 'Block Embassy' program making neighborhoods host ambassadors to settle disputes, sparking absurd outrage from both bases and city dwellers.",
  content: {
    outcomes: ambassadorsForEveryBlockOutcomes,
    preferences: ambassadorsForEveryBlockPreferences,
  },
  exchanges: ambassadorsForEveryBlockExchanges,
};
