import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { cloudsNowPropertyOfStateOutcomes } from "./cloudsNowPropertyOfStateOutcomes";
import { cloudsNowPropertyOfStatePreferences } from "./cloudsNowPropertyOfStatePreferences";
import { cloudsNowPropertyOfStateExchanges } from "./exchanges";

export const cloudsNowPropertyOfState: SituationDataType = {
  trigger: {
    staticKey: "clouds-now-property-of-state",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Clouds Now Property of State",
  description: "Administration declares all clouds federal property; households must register backyard clouds and buy rain permits, sparking lawsuits and protests.",
  content: {
    outcomes: cloudsNowPropertyOfStateOutcomes,
    preferences: cloudsNowPropertyOfStatePreferences,
  },
  exchanges: cloudsNowPropertyOfStateExchanges,
};
