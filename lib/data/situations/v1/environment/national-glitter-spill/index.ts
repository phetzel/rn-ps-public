import { SituationType, SituationData } from "~/types";
import { nationalGlitterSpillPreferences } from "./nationalGlitterSpillPreferences";
import { nationalGlitterSpillOutcomes } from "./nationalGlitterSpillOutcomes";
import { nationalGlitterSpillExchanges } from "./nationalGlitterSpillExchanges";

export const nationalGlitterSpill: SituationData = {
  trigger: {
    staticKey: "national_glitter_spill_disaster",
    type: SituationType.Environment,
    requirements: {
      month: { min: 3, max: 9 }, // More likely during warmer months / festival season
    },
  },
  type: SituationType.Environment,
  title: "National Glitter Spill",
  description:
    "Accident releases tons of glitter into major waterways, dramatically affecting wildlife and water quality.",
  content: {
    preferences: nationalGlitterSpillPreferences,
    outcomes: nationalGlitterSpillOutcomes,
  },
  exchanges: nationalGlitterSpillExchanges,
};
