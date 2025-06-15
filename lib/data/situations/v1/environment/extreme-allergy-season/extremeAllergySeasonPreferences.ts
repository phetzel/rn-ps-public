import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const extremeAllergySeasonPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Promise relief funds and sympathize with sneezy citizens while sidestepping climate debates.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Provide health tips and highlight pollen forecast technology.",
      },
      authorizedContent:
        "AI system projects pollen surges two weeks ahead, allowing early warnings and medication stockpiles.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Stress budget flexibility for subsidies and promise tax credits for workplaces.",
      },
    },
  },
};
