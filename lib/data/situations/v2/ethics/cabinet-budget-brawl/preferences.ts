import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cabinetBudgetBrawlPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "The President wants to project an image of a strong, unified team and wants to reassure the public that these are just healthy internal debates.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Treasury Secretary feels the Pentagon's budget is out of control and wants to challenge their spending priorities publicly.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The Defense Secretary believes these cuts threaten national security and wants to deflect by talking about global threats instead of budget lines.",
      },
    },
  },
};
