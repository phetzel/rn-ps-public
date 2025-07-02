import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const fakeAlienAlertPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "The President wants to deny the entire story, claiming the leaked memo is a complete fabrication created by political opponents.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Homeland Security believes the leak is so damaging that the only way to restore trust is to admit it was a foolish idea that was rejected.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The Defense Secretary, while wanting the funding, needs to deflect from the unethical plan by focusing on legitimate, real-world threats.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "HHS is worried about real panic and wants to reassure the public that there is no threat and to discourage any panic-buying or hoarding.",
      },
    },
  },
};
