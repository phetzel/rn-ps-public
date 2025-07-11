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
        answerType: AnswerType.Deflect,
        rationale:
          "Wants to deflect from questions about the President's mental state by focusing on the broader issue of social media security protocols.",
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
