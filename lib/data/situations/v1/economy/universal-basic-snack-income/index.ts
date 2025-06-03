import { SituationType, SituationData } from "~/types";
import { universalBasicSnackIncomePreferences } from "./universalBasicSnackIncomePreferences";
import { universalBasicSnackIncomeOutcomes } from "./universalBasicSnackIncomeOutcomes";
import { universalBasicSnackIncomeExchanges } from "./universalBasicSnackIncomeExchanges";

export const universalBasicSnackIncome: SituationData = {
  trigger: {
    staticKey: "universal_basic_snack_income",
    type: SituationType.Economy,
    requirements: { year: { min: 1, max: 3 } },
  },
  type: SituationType.Economy,
  title: "Universal Basic Snack Income",
  description:
    "Administration proposes monthly snack credits for every citizen, igniting debate over health, fraud, and fiscal sense.",
  content: {
    preferences: universalBasicSnackIncomePreferences,
    outcomes: universalBasicSnackIncomeOutcomes,
  },
  exchanges: universalBasicSnackIncomeExchanges,
};
