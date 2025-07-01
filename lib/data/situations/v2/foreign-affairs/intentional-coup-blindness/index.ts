import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { intentionalCoupBlindnessOutcomes } from "./intentionalCoupBlindnessOutcomes";
import { intentionalCoupBlindnessPreferences } from "./intentionalCoupBlindnessPreferences";
import { intentionalCoupBlindnessExchanges } from "./exchanges";

export const intentionalCoupBlindness: SituationData = {
  trigger: {
    staticKey: "intentional_coup_blindness",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Intentional Coup Blindness",
  description:
    "Admin appears to ignore a coup in Oilistan to keep cheap gas flowing, angering rights groups and international allies.",
  content: {
    outcomes: intentionalCoupBlindnessOutcomes,
    preferences: intentionalCoupBlindnessPreferences,
  },
  exchanges: intentionalCoupBlindnessExchanges,
};
