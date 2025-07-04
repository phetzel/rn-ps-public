import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const pentagonYachtPartyPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Wants to challenge the narrative by arguing this was a legitimate networking event that's being blown out of proportion by critics.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Furious about the breach of decorum and wants to admit this was an unacceptable lapse in judgment.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Concerned about the waste of taxpayer funds and wants to reassure the public that a full audit is underway.",
      },
    },
  },
};
