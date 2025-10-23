import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { pillowFortNationalAlertOutcomes } from "./pillowFortNationalAlertOutcomes";
import { pillowFortNationalAlertPreferences } from "./pillowFortNationalAlertPreferences";
import { pillowFortNationalAlertExchanges } from "./exchanges";

export const pillowFortNationalAlert: SituationDataType = {
  trigger: {
    staticKey: "pillow-fort-national-alert",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Pillow Fort National Alert",
  description: "Administration mandates a 'Pillow Fort Day' to shield soft targets, sparking cushion shortages, Homeland issuing standards, and a flood of exemption petitions.",
  content: {
    outcomes: pillowFortNationalAlertOutcomes,
    preferences: pillowFortNationalAlertPreferences,
  },
  exchanges: pillowFortNationalAlertExchanges,
};
