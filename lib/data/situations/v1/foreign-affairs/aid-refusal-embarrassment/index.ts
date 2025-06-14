import { SituationType, SituationData } from "~/types";
import { aidRefusalEmbarrassmentPreferences } from "./aidRefusalEmbarrassmentPreferences";
import { aidRefusalEmbarrassmentOutcomes } from "./aidRefusalEmbarrassmentOutcomes";
import { aidRefusalEmbarrassmentExchanges } from "./aidRefusalEmbarrassmentExchanges";

export const aidRefusalEmbarrassment: SituationData = {
  trigger: {
    staticKey: "aid_refusal_embarrassment",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Aid Refusal Embarrassment",
  description:
    "The President rejects flood aid for Dramastan after its leader mocked a favorite TV show. International backlash mounts.",
  content: {
    preferences: aidRefusalEmbarrassmentPreferences,
    outcomes: aidRefusalEmbarrassmentOutcomes,
  },
  exchanges: aidRefusalEmbarrassmentExchanges,
};
