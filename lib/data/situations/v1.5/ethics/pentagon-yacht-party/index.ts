import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { pentagonYachtPartyOutcomes } from "./pentagonYachtPartyOutcomes";
import { pentagonYachtPartyPreferences } from "./pentagonYachtPartyPreferences";
import { pentagonYachtPartyExchanges } from "./exchanges";

export const pentagonYachtParty: SituationData = {
  trigger: {
    staticKey: "pentagon_yacht_party",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Pentagon Yacht Party",
  description:
    "A lavish yacht party for Pentagon officials and defense contractors comes to light, revealing cozy, questionable spending.",
  content: {
    outcomes: pentagonYachtPartyOutcomes,
    preferences: pentagonYachtPartyPreferences,
  },
  exchanges: pentagonYachtPartyExchanges,
};
