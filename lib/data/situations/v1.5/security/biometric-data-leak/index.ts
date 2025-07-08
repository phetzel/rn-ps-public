import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { biometricDataLeakOutcomes } from "./biometricDataLeakOutcomes";
import { biometricDataLeakPreferences } from "./biometricDataLeakPreferences";
import { biometricDataLeakExchanges } from "./exchanges";

export const biometricDataLeak: SituationData = {
  trigger: {
    staticKey: "biometric_data_leak",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Biometric Data Leak",
  description:
    "A nationwide ID system suffers a massive data leak. The culprit? An intern who used 'password123' as a master key.",
  content: {
    outcomes: biometricDataLeakOutcomes,
    preferences: biometricDataLeakPreferences,
  },
  exchanges: biometricDataLeakExchanges,
};
