import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { firstPetDoghouseOutcomes } from "./firstPetDoghouseOutcomes";
import { firstPetDoghousePreferences } from "./firstPetDoghousePreferences";
import { firstPetDoghouseExchanges } from "./exchanges";

export const firstPetDoghouse: SituationData = {
  trigger: {
    staticKey: "first_pet_in_doghouse",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "First Pet in Doghouse",
  description:
    "The First Dog devours a historic treaty on live TV, sparking an international incident and archival panic.",
  content: {
    outcomes: firstPetDoghouseOutcomes,
    preferences: firstPetDoghousePreferences,
  },
  exchanges: firstPetDoghouseExchanges,
};
