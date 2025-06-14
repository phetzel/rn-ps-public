import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const vanityHistoryBookPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Shift attention to the administration's literacy programs while dodging the propaganda angle.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Minimize talk about manipulation, say the printing was routine and disclaim authorship.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain the procurement review and release the editor emails confirming undue pressure.",
      },
      authorizedContent:
        "Emails from the archives reveal a push from a senior aide to use public funds for positive spin. Justice is reviewing procurement for misuse.",
    },
  },
};
