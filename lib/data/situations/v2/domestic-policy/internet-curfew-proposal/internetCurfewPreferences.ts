import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const internetCurfewPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to frame this as a common-sense public health idea, like getting enough sleep, and deflect from the authoritarian-sounding details.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "HHS wants to present the scientific data linking excessive screen time to poor health outcomes to justify the proposal on medical grounds.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Homeland Security is worried about pushing traffic to un-monitorable dark nets and wants to challenge the wisdom of the entire proposal.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Attorney General knows this faces huge legal hurdles and wants to reassure the public that any final rule would respect constitutional rights.",
      },
    },
  },
};
