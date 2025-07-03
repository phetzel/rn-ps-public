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
        answerType: AnswerType.Inform,
        rationale:
          "Concerned about plastic waste from the prank and wants to inform the public about environmental danger.",
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
