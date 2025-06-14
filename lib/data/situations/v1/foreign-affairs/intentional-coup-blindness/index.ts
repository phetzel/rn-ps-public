import { SituationType, SituationData } from "~/types";
import { intentionalCoupBlindnessPreferences } from "./intentionalCoupBlindnessPreferences";
import { intentionalCoupBlindnessOutcomes } from "./intentionalCoupBlindnessOutcomes";
import { intentionalCoupBlindnessExchanges } from "./intentionalCoupBlindnessExchanges";

export const intentionalCoupBlindness: SituationData = {
  trigger: {
    staticKey: "intentional_coup_blindness",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Intentional Coup Blindness",
  description:
    "The administration appears to ignore Oilistan's sudden coup to keep cheap oil flowing, angering rights groups and allies.",
  content: {
    preferences: intentionalCoupBlindnessPreferences,
    outcomes: intentionalCoupBlindnessOutcomes,
  },
  exchanges: intentionalCoupBlindnessExchanges,
};
