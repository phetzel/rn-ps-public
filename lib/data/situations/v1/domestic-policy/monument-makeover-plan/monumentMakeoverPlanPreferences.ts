import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const monumentMakeoverPlanPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Face on Rushmore is visionary marketing! Joke about ‘updating’ history and dismiss pearl-clutching critics.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Respect heritage laws; highlight survey of alternatives and stress no final decision without public input.",
      },
      authorizedContent:
        "Interior Heritage Survey (classified draft) shows 62 % public opposition to carving but 71 % accept a visitor-center bust. Geologists warn blasting risks existing faces. Report recommends bronze installation, cost $4.8 M, privately funded naming rights available.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Emphasize private-donation model and minimal taxpayer exposure; cite long-term tourism revenue bump.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Acknowledge lawsuit risk; confirm compliance review and readiness to mediate with heritage groups.",
      },
    },
  },
};
