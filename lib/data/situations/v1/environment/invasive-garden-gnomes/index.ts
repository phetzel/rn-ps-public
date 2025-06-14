import { SituationType, SituationData } from "~/types";
import { invasiveGardenGnomesPreferences } from "./invasiveGardenGnomesPreferences";
import { invasiveGardenGnomesOutcomes } from "./invasiveGardenGnomesOutcomes";
import { invasiveGardenGnomesExchanges } from "./invasiveGardenGnomesExchanges";

export const invasiveGardenGnomes: SituationData = {
  trigger: {
    staticKey: "invasive_garden_gnomes",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "Invasive Garden Gnomes",
  description:
    "A nationwide prank dumps thousands of plastic gnomes into protected habitats, alarming conservationists and puzzling tourists.",
  content: {
    preferences: invasiveGardenGnomesPreferences,
    outcomes: invasiveGardenGnomesOutcomes,
  },
  exchanges: invasiveGardenGnomesExchanges,
};
