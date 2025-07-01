import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const intentionalCoupBlindnessPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "The President wants to deny any and all knowledge or involvement, framing this as an internal matter for Oilistan to resolve on its own.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The Secretary of State is in a tough spot and wants to deflect by focusing on the 'complexity' and 'fluidity' of the situation on the ground.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Secretary of Defense wants to inform the press about the steps being taken to ensure the safety of our personnel and assets in the region.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Treasury Secretary's main concern is market stability and wants to reassure everyone that the global oil supply remains secure.",
      },
    },
  },
};
