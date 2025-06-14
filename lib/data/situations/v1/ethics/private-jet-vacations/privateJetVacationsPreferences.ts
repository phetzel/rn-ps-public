import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const privateJetVacationsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Pivot to economic successes while stating travel policies are being reviewed for compliance.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Own up to using departmental jets for family trips and promise repayment along with stricter approval steps.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Highlight new oversight and note that travel budgets will be monitored closely to avoid future misuse.",
      },
      authorizedContent:
        "Travel budget reviews show personal segments flagged as non-official. Reimbursements are being processed to balance the books.",
    },
  },
};
