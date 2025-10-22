import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { sunlightLicensingSchemeOutcomes } from "./sunlightLicensingSchemeOutcomes";
import { sunlightLicensingSchemePreferences } from "./sunlightLicensingSchemePreferences";
import { sunlightLicensingSchemeExchanges } from "./exchanges";

export const sunlightLicensingScheme: SituationDataType = {
  trigger: {
    staticKey: "sunlight-licensing-scheme",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Sunlight Licensing Scheme",
  description: "Administration proposes selling 'sunlight licenses' that grant exclusive rays, sparking farmer fury, startup bidding wars, and lawsuits over who owns dawn.",
  content: {
    outcomes: sunlightLicensingSchemeOutcomes,
    preferences: sunlightLicensingSchemePreferences,
  },
  exchanges: sunlightLicensingSchemeExchanges,
};
