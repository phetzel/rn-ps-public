import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const ovalOfficeMerchShopPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Stress that profits will support civic education and claim the shop is a limited experiment.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Emphasize revenue is properly tracked and taxed; reassure that no federal funds were used to start the shop.",
      },
      authorizedContent:
        "The sales ledger shows daily revenue totals and vendor agreements, confirming that profits are routed through a government account.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect by claiming the shop promotes national pride and international visitors appreciate the souvenirs.",
      },
    },
  },
};
