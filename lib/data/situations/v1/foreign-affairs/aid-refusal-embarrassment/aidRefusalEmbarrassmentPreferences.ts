import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const aidRefusalEmbarrassmentPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Say it was a misunderstanding and stress ongoing talks to reconsider the aid.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Acknowledge the spiteful decision and propose immediate reversal to salvage credibility.",
      },
      authorizedContent:
        "Draft aid memo shows local officials pleaded for help, and our embassy recommended approval before the TV joke controversy.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain humanitarian funds were budgeted and the delay only hurts our image.",
      },
    },
  },
};
