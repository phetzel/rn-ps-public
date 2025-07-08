import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const bridgeToNowherePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to avoid getting bogged down in spending debate, preferring to highlight broader infrastructure goals.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Concerned about cost optics and wants to reassure the public that fiscal oversight is a top priority.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Focused on potential corruption and wants to challenge the narrative that this is normal government spending.",
      },
    },
  },
};
