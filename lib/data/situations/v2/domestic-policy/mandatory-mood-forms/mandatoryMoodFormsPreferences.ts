import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const mandatoryMoodFormsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "The President genuinely believes this is a revolutionary way to measure national well-being and wants to challenge the 'old' way of thinking.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "HHS wants to frame this as a vital public health data-gathering tool, similar to the census, to better allocate mental health resources.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The Attorney General sees immense privacy and 4th Amendment issues and wants to deflect all questions about legality and data security.",
      },
    },
  },
};
