import { SituationType, SituationData } from "~/types";
import { translatorMixUpPreferences } from "./translatorMixUpPreferences";
import { translatorMixUpOutcomes } from "./translatorMixUpOutcomes";
import { translatorMixUpExchanges } from "./translatorMixUpExchanges";

export const translatorMixUp: SituationData = {
  trigger: {
    staticKey: "translator_mix_up",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Translator Mix-up",
  description:
    "During a state dinner, a tired translator misspeaks, implying the President offered Alaska to visiting delegates. Confusion sparks brief diplomatic panic.",
  content: {
    preferences: translatorMixUpPreferences,
    outcomes: translatorMixUpOutcomes,
  },
  exchanges: translatorMixUpExchanges,
};
