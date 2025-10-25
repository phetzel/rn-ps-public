import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { sovereignSnackTreatyStandoffOutcomes } from "./sovereignSnackTreatyStandoffOutcomes";
import { sovereignSnackTreatyStandoffPreferences } from "./sovereignSnackTreatyStandoffPreferences";
import { sovereignSnackTreatyStandoffExchanges } from "./exchanges";

export const sovereignSnackTreatyStandoff: SituationDataType = {
  trigger: {
    staticKey: "sovereign-snack-treaty-standoff",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Sovereign Snack Treaty Standoff",
  description: "A microstate demands the U.S. swap its embassy for a themed diner to honor a 'Sovereign Snack' clause, triggering menu diplomacy with ketchup redlines.",
  content: {
    outcomes: sovereignSnackTreatyStandoffOutcomes,
    preferences: sovereignSnackTreatyStandoffPreferences,
  },
  exchanges: sovereignSnackTreatyStandoffExchanges,
};
