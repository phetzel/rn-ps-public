import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { cabinetBudgetBrawlOutcomes } from "./cabinetBudgetBrawlOutcomes";
import { cabinetBudgetBrawlPreferences } from "./cabinetBudgetBrawlPreferences";
import { cabinetBudgetBrawlExchanges } from "./exchanges";

export const cabinetBudgetBrawl: SituationDataType = {
  trigger: {
    staticKey: "cabinet_budget_brawl",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Cabinet Budget Brawl",
  description:
    "Treasury publicly accuses Defense of wasteful spending, kicking off a bruising feud that spills into press briefings.",
  content: {
    outcomes: cabinetBudgetBrawlOutcomes,
    preferences: cabinetBudgetBrawlPreferences,
  },
  exchanges: cabinetBudgetBrawlExchanges,
};
