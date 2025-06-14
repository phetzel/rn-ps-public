import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const stateDeptWineScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Brush off the wine purchase as a clerical error and focus on bigger diplomatic successes.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Emphasize gifting traditions and claim misunderstanding rather than malice.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Point to the ongoing audit results and stress cooperation with investigators.",
      },
      authorizedContent:
        "Receipt audit traces purchases to a single staffer who coded them incorrectly. No evidence shows resale or personal gain by leadership.",
    },
  },
};
