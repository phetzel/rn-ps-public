import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const presidentialPortraitExtravagancePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Defend the administration's cultural investments while promising to review art expenses going forward.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect blame by noting prior administrations started the portrait program and that refunds are being processed.",
      },
      authorizedContent:
        "Invoices reveal markups by a single vendor. Treasury is negotiating partial refunds and new competitive bids.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Provide details on art selection criteria and stress that diplomatic tradition influenced the purchases.",
      },
    },
  },
};
