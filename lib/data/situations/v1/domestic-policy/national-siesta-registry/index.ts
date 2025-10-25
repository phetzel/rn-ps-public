import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalSiestaRegistryOutcomes } from "./nationalSiestaRegistryOutcomes";
import { nationalSiestaRegistryPreferences } from "./nationalSiestaRegistryPreferences";
import { nationalSiestaRegistryExchanges } from "./exchanges";

export const nationalSiestaRegistry: SituationDataType = {
  trigger: {
    staticKey: "national-siesta-registry",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "National Siesta Registry",
  description: "Government rolls out a National Siesta Registry requiring households to report daily naps for public-health and 'nap-alert' readiness, sparking privacy uproar.",
  content: {
    outcomes: nationalSiestaRegistryOutcomes,
    preferences: nationalSiestaRegistryPreferences,
  },
  exchanges: nationalSiestaRegistryExchanges,
};
