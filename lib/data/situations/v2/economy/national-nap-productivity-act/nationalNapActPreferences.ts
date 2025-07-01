import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const nationalNapActPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to frame this as a bold, modern idea but avoid getting stuck on the silly-sounding details, like mandatory pillows.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The HHS Secretary wants to cite studies and data on the health and productivity benefits of rest to make the case scientifically.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Treasury Secretary is skeptical of the costs and wants to challenge the idea that this is a net positive for the economy.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Attorney General is worried about enforcement and wants to reassure businesses that the implementation will be reasonable and fair.",
      },
    },
  },
};
