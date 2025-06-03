import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const threeAmTweetstormPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Late-night brilliance gets misunderstood. Spin tweets as brainstorms and mock anyone who can’t keep up.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm markets and allies; insist national security is unaffected by midnight musings.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Address mental-health chatter respectfully and steer public toward reliable information channels.",
      },
    },
  },
};
