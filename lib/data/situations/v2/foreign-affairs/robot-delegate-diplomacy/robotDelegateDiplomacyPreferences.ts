import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const robotDelegateDiplomacyPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "The President loves the novelty and futuristic image of this, and wants to challenge anyone who questions this bold 'upgrade' to diplomacy.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Secretary of State wants to inform the public about the AI's capabilities and the specific, limited role it's intended to play in the talks.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Defense Secretary sees this as a tool and wants to reassure allies that human diplomats are still firmly in control of all final decisions.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The Attorney General is concerned about the legal precedent and wants to deflect questions about whether a robot's agreements are binding.",
      },
    },
  },
};
