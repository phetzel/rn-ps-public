import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { autonomousCarsRebellionOutcomes } from "./autonomousCarsRebellionOutcomes";
import { autonomousCarsRebellionPreferences } from "./autonomousCarsRebellionPreferences";
import { autonomousCarsRebellionExchanges } from "./exchanges";

export const autonomousCarsRebellion: SituationData = {
  trigger: {
    staticKey: "autonomous_cars_rebellion",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Autonomous Cars Rebellion",
  description:
    "Self-driving cars are hacked to only play polka music at full volume while circling government buildings, causing chaos.",
  content: {
    outcomes: autonomousCarsRebellionOutcomes,
    preferences: autonomousCarsRebellionPreferences,
  },
  exchanges: autonomousCarsRebellionExchanges,
};
