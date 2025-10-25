import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { camoCactusBorderPatrolOutcomes } from "./camoCactusBorderPatrolOutcomes";
import { camoCactusBorderPatrolPreferences } from "./camoCactusBorderPatrolPreferences";
import { camoCactusBorderPatrolExchanges } from "./exchanges";

export const camoCactusBorderPatrol: SituationDataType = {
  trigger: {
    staticKey: "camo-cactus-border-patrol",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Camo Cactus Border Patrol",
  description: "Defense launches 'camo cactus' program: motion-sensor succulents on private fences to detect drones and trespassers, igniting legal and botanical uproar.",
  content: {
    outcomes: camoCactusBorderPatrolOutcomes,
    preferences: camoCactusBorderPatrolPreferences,
  },
  exchanges: camoCactusBorderPatrolExchanges,
};
