import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cousinSnackCzarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "The President trusts their family and wants to challenge the idea that appointing a qualified relative is automatically wrong or corrupt.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Attorney General wants to inform the press that the appointment was vetted and cleared by ethics lawyers, focusing on the process.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Treasury wants to deflect from the nepotism angle by focusing on the cost-saving potential of having a dedicated snack overseer.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "HHS is worried about the message this sends and wants to deny that this trivial appointment has any bearing on serious health policy.",
      },
    },
  },
};
