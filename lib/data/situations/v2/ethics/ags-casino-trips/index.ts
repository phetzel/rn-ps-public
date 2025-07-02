import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { agCasinoTripsOutcomes } from "./outcomes";
import { agCasinoTripsPreferences } from "./preferences";
import { agCasinoTripsExchanges } from "./exchanges";

export const agCasinoTrips: SituationData = {
  trigger: {
    staticKey: "ag_casino_trips",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "AG's Casino Trips",
  description:
    "The Attorney General is accused of using a DOJ jet for weekend casino junkets, igniting a firestorm over abuse of power.",
  content: {
    outcomes: agCasinoTripsOutcomes,
    preferences: agCasinoTripsPreferences,
  },
  exchanges: agCasinoTripsExchanges,
};
