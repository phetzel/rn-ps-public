import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const fashionDiplomacyFlubPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Blame jet lag for the wardrobe slip and steer attention to trade deals and cultural appreciation.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Offer a light-hearted apology and emphasize respect for local customs to maintain diplomatic warmth.",
      },
      authorizedContent:
        "Protocol notes show the hosting chief laughed privately and gifted the President a signed photo in the robe for charity auction.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Cite fatigue from a dense travel schedule as the reason for the mishap, assuring no medical issue.",
      },
    },
  },
};
