import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const mandatoryMoodFormsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "This vital initiative tracks national well-being! Explain the immense benefits, downplay any paperwork.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Pilot program for sentiment data. We're listening to feedback to streamline this process significantly.",
      },
      authorizedContent:
        "The 'triplicate' detail was a clerical error by the Bureau of Redundant Paperwork. The actual system is a single, secure online submission. We'll announce this 'simplification' to alleviate concerns and improve public perception of the program's efficiency.",
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "This is purely an HHS initiative. The DOJ has no role. Direct all privacy or overreach concerns to them.",
      },
    },
  },
};
