import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { cowEmissionRegulationsOutcomes } from "./cowEmissionRegulationsOutcomes";
import { cowEmissionRegulationsPreferences } from "./cowEmissionRegulationsPreferences";
import { cowEmissionRegulationsExchanges } from "./exchanges";

export const cowEmissionRegulations: SituationData = {
  trigger: {
    staticKey: "cow_emission_regulations",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Cow Emission Regulations",
  description:
    "Admin orders methane-capturing backpacks for all cattle, enraging ranchers and sparking memes about 'green gas.'",
  content: {
    outcomes: cowEmissionRegulationsOutcomes,
    preferences: cowEmissionRegulationsPreferences,
  },
  exchanges: cowEmissionRegulationsExchanges,
};
