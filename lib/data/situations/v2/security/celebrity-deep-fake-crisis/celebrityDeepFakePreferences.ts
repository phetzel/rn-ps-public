import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const celebrityDeepFakePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "The President is outraged by the fakes and wants to challenge the tech companies and social media platforms that allow this content to spread.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Attorney General wants to inform the public about the new legislative proposals being drafted to combat this kind of digital fraud.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "HHS sees this as a public mental health issue and wants to reassure citizens that there are resources to help them spot disinformation.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The Secretary of State is concerned this is a foreign influence operation and wants to deflect from domestic chaos by hinting at outside actors.",
      },
    },
  },
};
