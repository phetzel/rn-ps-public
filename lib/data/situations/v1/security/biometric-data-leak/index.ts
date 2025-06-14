import { SituationType, SituationData } from "~/types";
import { biometricDataLeakPreferences } from "./biometricDataLeakPreferences";
import { biometricDataLeakOutcomes } from "./biometricDataLeakOutcomes";
import { biometricDataLeakExchanges } from "./biometricDataLeakExchanges";

export const biometricDataLeak: SituationData = {
  trigger: {
    staticKey: "biometric_data_leak",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Biometric Data Leak",
  description:
    "A nationwide ID system suffers a massive biometric leak, leaving millions worried about identity theft and government negligence.",
  content: {
    preferences: biometricDataLeakPreferences,
    outcomes: biometricDataLeakOutcomes,
  },
  exchanges: biometricDataLeakExchanges,
};
