import { SituationType, SituationData } from "~/types";
import { fashionDiplomacyFlubPreferences } from "./fashionDiplomacyFlubPreferences";
import { fashionDiplomacyFlubOutcomes } from "./fashionDiplomacyFlubOutcomes";
import { fashionDiplomacyFlubExchanges } from "./fashionDiplomacyFlubExchanges";

export const fashionDiplomacyFlub: SituationData = {
  trigger: {
    staticKey: "fashion_diplomacy_flub",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Fashion Diplomacy Flub",
  description:
    "During a cultural ceremony abroad, the President unknowingly wears the host nation's ceremonial robes backward, sparking whispers and laughs.",
  content: {
    preferences: fashionDiplomacyFlubPreferences,
    outcomes: fashionDiplomacyFlubOutcomes,
  },
  exchanges: fashionDiplomacyFlubExchanges,
};
