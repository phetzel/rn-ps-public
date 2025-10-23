import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { marketNapMandateOutcomes } from "./marketNapMandateOutcomes";
import { marketNapMandatePreferences } from "./marketNapMandatePreferences";
import { marketNapMandateExchanges } from "./exchanges";

export const marketNapMandate: SituationDataType = {
  trigger: {
    staticKey: "market-nap-mandate",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Market Nap Mandate",
  description: "Treasury unveils mandatory daily 'market naps' - timed exchange shutdowns pitched as an anti-volatility cure that spawns pillow-stock mania.",
  content: {
    outcomes: marketNapMandateOutcomes,
    preferences: marketNapMandatePreferences,
  },
  exchanges: marketNapMandateExchanges,
};
