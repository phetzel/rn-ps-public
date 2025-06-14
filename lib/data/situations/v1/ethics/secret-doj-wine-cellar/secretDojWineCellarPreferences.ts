import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const secretDojWineCellarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Frame the cellar as a legacy storage room and pivot to more pressing justice priorities.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Admit the cellar existed, pledge transparency, and commit proceeds from any auction to charity programs.",
      },
      authorizedContent:
        "Inventory logs reveal a curated wine vault beneath a DOJ annex stocked for private receptions, now sealed for audit.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Promise that Treasury will oversee the cellar's auction and ensure all funds return to taxpayers.",
      },
    },
  },
};
