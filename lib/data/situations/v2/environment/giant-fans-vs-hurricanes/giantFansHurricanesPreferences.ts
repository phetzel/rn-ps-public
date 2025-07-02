import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const giantFansHurricanesPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "The President believes this is a bold, visionary idea and wants to challenge the 'small-minded' critics who lack imagination.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Homeland Security wants to reassure coastal residents that the government is exploring all possible solutions to protect them from storms.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The Treasury Secretary knows the cost is astronomical and wants to deflect by framing this as a 'long-term research goal', not an active project.",
      },
    },
  },
};
