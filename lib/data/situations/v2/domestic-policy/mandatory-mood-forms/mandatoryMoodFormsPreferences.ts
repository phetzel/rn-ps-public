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
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to reassure the public that this health data tool will better allocate mental health resources and improve well-being.",
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
