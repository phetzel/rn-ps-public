import { customLimoPreferences } from "./customLimoPreferences";
import { customLimoOutcomes } from "./customLimoOutcomes";
import { customLimoExchanges } from "./customLimoExchanges";
import { SituationType, SituationData } from "~/types";

export const customLimousineFleet: SituationData = {
  trigger: {
    staticKey: "custom_limo_fleet",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Custom Limousine Fleet",
  description:
    "Leaked purchase orders reveal a gold-trim limousine fleet ordered for presidential travel, sparking accusations of excess.",
  content: {
    preferences: customLimoPreferences,
    outcomes: customLimoOutcomes,
  },
  exchanges: customLimoExchanges,
};
