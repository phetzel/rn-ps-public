import { SituationType, SituationData } from "~/types";
import { beePopulationPanicPreferences } from "./beePopulationPanicPreferences";
import { beePopulationPanicOutcomes } from "./beePopulationPanicOutcomes";
import { beePopulationPanicExchanges } from "./beePopulationPanicExchanges";

export const beePopulationPanic: SituationData = {
  trigger: {
    staticKey: "bee_population_panic",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "Bee Population Panic",
  description:
    "Sudden nationwide bee disappearance threatens crops and ecosystems, fueling conspiracy theories and farmer unrest.",
  content: {
    preferences: beePopulationPanicPreferences,
    outcomes: beePopulationPanicOutcomes,
  },
  exchanges: beePopulationPanicExchanges,
};
