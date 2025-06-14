import { treasuryInsiderTradingPreferences } from "./treasuryInsiderTradingPreferences";
import { treasuryInsiderTradingOutcomes } from "./treasuryInsiderTradingOutcomes";
import { treasuryInsiderTradingExchanges } from "./treasuryInsiderTradingExchanges";
import { SituationType, SituationData } from "~/types";

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
    preferences: treasuryInsiderTradingPreferences,
    outcomes: treasuryInsiderTradingOutcomes,
  },
  exchanges: treasuryInsiderTradingExchanges,
};
