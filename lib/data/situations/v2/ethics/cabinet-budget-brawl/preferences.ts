import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cabinetBudgetBrawlPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Wants to project unity and reassure the public these are just healthy internal debates.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Feels the Pentagon's budget is out of control and wants to challenge their spending priorities publicly.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Believes cuts threaten security and wants to deflect by talking about global threats over budget lines.",
      },
    },
  },
};
