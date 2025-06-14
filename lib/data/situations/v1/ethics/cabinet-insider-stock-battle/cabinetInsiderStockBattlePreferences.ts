import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const cabinetInsiderStockBattlePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Focus on keeping the bickering contained while highlighting overall economic progress.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "Deny wrongdoing and accuse defense of rumor-mongering.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect by claiming trades came from routine portfolio management, not secrets.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain the chat transcripts being examined and the process for evaluating insider information.",
      },
      authorizedContent:
        "Transcripts show cabinet members sharing policy hints hours before trades. Investigators suspect coordination across departments.",
    },
  },
};
