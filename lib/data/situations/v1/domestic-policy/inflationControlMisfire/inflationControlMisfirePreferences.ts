import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const inflationControlMisfirePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Emoji dollars boost morale! Mock gloomy economists, insist fun money lifts spending, pivot to job-growth narrative.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Clarify pilot size, anti-counterfeit tech, and stress no change to monetary-supply targets.",
      },
      authorizedContent:
        "Bureau test run printed 5 M $1 notes with micro-emoji watermark; circulation confined to three tourist hubs. Serial prefixes start “😃A”. Fed cash desks alerted; swap window opens if rejects exceed 5 %.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm bond markets and allies: underlying dollar policy and debt service stay orthodox.",
      },
    },
  },
};
