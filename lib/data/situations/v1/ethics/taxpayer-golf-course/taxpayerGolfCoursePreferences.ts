import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const taxpayerGolfCoursePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale:
      "Acknowledge the golf course funding controversy and commit to reimbursing taxpayers if audits confirm misuse.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Admit funds were reallocated and promise repayments along with stricter sign-off procedures for future projects.",
      },
      authorizedContent:
        "Budget files show an internal memo approving the reallocation. Treasury is drafting a repayment schedule to restore infrastructure funds.",
    },
    [CabinetStaticId.Interior]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect by emphasizing potential tourism benefits and claim the project followed normal land-use approvals.",
      },
    },
  },
};
