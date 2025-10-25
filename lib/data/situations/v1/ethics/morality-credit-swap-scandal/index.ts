import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { moralityCreditSwapScandalOutcomes } from "./moralityCreditSwapScandalOutcomes";
import { moralityCreditSwapScandalPreferences } from "./moralityCreditSwapScandalPreferences";
import { moralityCreditSwapScandalExchanges } from "./exchanges";

export const moralityCreditSwapScandal: SituationDataType = {
  trigger: {
    staticKey: "morality-credit-swap-scandal",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Morality Credit Swap Scandal",
  description: "The Ethics Commission launched tradable 'morality credits' so officials could buy absolution from private brokers, sparking outrage over pay-for-pardon markets.",
  content: {
    outcomes: moralityCreditSwapScandalOutcomes,
    preferences: moralityCreditSwapScandalPreferences,
  },
  exchanges: moralityCreditSwapScandalExchanges,
};
