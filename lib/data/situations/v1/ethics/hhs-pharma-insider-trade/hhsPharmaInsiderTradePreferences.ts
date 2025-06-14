import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const hhsPharmaInsiderTradePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Downplay the accusations while emphasizing commitment to affordable care and ongoing reviews.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Claim trades were handled by advisers and not influenced by inside information on drug approvals.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain the subpoenaed trade blotter and outline the investigation's next steps without prejudging.",
      },
      authorizedContent:
        "Trade blotter entries show stock purchases occurring days before rulings. Compliance officers flagged the pattern, prompting subpoenas.",
    },
  },
};
