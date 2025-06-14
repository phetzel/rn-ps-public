import { SituationType, SituationData } from "~/types";
import { extremeAllergySeasonPreferences } from "./extremeAllergySeasonPreferences";
import { extremeAllergySeasonOutcomes } from "./extremeAllergySeasonOutcomes";
import { extremeAllergySeasonExchanges } from "./extremeAllergySeasonExchanges";

export const extremeAllergySeason: SituationData = {
  trigger: {
    staticKey: "extreme_allergy_season",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "Extreme Allergy Season",
  description:
    "Explosive pollen counts clog emergency rooms and offices, leaving citizens and budgets wheezing.",
  content: {
    preferences: extremeAllergySeasonPreferences,
    outcomes: extremeAllergySeasonOutcomes,
  },
  exchanges: extremeAllergySeasonExchanges,
};
