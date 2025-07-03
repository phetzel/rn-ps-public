import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const summitNameSlipUpPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Thinks it was a funny slip of the tongue and wants to deflect by joking about it rather than making a formal apology.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Focused on damage control and wants to reassure allies that relations with Farawaystan remain strong.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "Worried this makes the administration look incompetent and wants to deny any impact on economic talks.",
      },
    },
  },
};
