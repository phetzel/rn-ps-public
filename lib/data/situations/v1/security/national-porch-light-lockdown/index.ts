import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalPorchLightLockdownOutcomes } from "./nationalPorchLightLockdownOutcomes";
import { nationalPorchLightLockdownPreferences } from "./nationalPorchLightLockdownPreferences";
import { nationalPorchLightLockdownExchanges } from "./exchanges";

export const nationalPorchLightLockdown: SituationDataType = {
  trigger: {
    staticKey: "national-porch-light-lockdown",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "National Porch-Light Lockdown",
  description: "Administration reclassifies porch lights as security assets after coordinated night outages blamed on a mysterious device, instituting a mandatory bulb registry",
  content: {
    outcomes: nationalPorchLightLockdownOutcomes,
    preferences: nationalPorchLightLockdownPreferences,
  },
  exchanges: nationalPorchLightLockdownExchanges,
};
