import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { giantFansHurricanesOutcomes } from "./giantFansHurricanesOutcomes";
import { giantFansHurricanesPreferences } from "./giantFansHurricanesPreferences";
import { giantFansHurricanesExchanges } from "./exchanges";

export const giantFansHurricanes: SituationData = {
  trigger: {
    staticKey: "giant_fans_vs_hurricanes",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Giant Fans vs. Hurricanes",
  description:
    "President vows to line coasts with giant fans to blow away hurricanes, sparking doubt and ecological concerns.",
  content: {
    outcomes: giantFansHurricanesOutcomes,
    preferences: giantFansHurricanesPreferences,
  },
  exchanges: giantFansHurricanesExchanges,
};
