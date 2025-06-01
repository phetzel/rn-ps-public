import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const giftExchangeGaffePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "It was artisanal soy-bacon! Protocol office erred, not me. Veggistan is overreacting; clarify misunderstanding.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Own the gaffe fast. Offer formal apology and culturally fitting gift to rebuild trust.",
      },
      authorizedContent:
        "Leader collects rare stamps. Send valuable issue and tout joint plant-based food-security work.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Note friendly intent, promise protocol review, and shift focus to broader goodwill.",
      },
    },
  },
};
