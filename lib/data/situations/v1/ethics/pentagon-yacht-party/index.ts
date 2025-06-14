import { pentagonYachtPartyPreferences } from "./pentagonYachtPartyPreferences";
import { pentagonYachtPartyOutcomes } from "./pentagonYachtPartyOutcomes";
import { pentagonYachtPartyExchanges } from "./pentagonYachtPartyExchanges";
import { SituationType, SituationData } from "~/types";

export const pentagonYachtParty: SituationData = {
  trigger: {
    staticKey: "pentagon_yacht_party",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Pentagon Yacht Party",
  description:
    "A lavish yacht party with defense contractors comes to light, revealing questionable spending and cozy relationships at the Pentagon.",
  content: {
    preferences: pentagonYachtPartyPreferences,
    outcomes: pentagonYachtPartyOutcomes,
  },
  exchanges: pentagonYachtPartyExchanges,
};
