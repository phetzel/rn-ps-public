import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { freedomcoinCurrencyPlanOutcomes } from "./freedomcoinCurrencyPlanOutcomes";
import { freedomcoinCurrencyPlanPreferences } from "./freedomcoinCurrencyPlanPreferences";
import { freedomcoinCurrencyPlanExchanges } from "./exchanges";

export const freedomcoinCurrencyPlan: SituationData = {
  trigger: {
    staticKey: "freedomcoin_currency_plan",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "FreedomCoin Currency Plan",
  description:
    "President announces a plan to replace the dollar with 'FreedomCoin,' a new national cryptocurrency, sending markets into a frenzy.",
  content: {
    outcomes: freedomcoinCurrencyPlanOutcomes,
    preferences: freedomcoinCurrencyPlanPreferences,
  },
  exchanges: freedomcoinCurrencyPlanExchanges,
};
