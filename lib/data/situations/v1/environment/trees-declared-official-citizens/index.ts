import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { treesDeclaredOfficialCitizensOutcomes } from "./treesDeclaredOfficialCitizensOutcomes";
import { treesDeclaredOfficialCitizensPreferences } from "./treesDeclaredOfficialCitizensPreferences";
import { treesDeclaredOfficialCitizensExchanges } from "./exchanges";

export const treesDeclaredOfficialCitizens: SituationDataType = {
  trigger: {
    staticKey: "trees-declared-official-citizens",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Trees Declared Official Citizens",
  description: "Government grants 'citizenship' to mature trees, issuing ID tags and tax status while forcing cities and arborists to register, poll, and tax oaks.",
  content: {
    outcomes: treesDeclaredOfficialCitizensOutcomes,
    preferences: treesDeclaredOfficialCitizensPreferences,
  },
  exchanges: treesDeclaredOfficialCitizensExchanges,
};
