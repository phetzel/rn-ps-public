import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const robotTaxDebatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Sees this as bold signature policy and wants to challenge framing as anti-innovation or harmful.",
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
          "Worried tax could damage international relationships and wants to deflect capital flight questions.",
      },
    },
  },
};
