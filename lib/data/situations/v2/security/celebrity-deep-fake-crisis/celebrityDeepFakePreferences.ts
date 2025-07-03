import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const celebrityDeepFakePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Outraged by the fakes and wants to challenge tech companies and social media platforms allowing this content to spread.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to inform the public about new legislative proposals being drafted to combat this digital fraud.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Sees this as a mental health issue and wants to reassure citizens there are resources to help spot disinformation.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Concerned this is foreign influence operation and wants to deflect from domestic chaos by hinting at outside actors.",
      },
    },
  },
};
