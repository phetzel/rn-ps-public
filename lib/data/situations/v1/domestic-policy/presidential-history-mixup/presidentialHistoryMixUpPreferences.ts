import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const presidentialHistoryMixUpPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Minor slip! Pivot to bold tech agenda, joke about ‘founding-father bandwidth,’ brush off nitpickers.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Correct record politely, cite real inventors, and stress that policy substance, not trivia, guides diplomacy.",
      },
      authorizedContent:
        "Speech draft margin note mis-typed “Franklin radio breakthrough.” Staff removed it, but teleprompter cache restored old line. Clarification cable sent to UNESCO within 30 min.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Emphasize markets react to fundamentals, not history gaffes; no impact on bonds or trade deals.",
      },
    },
  },
};
