import { agsCasinoTripsPreferences } from "./agsCasinoTripsPreferences";
import { agsCasinoTripsOutcomes } from "./agsCasinoTripsOutcomes";
import { agsCasinoTripsExchanges } from "./agsCasinoTripsExchanges";
import { SituationType, SituationData } from "~/types";

export const agsCasinoTrips: SituationData = {
  trigger: {
    staticKey: "ag_casino_trips",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "AG's Casino Trips",
  description:
    "Rumors swirl that the Attorney General used DOJ jets for weekend casino jaunts, igniting questions about abuse of resources.",
  content: {
    preferences: agsCasinoTripsPreferences,
    outcomes: agsCasinoTripsOutcomes,
  },
  exchanges: agsCasinoTripsExchanges,
};
