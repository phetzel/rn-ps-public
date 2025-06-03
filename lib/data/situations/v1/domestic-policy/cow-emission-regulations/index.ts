import { SituationType, SituationData } from "~/types";
import { cowEmissionRegulationsPreferences } from "./cowEmissionRegulationsPreferences";
import { cowEmissionRegulationsOutcomes } from "./cowEmissionRegulationsOutcomes";
import { cowEmissionRegulationsExchanges } from "./cowEmissionRegulationsExchanges";

export const cowEmissionRegulations: SituationData = {
  trigger: {
    staticKey: "cow_emission_regulations",
    type: SituationType.Environment,
    requirements: {}, // can occur anytime
  },
  type: SituationType.Environment,
  title: "Cow Emission Regulations",
  description:
    "Administration orders methane-capturing backpacks for all cattle, enraging ranchers and sparking memes about ‘green cows.’",
  content: {
    preferences: cowEmissionRegulationsPreferences,
    outcomes: cowEmissionRegulationsOutcomes,
  },
  exchanges: cowEmissionRegulationsExchanges,
};
