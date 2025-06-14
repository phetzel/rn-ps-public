import { secretDojWineCellarPreferences } from "./secretDojWineCellarPreferences";
import { secretDojWineCellarOutcomes } from "./secretDojWineCellarOutcomes";
import { secretDojWineCellarExchanges } from "./secretDojWineCellarExchanges";
import { SituationType, SituationData } from "~/types";

export const secretDojWineCellar: SituationData = {
  trigger: {
    staticKey: "doj_wine_cellar",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Secret DOJ Wine Cellar",
  description:
    "A hidden taxpayer-funded wine vault under the Justice Department is exposed, prompting questions about lavish perks.",
  content: {
    preferences: secretDojWineCellarPreferences,
    outcomes: secretDojWineCellarOutcomes,
  },
  exchanges: secretDojWineCellarExchanges,
};
