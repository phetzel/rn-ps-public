import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { defenseArmsTheLawnGnomesOutcomes } from "./defenseArmsTheLawnGnomesOutcomes";
import { defenseArmsTheLawnGnomesPreferences } from "./defenseArmsTheLawnGnomesPreferences";
import { defenseArmsTheLawnGnomesExchanges } from "./exchanges";

export const defenseArmsTheLawnGnomes: SituationDataType = {
  trigger: {
    staticKey: "defense-arms-the-lawn-gnomes",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Defense Arms the Lawn Gnomes",
  description: "Classified budgets leak showing Defense-funded autonomous lawn gnomes with microdrones sparks congressional hearings, viral memes, and an urgent press briefing.",
  content: {
    outcomes: defenseArmsTheLawnGnomesOutcomes,
    preferences: defenseArmsTheLawnGnomesPreferences,
  },
  exchanges: defenseArmsTheLawnGnomesExchanges,
};
