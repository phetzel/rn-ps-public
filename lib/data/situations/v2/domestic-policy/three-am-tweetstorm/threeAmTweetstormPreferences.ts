import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const threeAmTweetstormPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "Wants to deny having sent the tweets, claiming it was a hack or staffer's error to avoid admitting the bizarre content.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Concerned about the President's mental state and wants to reassure the public that the President is healthy and fit.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Wants to deflect by focusing on the 'serious issue' of social media account security for high-level officials.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Feels compelled to go on record and state, for national security purposes, that birds are not spy drones.",
      },
    },
  },
};
