import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { treasuryTradesDollarForSmlesOutcomes } from "./treasuryTradesDollarForSmlesOutcomes";
import { treasuryTradesDollarForSmlesPreferences } from "./treasuryTradesDollarForSmlesPreferences";
import { treasuryTradesDollarForSmlesExchanges } from "./exchanges";

export const treasuryTradesDollarForSmles: SituationDataType = {
  trigger: {
    staticKey: "treasury-trades-dollar-for-smles",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Treasury Trades Dollar for Smles",
  description: "Treasury pushes a 'smile' currency tracked by a government app, forcing businesses, unions, and retirees into a fraught experiment with mood-based money.",
  content: {
    outcomes: treasuryTradesDollarForSmlesOutcomes,
    preferences: treasuryTradesDollarForSmlesPreferences,
  },
  exchanges: treasuryTradesDollarForSmlesExchanges,
};
