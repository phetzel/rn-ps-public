import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const giantFansHurricanesPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Believes this is a bold, visionary idea and wants to challenge 'small-minded' critics who lack imagination.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to reassure coastal residents that the government is exploring all possible solutions to protect them.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Knows the cost is astronomical and wants to deflect by framing this as 'long-term research', not active project.",
      },
    },
  },
};
