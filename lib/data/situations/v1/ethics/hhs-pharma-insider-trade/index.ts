import { hhsPharmaInsiderTradePreferences } from "./hhsPharmaInsiderTradePreferences";
import { hhsPharmaInsiderTradeOutcomes } from "./hhsPharmaInsiderTradeOutcomes";
import { hhsPharmaInsiderTradeExchanges } from "./hhsPharmaInsiderTradeExchanges";
import { SituationType, SituationData } from "~/types";

export const hhsPharmaInsiderTrade: SituationData = {
  trigger: {
    staticKey: "hhs_pharma_trade",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "HHS Pharma Insider Trade",
  description:
    "Health officials are accused of trading pharma stocks based on insider knowledge of upcoming drug rulings, sparking outrage.",
  content: {
    preferences: hhsPharmaInsiderTradePreferences,
    outcomes: hhsPharmaInsiderTradeOutcomes,
  },
  exchanges: hhsPharmaInsiderTradeExchanges,
};
