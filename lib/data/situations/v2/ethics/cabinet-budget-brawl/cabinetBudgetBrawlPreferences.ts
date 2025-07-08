import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cabinetBudgetBrawlPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Wants to project unity and reassure the public that these are just healthy internal debates about good governance.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Feels the Pentagon's budget is out of control and wants to publicly challenge their spending priorities and lack of accountability.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Believes budget cuts threaten national security and wants to deflect by talking about global threats rather than specific budget lines.",
      },
    },
  },
};
