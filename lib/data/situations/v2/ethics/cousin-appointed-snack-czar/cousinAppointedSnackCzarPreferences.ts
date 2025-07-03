import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cousinSnackCzarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Trusts their family and wants to challenge the idea that appointing a qualified relative is automatically wrong.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to inform the press that the appointment was vetted and cleared by ethics lawyers, focusing on the process.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Wants to deflect from the nepotism angle by focusing on the cost-saving potential of having a dedicated snack overseer.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "Worried about the message this sends and wants to deny this trivial appointment affects serious health policy.",
      },
    },
  },
};
