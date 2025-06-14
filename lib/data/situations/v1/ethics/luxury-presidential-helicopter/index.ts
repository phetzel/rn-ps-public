import { luxuryPresidentialHelicopterPreferences } from "./luxuryPresidentialHelicopterPreferences";
import { luxuryPresidentialHelicopterOutcomes } from "./luxuryPresidentialHelicopterOutcomes";
import { luxuryPresidentialHelicopterExchanges } from "./luxuryPresidentialHelicopterExchanges";
import { SituationType, SituationData } from "~/types";

export const luxuryPresidentialHelicopter: SituationData = {
  trigger: {
    staticKey: "luxury_presidential_helicopter",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Luxury Presidential Helicopter",
  description:
    "The administration orders a fleet of gold-accented personal helicopters for presidential travel, stirring outrage over spending priorities.",
  content: {
    preferences: luxuryPresidentialHelicopterPreferences,
    outcomes: luxuryPresidentialHelicopterOutcomes,
  },
  exchanges: luxuryPresidentialHelicopterExchanges,
};
