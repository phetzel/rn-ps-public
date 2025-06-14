import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const superSizedHailstormPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Praise first responders, mention federal relief on standby, and avoid debating climate policy right now.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Detail emergency crews and radar tracking while stressing cooperation with governors for quick aid.",
      },
      authorizedContent:
        "Classified radar shows hail clusters moving east. Mobile shelters are staged and debris teams are on alert tonight.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Promise fast insurance payouts and emphasize disaster funds without hinting at new taxes.",
      },
    },
  },
};
