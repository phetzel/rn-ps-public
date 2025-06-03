import { SituationType, SituationData } from "~/types";
import { inflationControlMisfirePreferences } from "./inflationControlMisfirePreferences";
import { inflationControlMisfireOutcomes } from "./inflationControlMisfireOutcomes";
import { inflationControlMisfireExchanges } from "./inflationControlMisfireExchanges";

export const inflationControlMisfire: SituationData = {
  trigger: {
    staticKey: "inflation_control_misfire",
    type: SituationType.Economy,
    requirements: {}, // any inflation chatter period
  },
  type: SituationType.Economy,
  title: "Inflation Control Misfire",
  description:
    "Administration fights inflation by printing dollar bills with smiling emojis, spooking traders and delighting tourists.",
  content: {
    preferences: inflationControlMisfirePreferences,
    outcomes: inflationControlMisfireOutcomes,
  },
  exchanges: inflationControlMisfireExchanges,
};
