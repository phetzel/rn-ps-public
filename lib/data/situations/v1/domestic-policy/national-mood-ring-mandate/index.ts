import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalMoodRingMandateOutcomes } from "./nationalMoodRingMandateOutcomes";
import { nationalMoodRingMandatePreferences } from "./nationalMoodRingMandatePreferences";
import { nationalMoodRingMandateExchanges } from "./exchanges";

export const nationalMoodRingMandate: SituationDataType = {
  trigger: {
    staticKey: "national-mood-ring-mandate",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "National Mood Ring Mandate",
  description: "Government mandates state mood rings; colors gate benefits, queue priority, and tax perks, fueling DIY recoloring hacks, privacy suits, and a bootleg market.",
  content: {
    outcomes: nationalMoodRingMandateOutcomes,
    preferences: nationalMoodRingMandatePreferences,
  },
  exchanges: nationalMoodRingMandateExchanges,
};
