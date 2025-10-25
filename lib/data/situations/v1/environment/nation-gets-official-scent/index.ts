import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationGetsOfficialScentOutcomes } from "./nationGetsOfficialScentOutcomes";
import { nationGetsOfficialScentPreferences } from "./nationGetsOfficialScentPreferences";
import { nationGetsOfficialScentExchanges } from "./exchanges";

export const nationGetsOfficialScent: SituationDataType = {
  trigger: {
    staticKey: "nation-gets-official-scent",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Nation Gets Official Scent",
  description: "State unveils a blended 'Official Scent' for parks, plazas, and transit hubs, prompting perfumer lawsuits, farmer complaints, and protests over scent zoning.",
  content: {
    outcomes: nationGetsOfficialScentOutcomes,
    preferences: nationGetsOfficialScentPreferences,
  },
  exchanges: nationGetsOfficialScentExchanges,
};
