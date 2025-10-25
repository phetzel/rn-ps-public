import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { sentientTrafficConesAlertOutcomes } from "./sentientTrafficConesAlertOutcomes";
import { sentientTrafficConesAlertPreferences } from "./sentientTrafficConesAlertPreferences";
import { sentientTrafficConesAlertExchanges } from "./exchanges";

export const sentientTrafficConesAlert: SituationDataType = {
  trigger: {
    staticKey: "sentient-traffic-cones-alert",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Sentient Traffic Cones Alert",
  description: "Cities report traffic cones abruptly coordinating roadblocks and broadcasting demands; officials must explain safety plans, legal authority and response rules.",
  content: {
    outcomes: sentientTrafficConesAlertOutcomes,
    preferences: sentientTrafficConesAlertPreferences,
  },
  exchanges: sentientTrafficConesAlertExchanges,
};
