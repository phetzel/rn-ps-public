import { SituationType, SituationData } from "~/types";
import { tradeDealVanityClausePreferences } from "./tradeDealVanityClausePreferences";
import { tradeDealVanityClauseOutcomes } from "./tradeDealVanityClauseOutcomes";
import { tradeDealVanityClauseExchanges } from "./tradeDealVanityClauseExchanges";

export const tradeDealVanityClause: SituationData = {
  trigger: {
    staticKey: "trade_deal_vanity_clause",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Trade Deal Vanity Clause",
  description:
    "While finalizing a trade deal, the President demands the partner nation's capital be renamed after him. Diplomats scramble to salvage negotiations.",
  content: {
    preferences: tradeDealVanityClausePreferences,
    outcomes: tradeDealVanityClauseOutcomes,
  },
  exchanges: tradeDealVanityClauseExchanges,
};
