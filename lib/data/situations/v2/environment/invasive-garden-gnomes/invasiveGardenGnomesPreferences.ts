import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const invasiveGardenGnomesPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Finds this hilarious and wants to deflect from the vandalism by joking about a 'gnome uprising'.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Wants to challenge the perception that this is a harmless prank by emphasizing the serious environmental impact of the plastic waste.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Sees this as a crime and wants to challenge the perception that this is a harmless prank, vowing prosecution.",
      },
    },
  },
};
