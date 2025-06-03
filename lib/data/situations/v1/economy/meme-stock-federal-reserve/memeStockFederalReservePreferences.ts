import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const memeStockFederalReservePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Pitch it as new-age diversification; joke dull bonds never go viral, and spotlight possible surprise profits.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Stress that meme holdings are capped, hedged, and governed by automated stop-loss rules—no threat to core reserves.",
      },
      authorizedContent:
        "Risk desk memo: total meme exposure <0.2 % of Fed portfolio. Layered 15 % trailing stops and nightly VAR checks limit drawdown to $4 B max. Windfall, if any, auto-applies to deficit reduction fund.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay foreign concerns; remind allies many sovereign funds already dabble in tech ETFs with similar volatility.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Highlight investor-mental-health hotlines and new literacy campaigns to curb risky retail FOMO trades.",
      },
    },
  },
};
