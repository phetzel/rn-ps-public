import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { stateDepartmentsEthicsOuijaOutcomes } from "./stateDepartmentsEthicsOuijaOutcomes";
import { stateDepartmentsEthicsOuijaPreferences } from "./stateDepartmentsEthicsOuijaPreferences";
import { stateDepartmentsEthicsOuijaExchanges } from "./exchanges";

export const stateDepartmentsEthicsOuija: SituationDataType = {
  trigger: {
    staticKey: "state-departments-ethics-ouija",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "State Department's Ethics Ouija",
  description: "State ethics probe reveals diplomats consulted a government Ouija to 'align' policy, sparking congressional letters, satire, and urgent rule changes.",
  content: {
    outcomes: stateDepartmentsEthicsOuijaOutcomes,
    preferences: stateDepartmentsEthicsOuijaPreferences,
  },
  exchanges: stateDepartmentsEthicsOuijaExchanges,
};
