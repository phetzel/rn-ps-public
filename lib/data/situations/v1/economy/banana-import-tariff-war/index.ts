import { SituationType, SituationData } from "~/types";
import { bananaImportTariffWarPreferences } from "./bananaImportTariffWarPreferences";
import { bananaImportTariffWarOutcomes } from "./bananaImportTariffWarOutcomes";
import { bananaImportTariffWarExchanges } from "./bananaImportTariffWarExchanges";

export const bananaImportTariffWar: SituationData = {
  trigger: {
    staticKey: "banana_import_tariff_war",
    type: SituationType.Economy,
    requirements: { year: { min: 1, max: 4 } },
  },
  type: SituationType.Economy,
  title: "Banana Import Tariff War",
  description:
    "New 20 % tariff on foreign bananas sparks price fears, trade threats from Bananalandia, and debate over fruit-based protectionism.",
  content: {
    preferences: bananaImportTariffWarPreferences,
    outcomes: bananaImportTariffWarOutcomes,
  },
  exchanges: bananaImportTariffWarExchanges,
};
