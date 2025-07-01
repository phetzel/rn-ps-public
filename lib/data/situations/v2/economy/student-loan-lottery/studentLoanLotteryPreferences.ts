import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const studentLoanLotteryPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "The President believes this is a bold, outside-the-box solution and wants to challenge critics who are offering no alternatives.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Treasury is concerned about the unpredictable economic impact and wants to reassure the public that it's a small, controlled pilot program.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Attorney General is focused on the legal justification for the program and wants to inform the press of its solid legal footing.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "HHS wants to deflect from the 'lottery' aspect and frame this as a mental health initiative to relieve crushing debt-related stress.",
      },
    },
  },
};
