import { snackBudgetPreferences } from "./snackBudgetPreferences";
import { snackBudgetOutcomes } from "./snackBudgetOutcomes";
import { snackBudgetExchanges } from "./snackBudgetExchanges";
import { SituationType, SituationData } from "~/types";

export const snackBudgetExceedsEducation: SituationData = {
  trigger: {
    staticKey: "snack_budget_vs_education",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Snack Budget Exceeds Education",
  description:
    "Reporters discover the President's snack budget surpasses the education ministry's funding, raising fiscal outrage.",
  content: {
    preferences: snackBudgetPreferences,
    outcomes: snackBudgetOutcomes,
  },
  exchanges: snackBudgetExchanges,
};
