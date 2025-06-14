import { cabinetInsiderStockBattlePreferences } from "./cabinetInsiderStockBattlePreferences";
import { cabinetInsiderStockBattleOutcomes } from "./cabinetInsiderStockBattleOutcomes";
import { cabinetInsiderStockBattleExchanges } from "./cabinetInsiderStockBattleExchanges";
import { SituationType, SituationData } from "~/types";

export const cabinetInsiderStockBattle: SituationData = {
  trigger: {
    staticKey: "cabinet_stock_battle",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Cabinet Insider Stock Battle",
  description:
    "Treasury and Defense officials are accused of trading stocks based on policy leaks, each blaming the other for tip-offs, sparking a brawl over ethics.",
  content: {
    preferences: cabinetInsiderStockBattlePreferences,
    outcomes: cabinetInsiderStockBattleOutcomes,
  },
  exchanges: cabinetInsiderStockBattleExchanges,
};
