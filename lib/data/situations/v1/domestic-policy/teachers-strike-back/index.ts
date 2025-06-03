import { SituationType, SituationData } from "~/types";
import { teachersStrikeBackPreferences } from "./teachersStrikeBackPreferences";
import { teachersStrikeBackOutcomes } from "./teachersStrikeBackOutcomes";
import { teachersStrikeBackExchanges } from "./teachersStrikeBackExchanges";

export const teachersStrikeBack: SituationData = {
  trigger: {
    staticKey: "teachers_strike_back",
    type: SituationType.DomesticPolicy,
    requirements: {}, // can occur during school year
  },
  type: SituationType.DomesticPolicy,
  title: "Teachers Strike Back",
  description:
    "Teachers walk out over mandatory classroom karaoke sessions, demanding the rule’s repeal and better arts funding.",
  content: {
    preferences: teachersStrikeBackPreferences,
    outcomes: teachersStrikeBackOutcomes,
  },
  exchanges: teachersStrikeBackExchanges,
};
