import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const translatorMixUpPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Brush off rumors of selling Alaska, blame translation fatigue, and steer conversation back to trade successes.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm markets and allies by stressing corrected transcript and unwavering respect for territorial integrity.",
      },
      authorizedContent:
        "Internal review shows the interpreter misspoke; official audio confirms the President said 'our Alaska partnership' not 'your Alaska'. The corrected transcript has been shared with all delegations.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Assure investors it was a harmless blunder, not a sign of policy shift. Keep focus on stable trade deals.",
      },
    },
  },
};
