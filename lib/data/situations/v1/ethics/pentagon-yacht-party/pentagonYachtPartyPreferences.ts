import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const pentagonYachtPartyPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Play down the gathering as a morale event and steer talk back to defense priorities, not party optics.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Own up to attending the party, promise reimbursement, and frame it as poor judgment rather than corruption.",
      },
      authorizedContent:
        "The party manifest lists entertainment paid by contractors. Defense officials signed IOUs to repay personal expenses after press inquiries.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Stress that reimbursements are processed and no defense funds will be lost over the incident.",
      },
    },
  },
};
