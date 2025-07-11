import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const autonomousCarsRebellionPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "Wants to deny any regulatory failure by claiming the cars were functioning perfectly before criminal hackers interfered with them.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Priority is public safety and wants to inform about the scale of disruption and which vehicles are affected.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Sees this as potential military threat and wants to challenge the narrative that this is just a traffic problem.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Focused on criminal investigation and wants to reassure that perpetrators will be found and prosecuted.",
      },
    },
  },
};
