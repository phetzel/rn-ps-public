import { luxuryPetSpaPreferences } from "./luxuryPetSpaPreferences";
import { luxuryPetSpaOutcomes } from "./luxuryPetSpaOutcomes";
import { luxuryPetSpaExchanges } from "./luxuryPetSpaExchanges";
import { SituationType, SituationData } from "~/types";

export const luxuryPetSpaScandal: SituationData = {
  trigger: {
    staticKey: "luxury_pet_spa",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Luxury Pet Spa Scandal",
  description:
    "A leaked invoice shows taxpayer money funding a pampered pet spa for the First Pets, stirring outrage over priorities.",
  content: {
    preferences: luxuryPetSpaPreferences,
    outcomes: luxuryPetSpaOutcomes,
  },
  exchanges: luxuryPetSpaExchanges,
};
