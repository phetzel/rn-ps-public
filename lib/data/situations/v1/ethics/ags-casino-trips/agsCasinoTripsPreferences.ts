import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const agsCasinoTripsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Downplay the trips as personal time repaid in full while emphasizing ongoing justice reforms.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Acknowledge the flights, promise repayment, and highlight new travel policy reviews.",
      },
      authorizedContent:
        "Flight logs show weekend trips labeled 'networking.' The AG has agreed to reimburse travel costs and cooperate with audits.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect budget questions, noting Treasury only processes reimbursements and wasn't involved in approval.",
      },
    },
  },
};
