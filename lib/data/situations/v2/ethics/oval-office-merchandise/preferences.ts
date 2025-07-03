import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const ovalOfficeMerchandisePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Thinks this is a great idea and wants to challenge the 'stuffy' critics making a big deal out of nothing.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to reassure the public that all profits are going to charity or the general fund, not to any individual.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Concerned about the legality and wants to inform the press that ethics lawyers are reviewing the arrangement.",
      },
    },
  },
};
