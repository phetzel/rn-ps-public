import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const memeStockFederalReservePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Finds this hilarious and wants to deflect from serious financial implications by framing it as being 'in touch'.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Horrified by this move and wants to reassure markets that traditional fiscal discipline still exists.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Concerned about how this looks on the world stage and wants to challenge the idea that it signals instability.",
      },
    },
  },
};
