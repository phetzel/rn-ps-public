import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { invasiveGardenGnomesOutcomes } from "./invasiveGardenGnomesOutcomes";
import { invasiveGardenGnomesPreferences } from "./invasiveGardenGnomesPreferences";
import { invasiveGardenGnomesExchanges } from "./exchanges";

export const invasiveGardenGnomes: SituationData = {
  trigger: {
    staticKey: "invasive_garden_gnomes",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Invasive Garden Gnomes",
  description:
    "A prankster dumps thousands of garden gnomes in national parks, alarming conservationists and delighting tourists.",
  content: {
    outcomes: invasiveGardenGnomesOutcomes,
    preferences: invasiveGardenGnomesPreferences,
  },
  exchanges: invasiveGardenGnomesExchanges,
};
