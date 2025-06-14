import { SituationType, SituationData } from "~/types";
import { excessiveTreePlantingInitiativePreferences } from "./excessiveTreePlantingInitiativePreferences";
import { excessiveTreePlantingInitiativeOutcomes } from "./excessiveTreePlantingInitiativeOutcomes";
import { excessiveTreePlantingInitiativeExchanges } from "./excessiveTreePlantingInitiativeExchanges";

export const excessiveTreePlantingInitiative: SituationData = {
  trigger: {
    staticKey: "excessive_tree_planting_initiative",
    type: SituationType.Environment,
    requirements: { month: { min: 3, max: 10 } },
  },
  type: SituationType.Environment,
  title: "Excessive Tree-Planting Initiative",
  description:
    "Over-dense urban forests create unexpected wildlife and allergy issues, turning a greening project into itchy chaos.",
  content: {
    preferences: excessiveTreePlantingInitiativePreferences,
    outcomes: excessiveTreePlantingInitiativeOutcomes,
  },
  exchanges: excessiveTreePlantingInitiativeExchanges,
};
