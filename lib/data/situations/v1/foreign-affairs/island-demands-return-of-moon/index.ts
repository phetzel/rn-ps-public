import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { islandDemandsReturnOfMoonOutcomes } from "./islandDemandsReturnOfMoonOutcomes";
import { islandDemandsReturnOfMoonPreferences } from "./islandDemandsReturnOfMoonPreferences";
import { islandDemandsReturnOfMoonExchanges } from "./exchanges";

export const islandDemandsReturnOfMoon: SituationDataType = {
  trigger: {
    staticKey: "island-demands-return-of-moon",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Island Demands Return of Moon",
  description: "A tiny island claims ancestral lunar rights after a tourism firm 'booked' its moonlight, demanding restitution and trade leverage under the Treaty of Tides.",
  content: {
    outcomes: islandDemandsReturnOfMoonOutcomes,
    preferences: islandDemandsReturnOfMoonPreferences,
  },
  exchanges: islandDemandsReturnOfMoonExchanges,
};
