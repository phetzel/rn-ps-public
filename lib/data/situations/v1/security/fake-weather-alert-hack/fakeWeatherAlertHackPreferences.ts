import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const fakeWeatherAlertHackPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Provide clear facts to quell confusion and highlight steps being taken to secure alert systems immediately.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain the breach and rapid fix, emphasizing improvements without stoking fear of future hoaxes.",
      },
      authorizedContent:
        "Server logs show intruders exploited a weather alert API key leaked on a contractor forum. The key has been revoked and monitoring increased.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Focus on public health impacts of panic evacuations and encourage citizens to verify alerts before reacting.",
      },
    },
  },
};
