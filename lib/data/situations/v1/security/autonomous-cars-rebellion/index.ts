import { SituationType, SituationData } from "~/types";
import { autonomousCarsRebellionPreferences } from "./autonomousCarsRebellionPreferences";
import { autonomousCarsRebellionOutcomes } from "./autonomousCarsRebellionOutcomes";
import { autonomousCarsRebellionExchanges } from "./autonomousCarsRebellionExchanges";

export const autonomousCarsRebellion: SituationData = {
  trigger: {
    staticKey: "autonomous_cars_rebellion",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Autonomous Cars Rebellion",
  description:
    "Self-driving cars across the country disobey commands after a cyberattack, causing gridlock and fears of a mechanical uprising.",
  content: {
    preferences: autonomousCarsRebellionPreferences,
    outcomes: autonomousCarsRebellionOutcomes,
  },
  exchanges: autonomousCarsRebellionExchanges,
};
