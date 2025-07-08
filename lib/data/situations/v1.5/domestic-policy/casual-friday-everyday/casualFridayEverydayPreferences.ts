import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const casualFridayEverydayPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Thinks dress codes are outdated and wants to reassure critics that this forward-thinking approach will modernize the workforce.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to present this as data-driven, based on studies linking comfortable attire to reduced stress and improved morale.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Concerned this will negatively impact productivity and wants to challenge whether this is fiscally responsible.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Needs to ensure uniformed officers are exempt and wants to reassure the public there's no security lapse.",
      },
    },
  },
};
