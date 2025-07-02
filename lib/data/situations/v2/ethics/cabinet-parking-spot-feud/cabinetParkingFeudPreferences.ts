import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cabinetParkingFeudPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President finds this squabbling childish and wants to deflect by downplaying it as 'spirited competition' among a passionate team.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Secretary of State believes their diplomatic duties grant them seniority and wants to challenge Defense's claim to the prime spot.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Secretary of Defense believes national security takes precedence and wants to challenge State's claim as a matter of principle.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "The Attorney General is tired of the feud and believes admitting the situation is embarrassing is the first step to resolving it like adults.",
      },
    },
  },
};
