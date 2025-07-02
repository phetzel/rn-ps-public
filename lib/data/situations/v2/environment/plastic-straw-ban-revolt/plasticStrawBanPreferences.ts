import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const plasticStrawBanPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to deflect from the 'nanny state' accusations and frame this as a common-sense environmental issue that everyone should support.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The HHS Secretary who pushed for the ban on environmental grounds wants to challenge the public's resistance to a minor, necessary inconvenience.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "The Attorney General is worried about the chaotic rollout and believes admitting the need for exceptions and a phased approach is necessary.",
      },
    },
  },
};
