import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const mandatoryMoodFormsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Genuinely believes this is a revolutionary way to measure national well-being and wants to challenge 'old' thinking.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to frame this as vital health data tool, like census, to better allocate mental health resources.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Sees immense privacy and 4th Amendment issues and wants to deflect all questions about legality and data security.",
      },
    },
  },
};
