import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const cryptoNationalCurrencyPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "FreedomCoin signals bold progress. Critics cling to dusty dollars; boast this leap will enrich everyone.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "FreedomCoin is a blue-sky idea. Emphasize our review process and assure markets no sudden switch is imminent.",
      },
      authorizedContent:
        "President loved the eagle-on-rocket logo. Note it’s early brainstorming and pivot to the dollar’s proven stability.",
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Financial-system stability is our focus; currency design is Treasury’s lane. We simply monitor emerging threats.",
      },
    },
  },
};
