import { SituationType, SituationData } from "~/types";
import { cheeseTariffWarPreferences } from "./cheeseTariffWarPreferences";
import { cheeseTariffWarOutcomes } from "./cheeseTariffWarOutcomes";
import { cheeseTariffWarExchanges } from "./cheeseTariffWarExchanges";

export const cheeseTariffWar: SituationData = {
  trigger: {
    staticKey: "cheese_tariff_war",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Cheese Tariff War",
  description:
    "The President jokes that Dairystan's famous cheese is overrated, sparking a sudden tariff tit-for-tat that threatens farmers.",
  content: {
    preferences: cheeseTariffWarPreferences,
    outcomes: cheeseTariffWarOutcomes,
  },
  exchanges: cheeseTariffWarExchanges,
};
