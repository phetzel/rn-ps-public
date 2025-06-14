import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const undercoverSelfieScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Frame the selfie as a youthful mistake while highlighting security swift action and loyalty to our troops.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Accept responsibility, pledge better operational discipline, and underscore the relocation plan to protect personnel.",
      },
      authorizedContent:
        "Defense reports confirm the leaked coordinates were genuine. The base has since been evacuated, with assets moved to a fallback site.",
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Assure the public that homeland security remains intact and data leaks are contained through swift digital takedowns.",
      },
    },
  },
};
