import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const autonomousCarsRebellionPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to deflect from the government's regulatory failure by focusing on the 'criminal hackers' and treating it as a law enforcement issue.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Homeland Security's priority is public safety and wants to inform the public about the scale of the disruption and which vehicles are affected.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Defense Secretary sees this as a potential military threat and wants to challenge the narrative that this is just a civilian traffic problem.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Attorney General is focused on the criminal investigation and wants to reassure the public that the perpetrators will be found and prosecuted.",
      },
    },
  },
};
