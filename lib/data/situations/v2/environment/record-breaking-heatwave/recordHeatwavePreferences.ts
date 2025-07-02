import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const recordHeatwavePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "The President wants to project calm and control, reassuring the public that the government is taking all necessary steps to manage the crisis.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "HHS is focused on public health and wants to reassure the most vulnerable populations, like seniors, that help is available.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Treasury Secretary is concerned about the economic impact and wants to inform the public about the financial relief being made available.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Homeland security views this as a failure of infrastructure and wants to challenge the idea that the current power grid is adequate.",
      },
    },
  },
};
