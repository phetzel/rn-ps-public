import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const hotMicCabinetSlipupPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "One off-hand joke isn’t policy. Crack humor, tease the press for overreacting, pivot to economic wins.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm markets: stress solid fundamentals, clarify context, promise detailed rollout timeline soon.",
      },
      authorizedContent:
        "Full recording shows the Secretary mocked a draft from 2023, not the current plan. Slide deck with updated risk models ships to investors tomorrow 8 a.m.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Reassure allies: slip-up doesn’t alter fiscal outlook; global obligations remain rock-solid.",
      },
    },
  },
};
