import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cowEmissionRegulationsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to deflect from the silly image and frame this as a serious, innovative part of climate strategy.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to inform with data, focusing on methane's environmental impact and why this novel solution is necessary.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Skeptical about cost-benefit analysis and wants to challenge whether this is the most efficient use of funds.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Sees major legal challenges from agriculture and believes admitting the plan needs work is wisest course.",
      },
    },
  },
};
