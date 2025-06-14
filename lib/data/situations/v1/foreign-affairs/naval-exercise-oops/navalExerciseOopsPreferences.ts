import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const navalExerciseOopsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Frame the seizure as a training glitch and shift focus to ongoing security cooperation.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Own the mistake, promise compensation, and cite steps to prevent repeats during joint drills.",
      },
      authorizedContent:
        "Exercise report shows miscommunication between radar teams led to the boarding. No classified cargo was exposed, and commanders recommend a goodwill payment for damages.",
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Stress that homeland security wasn't compromised and cooperation with the ally continues.",
      },
    },
  },
};
