import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const luxuryPresidentialHelicopterPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Assure that new aircraft boost safety and reliability while open to cost review.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay luxury touches and emphasize standard procurement process.",
      },
      authorizedContent:
        "Spec sheet reveals the helicopters include gold-plated fixtures and custom lounge seating, costing double the standard model.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Reassure that funding comes from the defense budget and won't impact social programs.",
      },
    },
  },
};
