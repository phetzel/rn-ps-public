import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { mandatoryInvisibleHelmetsOutcomes } from "./mandatoryInvisibleHelmetsOutcomes";
import { mandatoryInvisibleHelmetsPreferences } from "./mandatoryInvisibleHelmetsPreferences";
import { mandatoryInvisibleHelmetsExchanges } from "./exchanges";

export const mandatoryInvisibleHelmets: SituationDataType = {
  trigger: {
    staticKey: "mandatory-invisible-helmets",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Mandatory Invisible Helmets",
  description: "Homeland mandates government-issued invisible helmets for citizens, citing security risks and sparking shortages, protests, and baffled tech CEOs.",
  content: {
    outcomes: mandatoryInvisibleHelmetsOutcomes,
    preferences: mandatoryInvisibleHelmetsPreferences,
  },
  exchanges: mandatoryInvisibleHelmetsExchanges,
};
