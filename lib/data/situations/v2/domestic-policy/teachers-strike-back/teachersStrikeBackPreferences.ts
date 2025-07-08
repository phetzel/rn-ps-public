import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const teachersStrikeBackPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale:
      "Realizes the karaoke rule was a complete disaster and wants to admit the error while pivoting to student wellness.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to reassure parents about student mental health support and frame the crisis as an opportunity for wellness reform.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "Denies this is a security threat and insists the department's resources shouldn't be wasted on 'educational tantrums.'",
      },
    },
  },
};
