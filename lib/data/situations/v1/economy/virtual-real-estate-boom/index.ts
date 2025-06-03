import { SituationType, SituationData } from "~/types";
import { virtualRealEstateBoomPreferences } from "./virtualRealEstateBoomPreferences";
import { virtualRealEstateBoomOutcomes } from "./virtualRealEstateBoomOutcomes";
import { virtualRealEstateBoomExchanges } from "./virtualRealEstateBoomExchanges";

export const virtualRealEstateBoom: SituationData = {
  trigger: {
    staticKey: "virtual_real_estate_boom",
    type: SituationType.Economy,
    requirements: { year: { min: 1, max: 4 } }, // hype cycle mid-term
  },
  type: SituationType.Economy,
  title: "Virtual Real Estate Boom",
  description:
    "Federal incentives spark a stampede into government-endorsed metaverse land, raising bubble fears and fraud alarms.",
  content: {
    preferences: virtualRealEstateBoomPreferences,
    outcomes: virtualRealEstateBoomOutcomes,
  },
  exchanges: virtualRealEstateBoomExchanges,
};
