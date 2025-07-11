import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const internetCurfewPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to frame this as common-sense public health and deflect from authoritarian-sounding details.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to present scientific data linking screen time to poor health outcomes to justify the proposal medically.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Worried about pushing traffic to dark nets and wants to challenge the wisdom of the entire proposal.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Knows this faces legal hurdles and wants to reassure that any final rule would respect constitutional rights.",
      },
    },
  },
};
