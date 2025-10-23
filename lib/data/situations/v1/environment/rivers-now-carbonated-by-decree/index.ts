import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { riversNowCarbonatedByDecreeOutcomes } from "./riversNowCarbonatedByDecreeOutcomes";
import { riversNowCarbonatedByDecreePreferences } from "./riversNowCarbonatedByDecreePreferences";
import { riversNowCarbonatedByDecreeExchanges } from "./exchanges";

export const riversNowCarbonatedByDecree: SituationDataType = {
  trigger: {
    staticKey: "rivers-now-carbonated-by-decree",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Rivers Now Carbonated by Decree",
  description: "A federal pilot will carbonate major rivers; officials tout 'fizzy waterways' to cut emissions and enable floating startups, infuriating anglers.",
  content: {
    outcomes: riversNowCarbonatedByDecreeOutcomes,
    preferences: riversNowCarbonatedByDecreePreferences,
  },
  exchanges: riversNowCarbonatedByDecreeExchanges,
};
