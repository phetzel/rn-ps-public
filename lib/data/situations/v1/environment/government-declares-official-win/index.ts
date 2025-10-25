import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { governmentDeclaresOfficialWinOutcomes } from "./governmentDeclaresOfficialWinOutcomes";
import { governmentDeclaresOfficialWinPreferences } from "./governmentDeclaresOfficialWinPreferences";
import { governmentDeclaresOfficialWinExchanges } from "./exchanges";

export const governmentDeclaresOfficialWin: SituationDataType = {
  trigger: {
    staticKey: "government-declares-official-win",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Government Declares Official Win",
  description: "Federal Atmospherics names one 'official wind,' tying permits, grants, and festivals to its timetable and sending farmers, makers, and kite lobbies scrambling.",
  content: {
    outcomes: governmentDeclaresOfficialWinOutcomes,
    preferences: governmentDeclaresOfficialWinPreferences,
  },
  exchanges: governmentDeclaresOfficialWinExchanges,
};
