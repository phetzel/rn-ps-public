import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const intentionalCoupBlindnessPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Dismiss coup questions, highlight stable gas prices, and pivot to domestic energy savings.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay US involvement, stressing commitment to peaceful transition while avoiding sanctions talk.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Provide intel-based reassurance on regional security and explain monitoring operations discreetly.",
      },
      authorizedContent:
        "Classified cables reveal the coup leaders promised uninterrupted oil shipments. Defense analysts warn this stability may not last if opposition rallies.",
    },
  },
};
