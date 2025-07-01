import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const firstPetDoghousePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President loves their dog and thinks the situation is funny. They want to deflect by joking about the dog's 'editorial feedback'.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "The Secretary of State is horrified that a diplomatic treaty was destroyed and believes admitting the severe error is the only path forward.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Homeland Security is concerned about the security breach and wants to reassure the public that protocols are being reviewed and tightened.",
      },
    },
  },
};
