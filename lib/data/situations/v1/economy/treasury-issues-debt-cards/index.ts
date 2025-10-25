import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { treasuryIssuesDebtCardsOutcomes } from "./treasuryIssuesDebtCardsOutcomes";
import { treasuryIssuesDebtCardsPreferences } from "./treasuryIssuesDebtCardsPreferences";
import { treasuryIssuesDebtCardsExchanges } from "./exchanges";

export const treasuryIssuesDebtCards: SituationDataType = {
  trigger: {
    staticKey: "treasury-issues-debt-cards",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Treasury Issues Debt Cards",
  description: "Treasury unveils collectible 'debt cards'—tradeable mini-bonds sold like baseball cards—sparking frenzied markets, speculator flurries, and policy chaos.",
  content: {
    outcomes: treasuryIssuesDebtCardsOutcomes,
    preferences: treasuryIssuesDebtCardsPreferences,
  },
  exchanges: treasuryIssuesDebtCardsExchanges,
};
