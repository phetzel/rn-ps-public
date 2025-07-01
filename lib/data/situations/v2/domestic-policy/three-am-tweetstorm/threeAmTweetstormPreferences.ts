import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const threeAmTweetstormPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "The President wants to deny having sent the tweets, claiming it was a hack or a staffer's error to avoid admitting the bizarre content.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "HHS is concerned about the President's mental state and wants to reassure the public that the President is healthy and fit for office.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Homeland Security wants to deflect by focusing on the 'serious issue' of social media account security for high-level officials.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Defense Secretary feels compelled to go on the record and state, for national security purposes, that birds are not, in fact, spy drones.",
      },
    },
  },
};
