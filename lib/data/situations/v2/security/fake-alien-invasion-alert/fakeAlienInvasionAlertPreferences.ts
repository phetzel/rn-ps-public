import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const fakeAlienInvasionAlertPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "Wants to deny the entire story, claiming the leaked memo is a complete fabrication by political opponents.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Believes the leak is so damaging that the only way to restore trust is to admit it was a foolish rejected idea.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "While wanting the funding, needs to deflect from the unethical plan by focusing on legitimate, real threats.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Worried about real panic and wants to reassure the public there is no threat and discourage panic-buying.",
      },
    },
  },
};
