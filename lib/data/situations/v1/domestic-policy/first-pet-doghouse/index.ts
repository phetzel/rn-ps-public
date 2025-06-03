import { SituationType, SituationData } from "~/types";
import { firstPetDoghousePreferences } from "./firstPetDoghousePreferences";
import { firstPetDoghouseOutcomes } from "./firstPetDoghouseOutcomes";
import { firstPetDoghouseExchanges } from "./firstPetDoghouseExchanges";

export const firstPetDoghouse: SituationData = {
  trigger: {
    staticKey: "first_pet_doghouse",
    type: SituationType.DomesticPolicy,
    requirements: {}, // can happen anytime
  },
  type: SituationType.DomesticPolicy,
  title: "First Pet in Doghouse",
  description:
    "The First Dog devours a historic presidential speech mid-broadcast, sparking national embarrassment and archival panic.",
  content: {
    preferences: firstPetDoghousePreferences,
    outcomes: firstPetDoghouseOutcomes,
  },
  exchanges: firstPetDoghouseExchanges,
};
