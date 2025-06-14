import { privateJetVacationsPreferences } from "./privateJetVacationsPreferences";
import { privateJetVacationsOutcomes } from "./privateJetVacationsOutcomes";
import { privateJetVacationsExchanges } from "./privateJetVacationsExchanges";
import { SituationType, SituationData } from "~/types";

export const privateJetVacations: SituationData = {
  trigger: {
    staticKey: "private_jet_vacations",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Private Jet Vacations",
  description:
    "Reports reveal HHS jets were used for family getaways abroad, raising eyebrows over taxpayer-funded luxury travel.",
  content: {
    preferences: privateJetVacationsPreferences,
    outcomes: privateJetVacationsOutcomes,
  },
  exchanges: privateJetVacationsExchanges,
};
