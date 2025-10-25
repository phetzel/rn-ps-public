import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { ethicsTokenVendingMeltdownOutcomes } from "./ethicsTokenVendingMeltdownOutcomes";
import { ethicsTokenVendingMeltdownPreferences } from "./ethicsTokenVendingMeltdownPreferences";
import { ethicsTokenVendingMeltdownExchanges } from "./exchanges";

export const ethicsTokenVendingMeltdown: SituationDataType = {
  trigger: {
    staticKey: "ethics-token-vending-meltdown",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Ethics Token Vending Meltdown",
  description: "A government 'Ethics Token' vending machine reportedly sold expedited conflict waivers—sometimes for pizza—provoking urban residents to demand a full probe.",
  content: {
    outcomes: ethicsTokenVendingMeltdownOutcomes,
    preferences: ethicsTokenVendingMeltdownPreferences,
  },
  exchanges: ethicsTokenVendingMeltdownExchanges,
};
