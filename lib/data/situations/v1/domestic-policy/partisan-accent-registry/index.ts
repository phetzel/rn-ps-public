import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { partisanAccentRegistryOutcomes } from "./partisanAccentRegistryOutcomes";
import { partisanAccentRegistryPreferences } from "./partisanAccentRegistryPreferences";
import { partisanAccentRegistryExchanges } from "./exchanges";

export const partisanAccentRegistry: SituationDataType = {
  trigger: {
    staticKey: "partisan-accent-registry",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Partisan Accent Registry",
  description: "Partisan Accent Registry assigns 'official' party accents to citizens to 'reduce friction', sparking legal suits and bipartisan bafflement.",
  content: {
    outcomes: partisanAccentRegistryOutcomes,
    preferences: partisanAccentRegistryPreferences,
  },
  exchanges: partisanAccentRegistryExchanges,
};
