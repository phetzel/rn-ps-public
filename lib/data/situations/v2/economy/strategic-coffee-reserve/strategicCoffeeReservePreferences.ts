import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const strategicCoffeeReservePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to frame this as a matter of national pride and security, deflecting from the quirky and costly specifics.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to reassure the public about the health benefits of coffee and that this strategic reserve will ensure reliable access to this wellness commodity.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Views this as a supply chain security issue and wants to reassure the public that critical resources are protected.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Deeply concerned about the cost and market distortion, and wants to challenge the necessity of such massive expenditure.",
      },
    },
  },
};
