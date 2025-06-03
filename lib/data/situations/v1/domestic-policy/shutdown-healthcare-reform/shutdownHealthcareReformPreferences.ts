import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const shutdownHealthcareReformPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Vitamin-prescription idea is visionary! Blame partisan grandstanding for shutdown; promise a ‘healthier’ deal soon.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Emphasize contingency funds cover pay, outline daily economic cost, urge swift bipartisan resolution.",
      },
      authorizedContent:
        "Treasury memo: shutdown burns $320 M per day in GDP drag and delays 87 k tax refunds. Cash buffer lasts 17 days before credit-rating review triggers.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Clarify vitamin mandate intent, cite medical feedback, and highlight ongoing patient-safety funding during shutdown.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm allies: shutdown is domestic; debt payments continue; credit rating remains stable if resolved quickly.",
      },
    },
  },
};
