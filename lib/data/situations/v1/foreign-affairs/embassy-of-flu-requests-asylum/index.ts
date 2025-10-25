import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { embassyOfFluRequestsAsylumOutcomes } from "./embassyOfFluRequestsAsylumOutcomes";
import { embassyOfFluRequestsAsylumPreferences } from "./embassyOfFluRequestsAsylumPreferences";
import { embassyOfFluRequestsAsylumExchanges } from "./exchanges";

export const embassyOfFluRequestsAsylum: SituationDataType = {
  trigger: {
    staticKey: "embassy-of-flu-requests-asylum",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Embassy of Flu Requests Asylum",
  description: "'Embassy of Flu', a barge micronation, demands recognition and vaccine shipments, forcing HHS and Homeland to run aid, border checks, and surreal treaty talks.",
  content: {
    outcomes: embassyOfFluRequestsAsylumOutcomes,
    preferences: embassyOfFluRequestsAsylumPreferences,
  },
  exchanges: embassyOfFluRequestsAsylumExchanges,
};
