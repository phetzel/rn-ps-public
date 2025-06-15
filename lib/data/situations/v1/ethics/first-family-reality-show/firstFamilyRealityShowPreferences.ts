import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const firstFamilyRealityShowPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Shift focus to how the show promotes transparency while acknowledging review of filming contracts for compliance.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay security concerns by emphasizing that filming areas are limited and monitored to protect operations.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain contract terms are under review and any violations will trigger penalties, ensuring ethics compliance.",
      },
      authorizedContent:
        "Contracts include confidentiality clauses and revenue sharing. DOJ evaluations indicate possible conflict-of-interest waivers were signed.",
    },
  },
};
