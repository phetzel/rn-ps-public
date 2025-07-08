import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { teachersStrikeBackOutcomes } from "./teachersStrikeBackOutcomes";
import { teachersStrikeBackPreferences } from "./teachersStrikeBackPreferences";
import { teachersStrikeBackExchanges } from "./exchanges";

export const teachersStrikeBack: SituationData = {
  trigger: {
    staticKey: "teachers_strike_back",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Teachers Strike Back",
  description:
    "Teachers walk out nationwide over mandatory classroom interpretive dance sessions, demanding better arts funding instead.",
  content: {
    outcomes: teachersStrikeBackOutcomes,
    preferences: teachersStrikeBackPreferences,
  },
  exchanges: teachersStrikeBackExchanges,
};
