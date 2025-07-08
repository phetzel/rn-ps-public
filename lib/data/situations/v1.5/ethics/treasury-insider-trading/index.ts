import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { treasuryInsiderTradingOutcomes } from "./treasuryInsiderTradingOutcomes";
import { treasuryInsiderTradingPreferences } from "./treasuryInsiderTradingPreferences";
import { treasuryInsiderTradingExchanges } from "./exchanges";

export const treasuryInsiderTrading: SituationData = {
  trigger: {
    staticKey: "treasury_insider_trading",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Treasury Insider Trading",
  description:
    "Suspiciously timed stock trades by Treasury officials raise accusations of insider trading and spark calls for investigation.",
  content: {
    outcomes: treasuryInsiderTradingOutcomes,
    preferences: treasuryInsiderTradingPreferences,
  },
  exchanges: treasuryInsiderTradingExchanges,
};
