import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { mandatoryBackyardGlacierPlanOutcomes } from "./mandatoryBackyardGlacierPlanOutcomes";
import { mandatoryBackyardGlacierPlanPreferences } from "./mandatoryBackyardGlacierPlanPreferences";
import { mandatoryBackyardGlacierPlanExchanges } from "./exchanges";

export const mandatoryBackyardGlacierPlan: SituationDataType = {
  trigger: {
    staticKey: "mandatory-backyard-glacier-plan",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Mandatory Backyard Glacier Plan",
  description: "Administration rolls out the Mandatory Backyard Glacier Plan forcing homeowners to host micro‑glaciers to curb heat, sparking fights over cost and liability.",
  content: {
    outcomes: mandatoryBackyardGlacierPlanOutcomes,
    preferences: mandatoryBackyardGlacierPlanPreferences,
  },
  exchanges: mandatoryBackyardGlacierPlanExchanges,
};
