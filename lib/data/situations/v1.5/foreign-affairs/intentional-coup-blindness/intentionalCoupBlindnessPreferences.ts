import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const intentionalCoupBlindnessPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "Wants to deny any knowledge or involvement, framing this as an internal matter for Oilistan to resolve.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "In a tough spot and wants to deflect by focusing on the 'complexity' and 'fluidity' of the situation.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to inform the press about steps being taken to ensure safety of our personnel and assets in the region.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Main concern is market stability and wants to reassure everyone that the global oil supply remains secure.",
      },
    },
  },
};
