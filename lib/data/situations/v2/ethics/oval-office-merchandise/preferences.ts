import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const ovalOfficeMerchandisePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "The President thinks this is a great, harmless idea and wants to challenge the 'stuffy' critics who are making a big deal out of nothing.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Treasury Secretary wants to reassure the public that all profits are going to charity or the general fund, not to any individual.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Attorney General is concerned about the legality and wants to inform the press that ethics lawyers are reviewing the arrangement.",
      },
    },
  },
};
