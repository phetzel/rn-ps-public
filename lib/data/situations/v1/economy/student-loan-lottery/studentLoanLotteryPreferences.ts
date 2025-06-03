import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const studentLoanLotteryPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Frame it as game-show justice: lucky draws spark hope and cost less than blanket forgiveness; shrug off odds complaints.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Highlight capped liability, bond funding, and offsets via income-share repayments; macro risk models neutral.",
      },
      authorizedContent:
        "OA memo: annual prize pool $20 B versus $1.7 T total loans. Financed by 0.15 % surtax on refinanced debt and resale of performing notes. Monte Carlo stress shows deficit impact ≤ 0.03 % GDP even in recession. Treasury may throttle ticket issuance if default rates exceed 6 % three quarters running.",
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Highlight open-source algorithm and audits by magistrates plus civil-rights monitors to prove randomness.",
      },
    },
  },
};
