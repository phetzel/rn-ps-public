import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { diplomaticAlpacaEthicsProbeOutcomes } from "./diplomaticAlpacaEthicsProbeOutcomes";
import { diplomaticAlpacaEthicsProbePreferences } from "./diplomaticAlpacaEthicsProbePreferences";
import { diplomaticAlpacaEthicsProbeExchanges } from "./exchanges";

export const diplomaticAlpacaEthicsProbe: SituationDataType = {
  trigger: {
    staticKey: "diplomatic-alpaca-ethics-probe",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Diplomatic Alpaca Ethics Probe",
  description: "A State diplomat allegedly kept a 'confessional alpaca' on embassy grounds and cited its spit-soaked nods to justify ethics waivers, triggering a formal probe.",
  content: {
    outcomes: diplomaticAlpacaEthicsProbeOutcomes,
    preferences: diplomaticAlpacaEthicsProbePreferences,
  },
  exchanges: diplomaticAlpacaEthicsProbeExchanges,
};
