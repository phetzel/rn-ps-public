import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const embassyExoticAnimalIncidentPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Downplay the ambassador's gift as a cultural misunderstanding and pivot to shared conservation efforts.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Clarify the legality of the gift and outline steps taken to comply with international wildlife protections.",
      },
      authorizedContent:
        "CITES waiver email indicates the calf was offered without proper paperwork. The plan now is to establish a joint conservation program to legitimize its stay or return it safely.",
    },
    [CabinetStaticId.Interior]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Emphasize that wildlife experts are overseeing the calf's health and no endangered animals will be trafficked.",
      },
    },
  },
};
