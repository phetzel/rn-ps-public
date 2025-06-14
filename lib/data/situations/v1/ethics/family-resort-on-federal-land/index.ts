import { familyResortFederalLandPreferences } from "./familyResortFederalLandPreferences";
import { familyResortFederalLandOutcomes } from "./familyResortFederalLandOutcomes";
import { familyResortFederalLandExchanges } from "./familyResortFederalLandExchanges";
import { SituationType, SituationData } from "~/types";

export const familyResortFederalLand: SituationData = {
  trigger: {
    staticKey: "family_resort_fed_land",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Family Resort on Fed Land",
  description:
    "The President greenlights a private luxury resort for their family on protected parkland, sparking public outrage over favoritism.",
  content: {
    preferences: familyResortFederalLandPreferences,
    outcomes: familyResortFederalLandOutcomes,
  },
  exchanges: familyResortFederalLandExchanges,
};
