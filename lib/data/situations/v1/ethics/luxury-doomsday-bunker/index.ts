import { luxuryDoomsdayBunkerPreferences } from "./luxuryDoomsdayBunkerPreferences";
import { luxuryDoomsdayBunkerOutcomes } from "./luxuryDoomsdayBunkerOutcomes";
import { luxuryDoomsdayBunkerExchanges } from "./luxuryDoomsdayBunkerExchanges";
import { SituationType, SituationData } from "~/types";

export const luxuryDoomsdayBunker: SituationData = {
  trigger: {
    staticKey: "state_luxury_bunker",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Secretary of State's Luxury Bunker",
  description:
    "Reporters uncover that diplomatic cash paid for a secret, gold-plated bunker built as a personal refuge for the Secretary of State.",
  content: {
    preferences: luxuryDoomsdayBunkerPreferences,
    outcomes: luxuryDoomsdayBunkerOutcomes,
  },
  exchanges: luxuryDoomsdayBunkerExchanges,
};
