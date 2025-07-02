import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cowEmissionRegulationsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to deflect from the silly image of cow backpacks and frame this as a serious, innovative part of our climate change strategy.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "HHS wants to inform the public with data, focusing on the significant environmental impact of methane and why this novel solution is necessary.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Treasury Secretary is skeptical about the cost-benefit analysis and wants to challenge the idea that this is the most efficient use of funds.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "The Attorney General sees major legal challenges from the agricultural industry and believes admitting the plan needs work is the wisest course.",
      },
    },
  },
};
