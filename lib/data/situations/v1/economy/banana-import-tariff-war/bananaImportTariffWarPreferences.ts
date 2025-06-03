import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const bananaImportTariffWarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Stand up to foreign banana cartels! Tout home-grown jobs, mock ‘fruit-panic’ pundits, and ignore smoothie-price memes.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Frame tariff as a short-term lever; revenues fund farmer relief and will sunset if prices surge.",
      },
      authorizedContent:
        "Internal model: 20 % tariff adds avg $0.07 per pound. Rebate fund caps consumer impact at 2 % CPI. Trigger clause: auto-review if import volume drops >30 %.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Stress ongoing talks with Bananalandia; highlight WTO-compliant safeguards to avoid wider trade escalation.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Shift focus to fruit-diversification grants for schools; encourage apples and oranges during any price spike.",
      },
    },
  },
};
