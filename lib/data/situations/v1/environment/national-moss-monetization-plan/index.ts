import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalMossMonetizationPlanOutcomes } from "./nationalMossMonetizationPlanOutcomes";
import { nationalMossMonetizationPlanPreferences } from "./nationalMossMonetizationPlanPreferences";
import { nationalMossMonetizationPlanExchanges } from "./exchanges";

export const nationalMossMonetizationPlan: SituationDataType = {
  trigger: {
    staticKey: "national-moss-monetization-plan",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "National Moss Monetization Plan",
  description: "Administration will register, certify, and sell patches of native moss as tradable climate credits, creating a bureaucratic boom and backyard turf wars.",
  content: {
    outcomes: nationalMossMonetizationPlanOutcomes,
    preferences: nationalMossMonetizationPlanPreferences,
  },
  exchanges: nationalMossMonetizationPlanExchanges,
};
