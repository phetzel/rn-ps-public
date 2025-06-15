import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const recordBreakingHeatwavePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Promise relief funding and joke about selling government-branded sunscreen while stressing public resilience.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Discuss cooling centers and medical outreach while downplaying panic and emphasizing hydration advice.",
      },
      authorizedContent:
        "ER surge reports show heatstroke cases doubling in urban cores. Mobile clinics dispatched to critical areas under hush orders to avoid alarm.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Outline emergency funds and tax relief for power bills, stressing fiscal responsibility in ongoing heatwave measures.",
      },
    },
  },
};
