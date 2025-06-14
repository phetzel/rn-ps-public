import { SituationType, SituationData } from "~/types";
import { virtualRealityEspionagePreferences } from "./virtualRealityEspionagePreferences";
import { virtualRealityEspionageOutcomes } from "./virtualRealityEspionageOutcomes";
import { virtualRealityEspionageExchanges } from "./virtualRealityEspionageExchanges";

export const virtualRealityEspionage: SituationData = {
  trigger: {
    staticKey: "virtual_reality_espionage",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Virtual Reality Espionage",
  description:
    "Reports emerge that a popular VR platform is spying on players, capturing secrets from headsets and controllers.",
  content: {
    preferences: virtualRealityEspionagePreferences,
    outcomes: virtualRealityEspionageOutcomes,
  },
  exchanges: virtualRealityEspionageExchanges,
};
