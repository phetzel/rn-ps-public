import { SituationType, SituationData } from "~/types";
import { pipelineChocolateLeakPreferences } from "./pipelineChocolateLeakPreferences";
import { pipelineChocolateLeakOutcomes } from "./pipelineChocolateLeakOutcomes";
import { pipelineChocolateLeakExchanges } from "./pipelineChocolateLeakExchanges";

export const pipelineChocolateLeak: SituationData = {
  trigger: {
    staticKey: "pipeline_chocolate_leak",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "Pipeline Chocolate Leak",
  description:
    "Ruptured pipeline releases thousands of gallons of chocolate syrup, coating wetlands and alarming locals.",
  content: {
    preferences: pipelineChocolateLeakPreferences,
    outcomes: pipelineChocolateLeakOutcomes,
  },
  exchanges: pipelineChocolateLeakExchanges,
};
