import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { scarecrowMilitiaMobilizedOutcomes } from "./scarecrowMilitiaMobilizedOutcomes";
import { scarecrowMilitiaMobilizedPreferences } from "./scarecrowMilitiaMobilizedPreferences";
import { scarecrowMilitiaMobilizedExchanges } from "./exchanges";

export const scarecrowMilitiaMobilized: SituationDataType = {
  trigger: {
    staticKey: "scarecrow-militia-mobilized",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Scarecrow Militia Mobilized",
  description: "Federal admin arms sentry scarecrows as a domestic security measure after nationwide wildlife-signal glitches, triggering legal chaos and knitting protests.",
  content: {
    outcomes: scarecrowMilitiaMobilizedOutcomes,
    preferences: scarecrowMilitiaMobilizedPreferences,
  },
  exchanges: scarecrowMilitiaMobilizedExchanges,
};
