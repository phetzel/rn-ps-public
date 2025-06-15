import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const mysteryGreenRainPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Share lab updates cautiously, assure public safety, and avoid blaming any specific country without proof yet.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain health monitoring and clarify no widespread poisonings while tests continue.",
      },
      authorizedContent:
        "Preliminary results show algae spores mixed with industrial residue. Further testing will confirm toxicity levels tomorrow.",
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Highlight coordination with local agencies and emphasize no immediate security threat despite online rumors.",
      },
    },
  },
};
