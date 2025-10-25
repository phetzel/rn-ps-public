import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalMonopolonBailoutOutcomes } from "./nationalMonopolonBailoutOutcomes";
import { nationalMonopolonBailoutPreferences } from "./nationalMonopolonBailoutPreferences";
import { nationalMonopolonBailoutExchanges } from "./exchanges";

export const nationalMonopolonBailout: SituationDataType = {
  trigger: {
    staticKey: "national-monopolon-bailout",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "National Monopolon Bailout",
  description: "Treasury wants to nationalize Monopolon to stem a collapse in collectible game assets; HHS will treat distressed tokens and Homeland will secure stacks of play ",
  content: {
    outcomes: nationalMonopolonBailoutOutcomes,
    preferences: nationalMonopolonBailoutPreferences,
  },
  exchanges: nationalMonopolonBailoutExchanges,
};
