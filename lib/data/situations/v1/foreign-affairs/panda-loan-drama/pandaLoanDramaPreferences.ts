import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const pandaLoanDramaPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Spin the naming idea as playful negotiation while insisting the pandas' well-being comes first.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Shift attention to broader cultural ties and suggest a naming compromise is possible.",
      },
    },
    [CabinetStaticId.Interior]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Provide facts about panda care and emphasize cooperation with the lending nation.",
      },
      authorizedContent:
        "Panda health file notes both bears are thriving but require specialized diet shipments funded jointly by our zoo and the lender.",
    },
  },
};
