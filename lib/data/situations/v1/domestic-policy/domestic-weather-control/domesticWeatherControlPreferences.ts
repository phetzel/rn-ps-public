import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const domesticWeatherControlPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Giant coastal fans show bold vision! Joke about ‘summer breezes on demand’ and scoff at gloom-and-doom engineers.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm storm-belt states: no construction until safety, power-grid, and wildlife reviews conclude.",
      },
      authorizedContent:
        "Feasibility memo: a single 300-ft prototype would draw 120 MW—equal to a mid-size city. Preliminary cost $2.7 B, funded only for wind-tunnel models. Any seabird mortality above 0.5 % halts the project automatically.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Highlight private-sector consortium pledges and stress no deficit impact without congressional sign-off.",
      },
    },
  },
};
