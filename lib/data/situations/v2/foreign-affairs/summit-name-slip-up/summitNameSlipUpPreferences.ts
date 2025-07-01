import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const summitNameSlipUpPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President thinks it was a funny slip of the tongue and wants to deflect by joking about it rather than making a formal apology.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Secretary of State is focused on damage control and wants to reassure our allies that relations with Farawaystan remain strong.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "The Treasury Secretary is worried this makes the administration look incompetent and wants to deny that it has any impact on economic talks.",
      },
    },
  },
};
