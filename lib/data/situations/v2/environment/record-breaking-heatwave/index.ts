import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { recordBreakingHeatwaveOutcomes } from "./recordBreakingHeatwaveOutcomes";
import { recordBreakingHeatwavePreferences } from "./recordBreakingHeatwavePreferences";
import { recordBreakingHeatwaveExchanges } from "./exchanges";

export const recordBreakingHeatwave: SituationDataType = {
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
    outcomes: recordBreakingHeatwaveOutcomes,
    preferences: recordBreakingHeatwavePreferences,
  },
  exchanges: recordBreakingHeatwaveExchanges,
};
