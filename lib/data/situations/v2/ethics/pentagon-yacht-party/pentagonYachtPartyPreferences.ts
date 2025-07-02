import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const pentagonYachtPartyPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to deflect from the bad optics by framing this as a routine, if poorly chosen, networking event with industry partners.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "The Secretary of Defense is furious about the breach of decorum and wants to admit this was an unacceptable lapse in judgment.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Treasury is concerned about the waste of taxpayer funds and wants to reassure the public that a full audit is underway to recoup costs.",
      },
    },
  },
};
