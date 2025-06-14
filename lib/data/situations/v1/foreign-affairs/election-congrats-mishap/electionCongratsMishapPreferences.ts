import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const electionCongratsMishapPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Blame outdated results for the mix-up and shift conversation to supporting democratic institutions abroad.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Offer a clear apology to the rightful winner and emphasize respect for the electoral process.",
      },
      authorizedContent:
        "Call transcript shows staff handed the President an old briefing. A correcting cable was dispatched within minutes of the gaffe.",
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Explain there is no evidence of fraud and reaffirm commitment to election norms worldwide.",
      },
    },
  },
};
