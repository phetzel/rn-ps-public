import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

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
          "Feels the Pentagon's budget is out of control and wants to challenge their spending priorities and accountability.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Believes budget cuts threaten national security and wants to deflect by discussing global threats instead.",
      },
    },
  },
};
