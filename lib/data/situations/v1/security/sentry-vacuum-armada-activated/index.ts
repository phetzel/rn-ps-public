import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { sentryVacuumArmadaActivatedOutcomes } from "./sentryVacuumArmadaActivatedOutcomes";
import { sentryVacuumArmadaActivatedPreferences } from "./sentryVacuumArmadaActivatedPreferences";
import { sentryVacuumArmadaActivatedExchanges } from "./exchanges";

export const sentryVacuumArmadaActivated: SituationDataType = {
  trigger: {
    staticKey: "sentry-vacuum-armada-activated",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Sentry Vacuum Armada Activated",
  description: "Defense and Homeland unveil a plan to network millions of household sentry-vacuums into a national perimeter, prompting legal, tech, and rural backlash.",
  content: {
    outcomes: sentryVacuumArmadaActivatedOutcomes,
    preferences: sentryVacuumArmadaActivatedPreferences,
  },
  exchanges: sentryVacuumArmadaActivatedExchanges,
};
