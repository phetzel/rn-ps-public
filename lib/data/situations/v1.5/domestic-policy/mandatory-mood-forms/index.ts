import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { mandatoryMoodFormsOutcomes } from "./mandatoryMoodFormsOutcomes";
import { mandatoryMoodFormsPreferences } from "./mandatoryMoodFormsPreferences";
import { mandatoryMoodFormsExchanges } from "./exchanges";

export const mandatoryMoodForms: SituationData = {
  trigger: {
    staticKey: "mandatory_mood_forms",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Mandatory Mood Forms",
  description:
    "Feds require daily 'mood assessments' in triplicate, triggering outcry over bureaucracy and privacy fears.",
  content: {
    outcomes: mandatoryMoodFormsOutcomes,
    preferences: mandatoryMoodFormsPreferences,
  },
  exchanges: mandatoryMoodFormsExchanges,
};
