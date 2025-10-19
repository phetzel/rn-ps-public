import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { teachersStrikeBackOutcomes } from "./teachersStrikeBackOutcomes";
import { teachersStrikeBackPreferences } from "./teachersStrikeBackPreferences";
import { teachersStrikeBackExchanges } from "./exchanges";

export const teachersStrikeBack: SituationDataType = {
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
