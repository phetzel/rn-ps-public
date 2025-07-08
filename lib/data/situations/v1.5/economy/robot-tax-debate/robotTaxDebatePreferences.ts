import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const robotTaxDebatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Sees this as a bold, signature policy and wants to challenge any framing of it as being anti-business or anti-progress.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to focus on the economic mechanics, providing data on revenue projections and its effects on GDP.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Focused on the social safety net and wants to reassure the public that displaced workers will be supported.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Worried this tax could make the nation less competitive and wants to deflect questions about capital flight.",
      },
    },
  },
};
