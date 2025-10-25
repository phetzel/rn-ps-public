import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { staplerShieldActivationOutcomes } from "./staplerShieldActivationOutcomes";
import { staplerShieldActivationPreferences } from "./staplerShieldActivationPreferences";
import { staplerShieldActivationExchanges } from "./exchanges";

export const staplerShieldActivation: SituationDataType = {
  trigger: {
    staticKey: "stapler-shield-activation",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Stapler Shield Activation",
  description: "A surprise 'Stapler Shield' plan bolts AI staplers to rooftops and mailboxes to bind incoming threats, igniting factory lines and giving zoning boards tinnitus.",
  content: {
    outcomes: staplerShieldActivationOutcomes,
    preferences: staplerShieldActivationPreferences,
  },
  exchanges: staplerShieldActivationExchanges,
};
