import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { cheeseTariffWarOutcomes } from "./cheeseTariffWarOutcomes";
import { cheeseTariffWarPreferences } from "./cheeseTariffWarPreferences";
import { cheeseTariffWarExchanges } from "./exchanges";

export const cheeseTariffWar: SituationData = {
  trigger: {
    staticKey: "cheese_tariff_war",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Cheese Tariff War",
  description:
    "President jokes that Dairystan's cheese is overrated, sparking a sudden tariff tit-for-tat that threatens global trade.",
  content: {
    outcomes: cheeseTariffWarOutcomes,
    preferences: cheeseTariffWarPreferences,
  },
  exchanges: cheeseTariffWarExchanges,
};
