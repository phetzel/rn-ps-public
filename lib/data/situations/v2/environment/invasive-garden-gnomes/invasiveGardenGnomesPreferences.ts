import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const invasiveGardenGnomesPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President finds this hilarious and wants to deflect from the environmental vandalism by joking about a 'gnome uprising'.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "HHS is concerned about the plastic waste, even from a prank, and wants to inform the public about the environmental danger.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Attorney General sees this as a crime and wants to challenge the public perception that this is a harmless prank, vowing prosecution.",
      },
    },
  },
};
