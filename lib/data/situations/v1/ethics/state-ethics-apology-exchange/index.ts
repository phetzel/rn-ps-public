import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { stateEthicsApologyExchangeOutcomes } from "./stateEthicsApologyExchangeOutcomes";
import { stateEthicsApologyExchangePreferences } from "./stateEthicsApologyExchangePreferences";
import { stateEthicsApologyExchangeExchanges } from "./exchanges";

export const stateEthicsApologyExchange: SituationDataType = {
  trigger: {
    staticKey: "state-ethics-apology-exchange",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "State Ethics: Apology Exchange",
  description: "State ethics uproar: an 'Apology Exchange' lets diplomats trade graded mea culpas as assets, sparking a probe into commodified remorse.",
  content: {
    outcomes: stateEthicsApologyExchangeOutcomes,
    preferences: stateEthicsApologyExchangePreferences,
  },
  exchanges: stateEthicsApologyExchangeExchanges,
};
