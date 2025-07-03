import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const studentLoanLotteryPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Believes this is a bold, outside-the-box solution and wants to challenge critics who are offering no alternatives.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Concerned about unpredictable economic impact and wants to reassure the public it's a small, controlled pilot program.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Focused on legal justification for the program and wants to inform the press of its solid legal footing.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Wants to deflect from 'lottery' aspect and frame this as mental health initiative to relieve debt stress.",
      },
    },
  },
};
