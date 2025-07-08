import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const plasticStrawBanPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to deflect from 'nanny state' accusations and frame this as common-sense environmental protection.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Pushed for the ban and wants to challenge public resistance to this minor environmental inconvenience.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Worried about chaotic rollout and believes admitting need for exceptions and phased approach is necessary.",
      },
    },
  },
};
