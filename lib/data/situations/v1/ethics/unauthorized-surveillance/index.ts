import { unauthorizedSurveillancePreferences } from "./unauthorizedSurveillancePreferences";
import { unauthorizedSurveillanceOutcomes } from "./unauthorizedSurveillanceOutcomes";
import { unauthorizedSurveillanceExchanges } from "./unauthorizedSurveillanceExchanges";
import { SituationType, SituationData } from "~/types";

export const unauthorizedSurveillance: SituationData = {
  trigger: {
    staticKey: "unauthorized_surveillance",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Unauthorized Surveillance",
  description:
    "Leaked warrants reveal the homeland department spied on political foes without approval, spurring fears of secret domestic snooping.",
  content: {
    preferences: unauthorizedSurveillancePreferences,
    outcomes: unauthorizedSurveillanceOutcomes,
  },
  exchanges: unauthorizedSurveillanceExchanges,
};
