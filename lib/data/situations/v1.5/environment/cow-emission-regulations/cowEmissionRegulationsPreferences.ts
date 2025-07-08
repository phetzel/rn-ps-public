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
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to reassure the public about the health benefits of reducing methane emissions and how this innovative approach will improve air quality.",
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
