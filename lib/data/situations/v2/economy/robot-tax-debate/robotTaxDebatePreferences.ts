import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const robotTaxDebatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Sees this as a bold, signature policy and wants to challenge any framing of it as being anti-innovation or economically harmful.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to focus on the fiscal mechanics, providing data on revenue projections and how the tax structure actually works.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Worried this tax could damage international relationships and wants to deflect questions about capital flight and trade retaliation.",
      },
    },
  },
};
