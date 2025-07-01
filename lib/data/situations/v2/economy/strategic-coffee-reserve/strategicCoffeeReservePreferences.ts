import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const strategicCoffeeReservePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to frame this as a matter of national pride and security, deflecting from the quirky and costly specifics of the plan.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "HHS wants to highlight the role of caffeine in national productivity and morale, treating coffee as a public wellness commodity.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Homeland Security views this as a supply chain security issue and wants to reassure the public that critical resources are protected.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Treasury is deeply concerned about the cost and market distortion, and wants to challenge the necessity of such a massive expenditure.",
      },
    },
  },
};
