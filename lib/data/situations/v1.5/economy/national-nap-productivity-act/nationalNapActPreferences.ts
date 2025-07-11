import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const nationalNapActPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to frame this as a bold, modern idea but avoid getting stuck on silly-sounding details, like mandatory pillows.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to cite studies and data on the health and productivity benefits of rest to make the case scientifically.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Skeptical of the costs and wants to challenge the idea that this is a net positive for the economy.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Worried about enforcement and wants to reassure businesses that the implementation will be reasonable and fair.",
      },
    },
  },
};
