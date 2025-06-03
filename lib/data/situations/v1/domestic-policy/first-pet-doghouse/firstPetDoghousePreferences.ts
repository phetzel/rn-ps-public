import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const firstPetDoghousePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Dogs will be dogs! Joke about canine patriotism, promise a new speech draft, downplay the fuss.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Protect diplomatic decorum: apologize to historians, pledge restorations, highlight beloved First Pet image abroad.",
      },
      authorizedContent:
        "Archivists recovered 83 % of the speech text from teleprompter backups. A facsimile parchment will replace the chewed original for museum display within 48 hrs.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain preservation protocols, outline restoration process, and reassure public no history is permanently lost.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Stress that security procedures succeeded—only paper was harmed. No threat to officials or facilities.",
      },
    },
  },
};
