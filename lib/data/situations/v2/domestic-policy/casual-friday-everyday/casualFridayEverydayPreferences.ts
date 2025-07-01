import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const casualFridayEverydayPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President thinks stuffy dress codes are outdated and wants to deflect criticism by framing this as a forward-thinking move for a modern workforce.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "HHS wants to present this as a data-driven decision based on studies linking comfortable attire to reduced stress and improved employee morale.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Treasury is concerned this will negatively impact productivity and wants to challenge the notion that this is a fiscally responsible decision.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Homeland Security needs to ensure its uniformed and public-facing officers are exempt and wants to reassure the public there's no security lapse.",
      },
    },
  },
};
