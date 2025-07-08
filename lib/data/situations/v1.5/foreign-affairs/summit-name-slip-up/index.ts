import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { summitNameSlipUpOutcomes } from "./summitNameSlipUpOutcomes";
import { summitNameSlipUpPreferences } from "./summitNameSlipUpPreferences";
import { summitNameSlipUpExchanges } from "./exchanges";

export const summitNameSlipUp: SituationData = {
  trigger: {
    staticKey: "summit_name_slip_up",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Summit Name Slip-Up",
  description:
    'President repeatedly calls the Republic of Farawaystan "Faroutistan" at a summit, causing diplomatic awkwardness.',
  content: {
    outcomes: summitNameSlipUpOutcomes,
    preferences: summitNameSlipUpPreferences,
  },
  exchanges: summitNameSlipUpExchanges,
};
