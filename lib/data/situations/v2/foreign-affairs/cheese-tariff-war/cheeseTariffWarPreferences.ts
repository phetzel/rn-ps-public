import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cheeseTariffWarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President knows the joke landed poorly and wants to deflect from their personal comment by reframing this as a legitimate trade issue.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Treasury sees this as a serious economic threat and wants to challenge the idea that Dairystan's retaliatory tariffs are justified.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Secretary of State wants to de-escalate the situation and reassure the international community that this is a minor dispute being resolved.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The HHS Secretary wants to inform the public about the quality and variety of domestic cheeses to encourage buying local during the dispute.",
      },
    },
  },
};
