import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const spyDronePizzaDropPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President thinks it's hilarious and wants to deflect from the serious security breach by making light of the pizza delivery aspect.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "The Secretary of Defense is furious about the operational failure and believes admitting the technical malfunction is the only responsible path.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Homeland Security is concerned this looks like a cyber-attack and wants to reassure the public that our drone control systems are secure.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Secretary of State wants to formally inform our allies and the rival nation about the incident to control the diplomatic narrative.",
      },
    },
  },
};
