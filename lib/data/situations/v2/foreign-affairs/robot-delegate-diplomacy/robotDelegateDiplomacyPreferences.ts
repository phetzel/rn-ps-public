import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const robotDelegateDiplomacyPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Loves the novelty and futuristic image of this, and wants to challenge anyone who questions this bold 'upgrade'.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to inform the public about the AI's capabilities and the specific, limited role it's intended to play.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Sees this as a tool and wants to reassure allies that human diplomats are still firmly in control of decisions.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Concerned about the legal precedent and wants to deflect questions about whether a robot's agreements are binding.",
      },
    },
  },
};
