import { firstFamilyRealityShowPreferences } from "./firstFamilyRealityShowPreferences";
import { firstFamilyRealityShowOutcomes } from "./firstFamilyRealityShowOutcomes";
import { firstFamilyRealityShowExchanges } from "./firstFamilyRealityShowExchanges";
import { SituationType, SituationData } from "~/types";

export const firstFamilyRealityShow: SituationData = {
  trigger: {
    staticKey: "first_family_reality_show",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "First Family Reality Show",
  description:
    "A glossy reality series films inside the White House, raising ethics concerns about mixing entertainment with public service.",
  content: {
    preferences: firstFamilyRealityShowPreferences,
    outcomes: firstFamilyRealityShowOutcomes,
  },
  exchanges: firstFamilyRealityShowExchanges,
};
