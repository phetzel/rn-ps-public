import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const mysteryDroneSwarmsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Project confidence and promise swift identification while mocking alien conspiracies to keep the tone light.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Share radar data calmly and coordinate with local air traffic agencies without fueling panic.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Show strength and readiness to neutralize any threat, real or imaginary, behind the mystery drones.",
      },
      authorizedContent:
        "Radar logs pinpoint most swarms to a misguided drone hobby club near Riverside. No foreign signatures detected in the patterns so far.",
    },
  },
};
