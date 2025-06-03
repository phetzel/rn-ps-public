import { SituationType, SituationData } from "~/types";
import { presidentialScareTacticsPreferences } from "./presidentialScareTacticsPreferences";
import { presidentialScareTacticsOutcomes } from "./presidentialScareTacticsOutcomes";
import { presidentialScareTacticsExchanges } from "./presidentialScareTacticsExchanges";

export const presidentialScareTactics: SituationData = {
  trigger: {
    staticKey: "presidential_scare_tactics",
    type: SituationType.Security,
    requirements: {}, // anytime
  },
  type: SituationType.Security,
  title: "Presidential Scare Tactics",
  description:
    "President hints at staging a fake alien-invasion alert to win defense funds, spooking watchdogs and rattling the public.",
  content: {
    preferences: presidentialScareTacticsPreferences,
    outcomes: presidentialScareTacticsOutcomes,
  },
  exchanges: presidentialScareTacticsExchanges,
};
