import { summitNameSlipPreferences } from "./summitNameSlipPreferences";
import { summitNameSlipOutcomes } from "./summitNameSlipOutcomes";
import { summitNameSlipExchanges } from "./summitNameSlipExchanges";
import { SituationType, SituationData } from "~/types";

export const summitNameSlip: SituationData = {
  trigger: {
    staticKey: "summit_name_slip",
    type: SituationType.ForeignAffairs,
    requirements: {
      year: { min: 1, max: 2 },
    },
  },
  type: SituationType.ForeignAffairs,
  title: "Summit Name Slip",
  description:
    "President repeatedly calls the Republic of Reallyfarawaystan “Reallyfastvanistan” at international summit, causing diplomatic awkwardness.",
  content: {
    preferences: summitNameSlipPreferences,
    outcomes: summitNameSlipOutcomes,
  },
  exchanges: summitNameSlipExchanges,
};
