import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalSidewalkCheerMandateOutcomes } from "./nationalSidewalkCheerMandateOutcomes";
import { nationalSidewalkCheerMandatePreferences } from "./nationalSidewalkCheerMandatePreferences";
import { nationalSidewalkCheerMandateExchanges } from "./exchanges";

export const nationalSidewalkCheerMandate: SituationDataType = {
  trigger: {
    staticKey: "national-sidewalk-cheer-mandate",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "National Sidewalk Cheer Mandate",
  description: "Administration proposes requiring sidewalk applause for visiting officials, turning city streets into licensed morale zones with fines and PR headaches.",
  content: {
    outcomes: nationalSidewalkCheerMandateOutcomes,
    preferences: nationalSidewalkCheerMandatePreferences,
  },
  exchanges: nationalSidewalkCheerMandateExchanges,
};
