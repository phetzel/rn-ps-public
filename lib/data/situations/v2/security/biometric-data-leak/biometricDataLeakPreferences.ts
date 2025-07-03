import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const biometricDataLeakPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to deflect blame by pointing the finger at the 'lone wolf' intern and outdated systems from the past.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Believes in radical transparency here, admitting the full scope of the breach to maintain any shred of public trust.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to reassure the public that they will prosecute the responsible parties to the fullest extent of the law.",
      },
    },
  },
};
