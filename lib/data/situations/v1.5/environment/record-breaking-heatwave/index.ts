import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { recordHeatwaveOutcomes } from "./recordHeatwaveOutcomes";
import { recordHeatwavePreferences } from "./recordHeatwavePreferences";
import { recordHeatwaveExchanges } from "./exchanges";

export const recordHeatwave: SituationData = {
  trigger: {
    staticKey: "record_breaking_heatwave",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Record-Breaking Heatwave",
  description:
    "A weeks-long heatwave sparks health crises, straining the grid and fueling radical weather-control proposals.",
  content: {
    outcomes: recordHeatwaveOutcomes,
    preferences: recordHeatwavePreferences,
  },
  exchanges: recordHeatwaveExchanges,
};
