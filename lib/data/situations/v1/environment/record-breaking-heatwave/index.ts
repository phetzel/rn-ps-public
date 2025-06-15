import { SituationType, SituationData } from "~/types";
import { recordBreakingHeatwavePreferences } from "./recordBreakingHeatwavePreferences";
import { recordBreakingHeatwaveOutcomes } from "./recordBreakingHeatwaveOutcomes";
import { recordBreakingHeatwaveExchanges } from "./recordBreakingHeatwaveExchanges";

export const recordBreakingHeatwave: SituationData = {
  trigger: {
    staticKey: "record_breaking_heatwave",
    type: SituationType.Environment,
    requirements: { month: { min: 6, max: 9 } },
  },
  type: SituationType.Environment,
  title: "Record-Breaking Heatwave",
  description:
    "Weeks-long heatwave sparks health crises and radical cloud-seeding proposals across the Republic of Reallyfarawaystan.",
  content: {
    preferences: recordBreakingHeatwavePreferences,
    outcomes: recordBreakingHeatwaveOutcomes,
  },
  exchanges: recordBreakingHeatwaveExchanges,
};
