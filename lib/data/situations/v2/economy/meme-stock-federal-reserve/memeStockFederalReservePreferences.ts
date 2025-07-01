import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const memeStockFederalReservePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President finds this whole thing hilarious and wants to deflect from the serious financial implications by framing it as being 'in touch'.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Treasury Secretary is horrified by this move and wants to reassure markets and the public that traditional fiscal discipline still exists.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Secretary of State is concerned about how this looks on the world stage and wants to challenge the idea that it signals instability.",
      },
    },
  },
};
