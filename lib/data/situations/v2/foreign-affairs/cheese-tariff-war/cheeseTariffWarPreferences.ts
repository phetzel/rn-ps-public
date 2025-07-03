import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cheeseTariffWarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Knows the joke landed poorly and wants to deflect by reframing this as legitimate trade issue.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Sees this as serious economic threat and wants to challenge the idea that Dairystan's retaliatory tariffs are justified.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to de-escalate the situation and reassure the international community that this is a minor dispute being resolved.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to inform the public about quality and variety of domestic cheeses to encourage buying local during the dispute.",
      },
    },
  },
};
