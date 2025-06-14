import { presidentialPortraitExtravagancePreferences } from "./presidentialPortraitExtravagancePreferences";
import { presidentialPortraitExtravaganceOutcomes } from "./presidentialPortraitExtravaganceOutcomes";
import { presidentialPortraitExtravaganceExchanges } from "./presidentialPortraitExtravaganceExchanges";
import { SituationType, SituationData } from "~/types";

export const presidentialPortraitExtravagance: SituationData = {
  trigger: {
    staticKey: "presidential_portrait_extravagance",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Presidential Portrait Extravagance",
  description:
    "Multiple pricey presidential portraits were commissioned, sparking bipartisan sticker shock over runaway art budgets.",
  content: {
    preferences: presidentialPortraitExtravagancePreferences,
    outcomes: presidentialPortraitExtravaganceOutcomes,
  },
  exchanges: presidentialPortraitExtravaganceExchanges,
};
