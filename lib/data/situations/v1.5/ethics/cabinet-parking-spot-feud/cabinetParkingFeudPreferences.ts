import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cabinetParkingFeudPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Finds this squabbling childish and wants to reassure the public that despite this minor disagreement, the team remains focused on important issues.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Believes diplomatic duties grant seniority and wants to challenge Defense's claim to the prime spot.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Believes national security takes precedence and wants to challenge State's claim as a matter of principle.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Tired of the feud and believes admitting the embarrassment is the first step to resolving it like adults.",
      },
    },
  },
};
