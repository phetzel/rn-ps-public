import { SituationType, SituationData } from "~/types";
import { mysteryGreenRainPreferences } from "./mysteryGreenRainPreferences";
import { mysteryGreenRainOutcomes } from "./mysteryGreenRainOutcomes";
import { mysteryGreenRainExchanges } from "./mysteryGreenRainExchanges";

export const mysteryGreenRain: SituationData = {
  trigger: {
    staticKey: "mystery_green_rain",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "Mystery Green Rain",
  description:
    "Unexplained green rainfall raises fears of toxic exposure while rumors swirl about foreign pollution schemes.",
  content: {
    preferences: mysteryGreenRainPreferences,
    outcomes: mysteryGreenRainOutcomes,
  },
  exchanges: mysteryGreenRainExchanges,
};
