import { SituationType, SituationData } from "~/types";
import { urbanWildTurkeyInvasionPreferences } from "./urbanWildTurkeyInvasionPreferences";
import { urbanWildTurkeyInvasionOutcomes } from "./urbanWildTurkeyInvasionOutcomes";
import { urbanWildTurkeyInvasionExchanges } from "./urbanWildTurkeyInvasionExchanges";

export const urbanWildTurkeyInvasion: SituationData = {
  trigger: {
    staticKey: "urban_wild_turkey_invasion",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "Urban Wild Turkey Invasion",
  description:
    "Habitat loss drives aggressive turkeys into city streets, harassing pedestrians and wreaking traffic chaos.",
  content: {
    preferences: urbanWildTurkeyInvasionPreferences,
    outcomes: urbanWildTurkeyInvasionOutcomes,
  },
  exchanges: urbanWildTurkeyInvasionExchanges,
};
