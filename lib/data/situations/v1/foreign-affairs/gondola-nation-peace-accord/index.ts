import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { gondolaNationPeaceAccordOutcomes } from "./gondolaNationPeaceAccordOutcomes";
import { gondolaNationPeaceAccordPreferences } from "./gondolaNationPeaceAccordPreferences";
import { gondolaNationPeaceAccordExchanges } from "./exchanges";

export const gondolaNationPeaceAccord: SituationDataType = {
  trigger: {
    staticKey: "gondola-nation-peace-accord",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Gondola Nation Peace Accord",
  description: "An artist's gondola declares itself the Gondola Nation; State weighs recognition as Defense deploys drones and residents clamor for canal passports.",
  content: {
    outcomes: gondolaNationPeaceAccordOutcomes,
    preferences: gondolaNationPeaceAccordPreferences,
  },
  exchanges: gondolaNationPeaceAccordExchanges,
};
