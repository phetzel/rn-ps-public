import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { nationalGlitterSpillOutcomes } from "./nationalGlitterSpillOutcomes";
import { nationalGlitterSpillPreferences } from "./nationalGlitterSpillPreferences";
import { nationalGlitterSpillExchanges } from "./exchanges";

export const nationalGlitterSpill: SituationData = {
  trigger: {
    staticKey: "national_glitter_spill",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "National Glitter Spill",
  description:
    "A factory accident releases tons of biodegradable glitter into a river, creating a sparkly ecological headache.",
  content: {
    outcomes: nationalGlitterSpillOutcomes,
    preferences: nationalGlitterSpillPreferences,
  },
  exchanges: nationalGlitterSpillExchanges,
};
