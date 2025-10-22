import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { summitCollapsesOverMascotOutcomes } from "./summitCollapsesOverMascotOutcomes";
import { summitCollapsesOverMascotPreferences } from "./summitCollapsesOverMascotPreferences";
import { summitCollapsesOverMascotExchanges } from "./exchanges";

export const summitCollapsesOverMascot: SituationDataType = {
  trigger: {
    staticKey: "summit-collapses-over-mascot",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Summit Collapses Over Mascot",
  description: "Two allies recalled ambassadors after a mascot swap devolved into a foam-chicken duel, leaving diplomats to haggle over apologies and joint custody terms.",
  content: {
    outcomes: summitCollapsesOverMascotOutcomes,
    preferences: summitCollapsesOverMascotPreferences,
  },
  exchanges: summitCollapsesOverMascotExchanges,
};
