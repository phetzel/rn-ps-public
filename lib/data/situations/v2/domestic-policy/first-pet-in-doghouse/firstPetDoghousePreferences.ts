import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const firstPetDoghousePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Loves their dog and thinks the situation is funny. Wants to deflect by joking about the dog's 'editorial feedback'.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Horrified that a diplomatic treaty was destroyed and believes admitting the severe error is the only path forward.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Concerned about the security breach and wants to reassure that protocols are being reviewed and tightened.",
      },
    },
  },
};
