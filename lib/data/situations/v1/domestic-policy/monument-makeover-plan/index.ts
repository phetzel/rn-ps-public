import { SituationType, SituationData } from "~/types";
import { monumentMakeoverPlanPreferences } from "./monumentMakeoverPlanPreferences";
import { monumentMakeoverPlanOutcomes } from "./monumentMakeoverPlanOutcomes";
import { monumentMakeoverPlanExchanges } from "./monumentMakeoverPlanExchanges";

export const monumentMakeoverPlan: SituationData = {
  trigger: {
    staticKey: "monument_makeover_plan",
    type: SituationType.Environment,
    requirements: {}, // anytime
  },
  type: SituationType.Environment,
  title: "Monument Makeover Plan",
  description:
    "President proposes carving their own face onto Mount Rushmore, igniting heritage fury, budget fears, and legal threats.",
  content: {
    preferences: monumentMakeoverPlanPreferences,
    outcomes: monumentMakeoverPlanOutcomes,
  },
  exchanges: monumentMakeoverPlanExchanges,
};
