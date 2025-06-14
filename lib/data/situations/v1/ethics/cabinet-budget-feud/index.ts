import { cabinetBudgetFeudPreferences } from "./cabinetBudgetFeudPreferences";
import { cabinetBudgetFeudOutcomes } from "./cabinetBudgetFeudOutcomes";
import { cabinetBudgetFeudExchanges } from "./cabinetBudgetFeudExchanges";
import { SituationType, SituationData } from "~/types";

export const cabinetBudgetFeud: SituationData = {
  trigger: {
    staticKey: "cabinet_budget_feud",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Cabinet Budget Feud",
  description:
    "Treasury publicly accuses Defense of wasteful spending, kicking off a bruising feud that spills into press briefings.",
  content: {
    preferences: cabinetBudgetFeudPreferences,
    outcomes: cabinetBudgetFeudOutcomes,
  },
  exchanges: cabinetBudgetFeudExchanges,
};
