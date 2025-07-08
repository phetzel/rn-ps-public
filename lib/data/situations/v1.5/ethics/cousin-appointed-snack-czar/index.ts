import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { cousinSnackCzarOutcomes } from "./cousinAppointedSnackCzarOutcomes";
import { cousinSnackCzarPreferences } from "./cousinAppointedSnackCzarPreferences";
import { cousinAppointedSnackCzarExchanges } from "./exchanges";

export const cousinSnackCzar: SituationData = {
  trigger: {
    staticKey: "cousin_appointed_snack_czar",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Cousin Appointed Snack Czar",
  description:
    "President appoints their unqualified cousin as 'Snack Czar,' overseeing federal vending machines and raising nepotism alarms.",
  content: {
    outcomes: cousinSnackCzarOutcomes,
    preferences: cousinSnackCzarPreferences,
  },
  exchanges: cousinAppointedSnackCzarExchanges,
};
