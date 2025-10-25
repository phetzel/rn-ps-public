import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { stockMarketNowAcceptsHugsOutcomes } from "./stockMarketNowAcceptsHugsOutcomes";
import { stockMarketNowAcceptsHugsPreferences } from "./stockMarketNowAcceptsHugsPreferences";
import { stockMarketNowAcceptsHugsExchanges } from "./exchanges";

export const stockMarketNowAcceptsHugs: SituationDataType = {
  trigger: {
    staticKey: "stock-market-now-accepts-hugs",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Stock Market Now Accepts Hugs",
  description: "Administration announces that exchanges will list affection assets - brokers may accept hugs and high-fives as tradable collateral, prompting valuation chaos.",
  content: {
    outcomes: stockMarketNowAcceptsHugsOutcomes,
    preferences: stockMarketNowAcceptsHugsPreferences,
  },
  exchanges: stockMarketNowAcceptsHugsExchanges,
};
