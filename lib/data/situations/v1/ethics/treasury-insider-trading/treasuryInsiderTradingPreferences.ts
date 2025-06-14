import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const treasuryInsiderTradingPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Point to ongoing reviews while insisting the administration focuses on jobs and growth, not stock speculations.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Avoid direct admissions and claim trades were handled by blind trusts without personal involvement.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain the subpoena logs and outline the investigation timeline to reassure the public of due process.",
      },
      authorizedContent:
        "Subpoena logs show coordination with the SEC. Traders were flagged for patterns matching policy meetings, prompting the probe.",
    },
  },
};
