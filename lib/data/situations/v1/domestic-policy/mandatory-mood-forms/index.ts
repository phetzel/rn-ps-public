import { SituationType, SituationData } from "~/types";
import { mandatoryMoodFormsPreferences } from "./mandatoryMoodFormsPreferences";
import { mandatoryMoodFormsOutcomes } from "./mandatoryMoodFormsOutcomes";
import { mandatoryMoodFormsExchanges } from "./mandatoryMoodFormsExchanges";

export const mandatoryMoodForms: SituationData = {
  trigger: {
    staticKey: "mandatory_mood_forms",
    type: SituationType.DomesticPolicy,
    requirements: {
      //   president: {
      //     minApproval: 50,
      //   },
      //   month: { min: 4, max: 10 },
    },
  },
  type: SituationType.DomesticPolicy,
  title: "Mandatory Mood Forms Implemented",
  description:
    "New federal guidelines require daily 'mood assessments' in triplicate, triggering public outcry over intense bureaucracy and serious privacy fears.",
  content: {
    preferences: mandatoryMoodFormsPreferences,
    outcomes: mandatoryMoodFormsOutcomes,
  },
  exchanges: mandatoryMoodFormsExchanges,
};
