import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { triCabinetCandleCartelOutcomes } from "./triCabinetCandleCartelOutcomes";
import { triCabinetCandleCartelPreferences } from "./triCabinetCandleCartelPreferences";
import { triCabinetCandleCartelExchanges } from "./exchanges";

export const triCabinetCandleCartel: SituationDataType = {
  trigger: {
    staticKey: "tri-cabinet-candle-cartel",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Tri-Cabinet Candle Cartel",
  description: "State, Defense, and Justice stand accused of swapping 'diplomatic immunity' for boutique candles, triggering a surreal ethics probe and wick quarantines.",
  content: {
    outcomes: triCabinetCandleCartelOutcomes,
    preferences: triCabinetCandleCartelPreferences,
  },
  exchanges: triCabinetCandleCartelExchanges,
};
