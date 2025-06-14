import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const tradeDealVanityClausePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Spin the renaming idea as playful leverage and emphasize the deal's economic upsides.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay the clause as a brainstorming note while stressing ongoing diplomacy.",
      },
      authorizedContent:
        "Treaty annex drafts mention the renaming as a symbolic gesture only, and cables show the partner prefers a smaller tribute like a plaza name.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm markets by highlighting steady trade talks and minimal cost to taxpayers despite the vanity squabble.",
      },
    },
  },
};
