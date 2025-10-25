import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { neighborhoodTreatyMandateOutcomes } from "./neighborhoodTreatyMandateOutcomes";
import { neighborhoodTreatyMandatePreferences } from "./neighborhoodTreatyMandatePreferences";
import { neighborhoodTreatyMandateExchanges } from "./exchanges";

export const neighborhoodTreatyMandate: SituationDataType = {
  trigger: {
    staticKey: "neighborhood-treaty-mandate",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Neighborhood Treaty Mandate",
  description: "Neighborhood Treaty plan forces households to negotiate and file mini accords with State, issuing porch passports, driveway visas, and optional goldfish envoys.",
  content: {
    outcomes: neighborhoodTreatyMandateOutcomes,
    preferences: neighborhoodTreatyMandatePreferences,
  },
  exchanges: neighborhoodTreatyMandateExchanges,
};
