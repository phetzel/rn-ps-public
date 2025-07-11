import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const spyDronePizzaDropPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Thinks it's hilarious and wants to challenge anyone who sees this as anything other than a harmless accident with a funny outcome.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Furious about the operational failure and believes admitting the technical malfunction is the only responsible path.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Concerned this looks like a cyber-attack and wants to reassure the public that our drone control systems are secure.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to formally inform allies and the rival nation about the incident to control the diplomatic narrative.",
      },
    },
  },
};
