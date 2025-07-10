import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const recordBreakingHeatwavePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Wants to project calm and reassure the public that the government is taking necessary steps to manage this crisis.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Wants to admit that health infrastructure is strained and needs more protection for vulnerable populations.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Concerned about economic impact and wants to inform the public about available financial relief.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Views this as infrastructure failure and wants to challenge the idea that the current power grid is adequate.",
      },
    },
  },
};
