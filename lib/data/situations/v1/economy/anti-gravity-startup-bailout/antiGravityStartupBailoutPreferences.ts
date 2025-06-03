import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const antiGravityStartupBailoutPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Bold inventions need bold bets! Mock ‘gravity-bound’ critics and frame bailout as moon-shot patriotism.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain bailout is a convertible loan with claw-backs; no cash if milestones fail.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Stress dual-use propulsion value and strict tech-transfer controls for national security.",
      },
      authorizedContent:
        "Classified field demo: 800-kg platform achieved sustained 0.5-m hover for 27 s. Power draw 3 MW. DARPA sees promise for cargo drones if thrust-to-weight hits 1:1 within 18 mos; otherwise funding halts automatically. Patent liens protect DoD interests.",
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Ongoing fraud probe; cannot comment on subpoenas. Note safeguards already in place.",
      },
    },
  },
};
