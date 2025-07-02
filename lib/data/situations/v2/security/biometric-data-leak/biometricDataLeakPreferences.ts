import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const biometricDataLeakPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to deflect blame from their administration by pointing the finger at the 'lone wolf' intern and outdated systems from the past.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Homeland Security believes in radical transparency here, admitting the full scope of the breach to maintain any shred of public trust.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Attorney General wants to reassure the public that they will prosecute the responsible parties to the fullest extent of the law.",
      },
    },
  },
};
