import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { treasurySellsHappinessBondsOutcomes } from "./treasurySellsHappinessBondsOutcomes";
import { treasurySellsHappinessBondsPreferences } from "./treasurySellsHappinessBondsPreferences";
import { treasurySellsHappinessBondsExchanges } from "./exchanges";

export const treasurySellsHappinessBonds: SituationDataType = {
  trigger: {
    staticKey: "treasury-sells-happiness-bonds",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Treasury Sells Happiness Bonds",
  description: "Treasury unveils 'Happiness Bonds'—debt that pays out when national mood targets are met, provoking market speculation, lawsuits, and partisan spin.",
  content: {
    outcomes: treasurySellsHappinessBondsOutcomes,
    preferences: treasurySellsHappinessBondsPreferences,
  },
  exchanges: treasurySellsHappinessBondsExchanges,
};
