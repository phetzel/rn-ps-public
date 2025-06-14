import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const customLimoPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Praise American auto jobs and dodge details about trim levels or pricing.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Highlight that procurement followed protocol and costs will be reviewed for savings.",
      },
      authorizedContent:
        "Procurement files show initial orders for gold accents were suggested by a vendor promo and scaled back after review.",
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Redirect questions to transportation security needs, not luxury details.",
      },
    },
  },
};
