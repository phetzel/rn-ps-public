import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { ethicsCommissionSellsMoralityOutcomes } from "./ethicsCommissionSellsMoralityOutcomes";
import { ethicsCommissionSellsMoralityPreferences } from "./ethicsCommissionSellsMoralityPreferences";
import { ethicsCommissionSellsMoralityExchanges } from "./exchanges";

export const ethicsCommissionSellsMorality: SituationDataType = {
  trigger: {
    staticKey: "ethics-commission-sells-morality",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Ethics Commission Sells Morality",
  description: "An ethics panel quietly began auctioning serialized morality licenses and branded apology tokens to officials, provoking refund demands.",
  content: {
    outcomes: ethicsCommissionSellsMoralityOutcomes,
    preferences: ethicsCommissionSellsMoralityPreferences,
  },
  exchanges: ethicsCommissionSellsMoralityExchanges,
};
