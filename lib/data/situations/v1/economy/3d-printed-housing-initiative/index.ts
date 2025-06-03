import { SituationType, SituationData, PoliticalLeaning } from "~/types";
import { threeDPrintedHousingInitiativePreferences } from "./threeDPrintedHousingInitiativePreferences";
import { threeDPrintedHousingInitiativeOutcomes } from "./threeDPrintedHousingInitiativeOutcomes";
import { threeDPrintedHousingInitiativeExchanges } from "./threeDPrintedHousingInitiativeExchanges";

export const threeDPrintedHousingInitiative: SituationData = {
  trigger: {
    staticKey: "printed_housing_initiative",
    type: SituationType.Economy,
    requirements: { year: { min: 1, max: 4 } },
  },
  type: SituationType.Economy,
  title: "3D-Printed Housing Initiative",
  description:
    "White House unveils mass 3-D printing of homes to slash rents, but skeptics warn of cracks, overruns, and robot job loss.",
  content: {
    preferences: threeDPrintedHousingInitiativePreferences,
    outcomes: threeDPrintedHousingInitiativeOutcomes,
  },
  exchanges: threeDPrintedHousingInitiativeExchanges,
};
